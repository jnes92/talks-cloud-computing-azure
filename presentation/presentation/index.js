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
import deploymentEnvImage from "../assets/02_deployment_stages.png"

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


    let azureServicesBasicMd = [
      { md: [azureRessourceGroup], title: "Ressource Group" },
      { md: [def2], title: "App Service" },
      { md: [def3, def4], title: "App Service Plan" },
      {
        md: [
          azureDbSql, azureDbCosmos
        ], title: "Datenbanken"
      },
      { md: [azureBlob], title: "Blob Storage" },
      {
        md: [
          def5,
          def5env,
          def5zd
        ],
        images: {
          1: deploymentEnvImage
        },
        title: "Deployment"
      }
    ];

    let azureServicesExtendedMd = [

      { md: [azureAnalytics], title: "Analytics" },
      {
        md: [azureAuth], title: "Authentifizierung"
      },
      {
        md: [azureSearch,], title: "azureSearch"
      },
      {
        md: [azureFunctions,], title: "azureFunctions"
      },
      {
        md: [azureContainer,], title: "azureContainer"
      },
      {
        md: [azureAI,], title: "azureAI"
      },
      {
        md: [azureChatBots,], title: "azureChatBots"
      },
      {
        md: [azureIoT,], title: "azureIoT"
      },
    ]

    const chapters = [
      {
        title: "Einführung", subslides: [
          { title: "BRICKMAKERS GmbH" },
          { title: "Über mich" },
          { title: "Was ist Azure?" },
        ]
      },
      { title: "Azure Services", subslides: [] },
      { title: "Workshop & Hands-On", subslides: [] },
      { title: "Azure Services - Ausblick", subslides: [] },
    ]


    return (
      <Deck transition={[ "slide", "fade"]} transitionDuration={500} theme={theme} progress="pacman">
        <Slide  bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            Hochschule Koblenz - BRICKMAKERS GmbH
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Übersicht
            </Heading>
          <List ordered textColor="tertiary">
            {chapters.map(chapter => <ListItem> {chapter.title} </ListItem>)}
          </List>
        </Slide>

        {/* Kapitel 1: Einführung */}
        <Slide bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 1: {chapters[0].title}
          </Text>
        </Slide>
        <Slide   bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: {chapters[0].title}
          </Heading>
          <List ordered textColor="tertiary">
            {chapters[0].subslides.map(section => <ListItem bold>{section.title}</ListItem>)}
          </List>
        </Slide>

        <Slide align="center flex-start"   bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutBrickmakersNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: {chapters[0].title}
          </Heading>
          <Markdown fit textColor="tertiary" source={aboutBrickmakers} />
          <Image src={teamIdeaLogo} />
          <Text> Kommt gerne auf einen Kaffee vorbei </Text>
          <Text> Oder besucht uns bei einem Meetup! </Text>
          {[bmKunde1, bmKunde2, bmKunde3, bmKunde4].map(kunde =>
            <Image width="10%" display="inline" src={kunde} margin="30" />
          )}
        </Slide>



        <Slide align="center flex-start"   bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutMeNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: {chapters[0].title}
          </Heading>
          <Markdown fit textColor="tertiary" source={aboutMe} />
        </Slide>

        <Slide align="center flex-start"   bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={aboutAzureNotes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: {chapters[0].title}
          </Heading>
          <Markdown fit textColor="tertiary" source={aboutAzure} />
        </Slide>


        {/* Kapitel 2: Überblick in Azure */}
        <Slide   bgColor="tertiary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 2: {chapters[1].title}
          </Text>
        </Slide>
        <Slide   bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin="10">
            Kapitel 2: {chapters[1].title}
          </Heading>
          <List ordered textColor="tertiary">
            {azureServicesBasicMd.map(def =>
              <ListItem> {def.title} </ListItem>
            )}
          </List>
        </Slide>
        {azureServicesBasicMd.map(definition =>
          definition.md.map((subslide, index) => (
            <Slide align="center flex-start"   bgColor="primary" maxWidth={"100%"} >
              <Heading size={6} caps lineHeight={1} textColor="secondary">
                2. {chapters[1].title}
              </Heading>
              <Markdown textColor="tertiary" source={subslide} />
              {definition.images && definition.images[index] && <Image src={definition.images[index]} />}
            </Slide>
          ))
        )}



        {/* Kapitel 3: Workshop App Innovation  */}
        <Slide   bgColor="tertiary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 3: Workshop - App Innovation
          </Text>
        </Slide>
        <Slide   bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 3: Workshop
          </Heading>
          <List ordered textColor="tertiary">
            <ListItem> Systemüberblick </ListItem>
            <ListItem> Hands-On </ListItem>
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
        <Slide bgColor="primary" >
        <Notes>
          <Markdown source={`
- Zeit checken
- Demo max. 60 min
          `} />
        </Notes>
          <Heading size={6}  caps lineHeight={1} textColor="secondary">
          3. Workshop
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            Hands-On
          </Text>
        </Slide>



        {/* Kapitel 4: Azure Services - Ausblick */}
        <Slide   bgColor="tertiary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="primary" size={3} fit bold>
            Kapitel 4: {chapters[3].title}
          </Text>
        </Slide>
        <Slide   bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary" margin="10">
            Kapitel 4: {chapters[3].title}
          </Heading>
          <List ordered textColor="tertiary">
            {azureServicesExtendedMd.map(def =>
              <ListItem> {def.title} </ListItem>
            )}
          </List>
        </Slide>
        {azureServicesExtendedMd.map(definition =>
          definition.md.map((subslide, index) => (
            <Slide align="center flex-start"   bgColor="primary" maxWidth={"100%"} >
              <Heading size={6} caps lineHeight={1} textColor="secondary">
                4. {chapters[3].title}
              </Heading>
              <Markdown textColor="tertiary" source={subslide} />
              {definition.images && definition.images[index] && <Image src={definition.images[index]} />}
            </Slide>
          ))
        )}

        {/* Fragen & Ende  */}
        <Slide   bgColor="primary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Vielen Dank 
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
          für Ihre Aufmerksamkeit!
          </Text>
        </Slide>
      </Deck>
    );
  }
}
