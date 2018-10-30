// Import React
import React from "react";

// Import Spectacle Core tags
import {

  Deck,
  Heading,
  ListItem,
  List,
  Notes,
  Slide,
  Text,
  Markdown,
  Image,
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Chapter 1 Slide Markdown Files
import aboutBrickmakers from "./aboutBrickmakers.md"
import aboutBrickmakersNotes from "./aboutBrickmakers.notes.md"
import aboutMe from "./aboutMe.md"
import aboutMeNotes from "./aboutMe.notes.md"
import aboutAzure from "./aboutAzure.md"
import aboutAzureNotes from "./aboutAzure.notes.md"

// Chapter 1 Assets
import bmKunde1 from "../assets/01_bm_kunden_cornelsen.svg"
import bmKunde2 from "../assets/01_bm_kunden_allianz.svg"
import bmKunde3 from "../assets/01_bm_kunden_telefonica.svg"
import bmKunde4 from "../assets/01_bm_kunden_strato.svg"


// Chapter 2 Slide Markdown Files
import azureRessourceGroup from "./azure-services/ressourceGroup.md"
import def2 from "./def2-appService.md"
import def3 from "./def3-asp.md"
import def4 from "./def3-asp-tipps.md"
import def5 from "./def4-deployment.md"
import def5zd from "./def4-deployment-zerodown.md"
import def5env from "./def4-deployment-env.md"

import azureDbSql from "./azure-services/database-sql.md"
import azureDbCosmos from "./azure-services/database-cosmos.md"
import azureBlob from "./azure-services/blobStorage.md"

import azureSearch from "./azure-services/search.md"
import azureAnalytics from "./azure-services/analytics.md"
import azureAI from "./azure-services/artificialIntelligence.md"
import azureAuth from "./azure-services/authentifizierung.md"
import azureContainer from "./azure-services/azureContainer.md"
import azureFunctions from "./azure-services/azureFunctions.md"
import azureChatBots from "./azure-services/chatBots.md"
import azureIoT from "./azure-services/IoTHub.md"

import teamIdeaLogo from '../assets/team-idea.png'
import workshopWelcomeImage from '../assets/03_workshop_welcome.png'
import workshopArchitectureImage from '../assets/03_workshop_Architecture.png'
import workshopAppImage from '../assets/03_workshop_app.png'


// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#009FDE",
  tertiary: "#34495E",
  quaternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });


// TODO: Add modules for slides:
// https://hackernoon.com/presentations-with-spectacle-how-i-modularize-my-deck-775c082cef08
export default class Presentation extends React.Component {
  render() {


    let definitionsMd = [
      { md: [azureRessourceGroup], title: "Ressource Group" },
      { md: [def2], title: "App Service" },
      { md: [def3, def4], title: "App Service Plan" },
      {
        md: [
          azureDbSql, azureDbCosmos
        ], title: "Datenbanken"
      },
      { md: [azureBlob], title: "Blob Storage" },
      { md: [def5, def5env, def5zd], title: "Deployment" },
      {
        md: [
          azureAnalytics,
          azureAuth,
          azureSearch,
          azureFunctions,
          azureContainer,
          azureAI,
          azureChatBots,
          azureIoT
        ],
        title: "weitere Services"
      }
    ]


    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="number">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            Hochschule Koblenz - BRICKMAKERS GmbH
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Übersicht
            </Heading>
          <List ordered textColor="tertiary">
            <ListItem> Einführung </ListItem>
            <ListItem> Überblick in Azure </ListItem>
            <ListItem> Workshop {"&"} Hands-On </ListItem>
            <ListItem> Workshop Ergebnis </ListItem>
          </List>
        </Slide>

        {/* Kapitel 1: Einführung */}
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 1: Einführung
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <List ordered textColor="tertiary">
            <ListItem bold> BRICKMAKERS GmbH </ListItem>
            <ListItem bold> Über mich </ListItem>
            <ListItem bold> Was ist Azure? </ListItem>
          </List>
        </Slide>

        <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutBrickmakersNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <Markdown fit textColor="tertiary" source={aboutBrickmakers} />
          <Image src={teamIdeaLogo} />
          <Text> Kommt gerne auf einen Kaffee vorbei </Text>
          <Text> Oder besucht uns auf der .NET User Group </Text>
          {[bmKunde1, bmKunde2, bmKunde3, bmKunde4].map(kunde =>
            <Image width="10%" display="inline" src={kunde} margin="30" />
          )}
        </Slide>



        <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutMeNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <Markdown fit textColor="tertiary" source={aboutMe} />
        </Slide>

        <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutAzureNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <Markdown fit textColor="tertiary" source={aboutAzure} />
        </Slide>


        {/* Kapitel 2: Überblick in Azure */}
        <Slide transition={["zoom"]} bgColor="tertiary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 2: Überblick in Azure
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 2: Überblick in Azure
          </Heading>
          <List ordered textColor="tertiary">
            {definitionsMd.map(def =>
              <ListItem> {def.title} </ListItem>
            )}
          </List>
        </Slide>
        {definitionsMd.map(definition =>
          definition.md.map(subslide => (
            <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
              <Heading size={6} caps lineHeight={1} textColor="secondary">
                2. Überblick in Azure
              </Heading>
              <Markdown fit textColor="tertiary" source={subslide} />
            </Slide>
          ))
        )}



        {/* Kapitel 3: Workshop App Innovation  */}
        <Slide transition={["zoom"]} bgColor="tertiary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 3: Workshop - App Innovation
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 3: Workshop
          </Heading>
          <List ordered textColor="tertiary">
            <ListItem> Systemüberblick </ListItem>
          </List>
        </Slide>


        <Slide align="center flex-start" >
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            3. Workshop
          </Heading>

          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            3.1 Architektur {"&"} Anwendung
          </Heading>

          <Image src={workshopWelcomeImage} />
          <Image src={workshopAppImage} />
        </Slide>
        <Slide align="center flex-start" >
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            3. Workshop
          </Heading>

          <Heading size={6} caps lineHeight={1} textColor="tertiary">
            3.1 Architektur {"&"} Anwendung
          </Heading>

          <Image src={workshopArchitectureImage} />
        </Slide>






      </Deck>
    );
  }
}
