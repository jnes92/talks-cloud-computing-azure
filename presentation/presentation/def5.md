##### Zero-Downtime Deployment
- App Service have deployment slots
- you can define multi slots to use for production / staging / development or more
- you can deploy to Slot B -> Test B -> Swap A-B after successful tests
- Zero - downtime deployments 
- some applications need to do warmup (fill cache with data) -> can be done in Slot B before swapping
- all slots share 1 VIP (virtual ip) -> nslookup -> waws-prod-ln1-013.vip.azurewebsites.windows.net -> WAWS: Windows Azure Web Sites 
- Azure was called Windows before, App Service was called Web Sites before :D 