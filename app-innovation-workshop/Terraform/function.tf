# We are using Docker for the Web App, so we have to use Linux
# as Functions host. Currently, Consumption Plan for Azure Functions
# is only in preview, so we host the Function on the Same App Service Plan as the API
/*
resource "azurerm_app_service_plan" "func" {
  name                = "azure-functions-${var.resource_name}-service-plan"
  location            = "${azurerm_resource_group.workshop.location}"
  resource_group_name = "${azurerm_resource_group.workshop.name}"
  kind                = "FunctionApp"

  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}*/

resource "azurerm_function_app" "workshop" {
  name                      = "func-${var.resource_name}${random_id.workshop.dec}"
  location                  = "${azurerm_resource_group.workshop.location}"
  resource_group_name       = "${azurerm_resource_group.workshop.name}"
  app_service_plan_id       = "${azurerm_app_service_plan.workshop.id}"
  storage_connection_string = "${azurerm_storage_account.workshop.primary_connection_string}"

  # looks like at the moment for v2 http version has to be http1.1 and app has to be 32bit
  version = "~2"

  app_settings {
    APPINSIGHTS_INSTRUMENTATIONKEY = "${azurerm_application_insights.workshop.instrumentation_key}"

    CosmosDB = "AccountEndpoint=${azurerm_cosmosdb_account.workshop.endpoint};AccountKey=${azurerm_cosmosdb_account.workshop.primary_master_key};"

    CognitiveServicesEndpoint = "${azurerm_template_deployment.workshop.outputs["vision_endpoint"]}"
    CognitiveServicesKey      = "${azurerm_template_deployment.workshop.outputs["vision_key"]}"
  }

  identity {
    type = "SystemAssigned"
  }
}
