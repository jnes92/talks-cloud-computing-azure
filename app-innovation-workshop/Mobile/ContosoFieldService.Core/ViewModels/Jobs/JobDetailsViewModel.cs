﻿using System.Collections.Generic;
using ContosoFieldService.Models;
using Humanizer;
using Xamarin.Forms;
using Xamarin.Essentials;

namespace ContosoFieldService.ViewModels
{
    public class JobDetailsViewModel : BaseViewModel
    {
        Photo selectedPhoto;
        public Photo SelectedPhoto
        {
            get { return selectedPhoto; }
            set
            {
                selectedPhoto = value;
                RaisePropertyChanged();
            }
        }

        List<Photo> photos;
        public List<Photo> Photos
        {
            get { return photos; }
            set { photos = value; RaisePropertyChanged(); }
        }

        public string Name { get; set; }
        public string Details { get; set; }
        public string Age { get; set; }
        public string DueDate { get; set; }
        public string ContactName { get; set; }
        public string CompanyName { get; set; }
        public Models.Point Point { get; set; }
        public FormattedString NameAsFormattedString { get; set; }


        Job selectedJob;

        public Command PhotoSelected => new Command(async (object item) =>
        {
            await CoreMethods.PushPageModel<PhotoViewerViewModel>(item, false);
        });

        public Command StartJobClicked
        {
            get
            {
                return new Command(async () =>
                {
                    await CoreMethods.PushPageModel<WorkingJobViewModel>(selectedJob, true, true);
                });
            }
        }

        public Command ShareJobClicked
        {
            get
            {
                return new Command(async () =>
                {
                    await DataTransfer.RequestAsync(new ShareTextRequest
                    {
                        Title = selectedJob.Name,
                        Text = selectedJob.Details,
                        Uri = $"{Helpers.Constants.BaseUrl}job/{selectedJob.Id}"
                    });
                });
            }
        }

        public Command EditJobClicked
        {
            get
            {
                return new Command(async () =>
                {
                    //Todo 
                });
            }
        }

        public Command DeleteJobClicked
        {
            get
            {
                return new Command(async () =>
                {
                    // Confirm deletion
                    if ("Delete" == await CoreMethods.DisplayActionSheet("You're going to delete this job and it'll be embrassing for all if we need to restore it...", "Canel", "Delete"))
                    {
                        var jobsService = new Services.JobsAPIService();
                        var response = await jobsService.DeleteJobByIdAsync(selectedJob.Id);
                        await HandleResponseCodeAsync(response.code);

                        if (response.result != null)
                        {
                            jobsService.InvalidateCache();
                            await CoreMethods.PopPageModel(response.result);
                        }
                        else
                        {
                            await CoreMethods.DisplayAlert("Deletion failed", "The job could not be deleted. This most likely means authentication issues.", "Ok");
                        }
                    }
                });
            }
        }

        public Command OrderPartsClicked
        {
            get
            {
                return new Command(async () =>
                {
                    await CoreMethods.PushPageModel<PartsViewModel>();
                });
            }
        }


        public override void Init(object initData)
        {
            if (initData != null)
            {
                selectedJob = (Job)initData;
                Name = selectedJob.Name;
                NameAsFormattedString = selectedJob.NameAsFormattedString;
                Details = selectedJob.Details;
                DueDate = selectedJob.DueDate.Humanize();

                Age = selectedJob.CreatedAt.Humanize();
                Details = string.IsNullOrEmpty(selectedJob.Details) ? "Not Supplied" : selectedJob.Details;
                Point = selectedJob?.Address?.Point;
                Photos = selectedJob?.Photos;
            }
            else
            {
                selectedJob = new Job();
            }
        }

        public override void ReverseInit(object returnedData)
        {
            base.ReverseInit(returnedData);
            Init(returnedData);
        }
    }

}
