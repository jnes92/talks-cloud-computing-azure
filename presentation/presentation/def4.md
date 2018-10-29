#### App Service Plan Tipps
- 1 App Service Plan can have multiple Web Apps
- Its fine if you don’t bother Performance „thieves“ from other apps
- Place high demand apps into an App Service Plan which is configured to auto-scale based on CPU and memory utilisation.
	- You can also use Per-App Scaling (instead of „Per-Plan Scaling“),
	- per app : controls maximum of servers allocated to app
	- per plan: application will run on all available services
