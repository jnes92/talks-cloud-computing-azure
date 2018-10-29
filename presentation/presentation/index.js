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
  Image
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Chapter 1 Slide Markdown Files
import aboutBrickmakers from "./aboutBrickmakers.md"
import aboutMe from "./aboutMe.md"
import aboutAzure from "./aboutAzure.md"
import chapter1Notes from "./chapter1Notes.md"

// Chapter 2 Slide Markdown Files
import def1 from "./def1-rg.md"
import def2 from "./def2-appService.md"
import def3 from "./def3-asp.md"
import def4 from "./def3-asp-tipps.md"
import def5 from "./def4-deployment.md"
import def5zd from "./def4-deployment-zerodown.md"
import def5env from "./def4-deployment-env.md"

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

    let introductionMd = [{ md: aboutBrickmakers, image: teamIdeaLogo }, { md: aboutMe }]
    let definitionsMd = [def1, def2, def3, def4, def5, def5env, def5zd]

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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
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
            <Markdown source={chapter1Notes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>

          <Markdown fit textColor="tertiary" source={aboutBrickmakers} />
          <Image src={teamIdeaLogo} />
          <Text> Kommt gerne auf einen Kaffee vorbei </Text>
        </Slide>

        <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
          <Notes>
            <Markdown source={chapter1Notes} />
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <Markdown fit textColor="tertiary" source={aboutMe} />
        </Slide>

        <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
          <Notes>
            {/* <Markdown source={chapter1Notes} /> */}
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <Markdown fit textColor="tertiary" source={aboutAzure} />
        </Slide>






        {/* Kapitel 2: Überblick in Azure */}
        <Slide transition={["zoom"]} bgColor="primary" >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cloud Computing: Azure
            </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} fit bold>
            Kapitel 2: Überblick in Azure
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 2: Überblick in Azure
          </Heading>
          <List ordered textColor="tertiary">
            <ListItem> Ressource Group </ListItem>
            <ListItem> App Service </ListItem>
            <ListItem> App Service Plan </ListItem>
            <ListItem> Deployment</ListItem>
            <ListItem> Datenbanken </ListItem>
            {/* TODO: ADD Database (SQL, Cosmos DB) */}
            <ListItem> weitere Services </ListItem> 
          {/* TODO: ADD AI, Functions, Cosmos DB, IoT Hub  */}
          </List>
        </Slide>
        {definitionsMd.map(definition => (
          <Slide align="center flex-start" transition={["zoom"]} bgColor="primary" maxWidth={"100%"} >
            <Heading size={6} caps lineHeight={1} textColor="secondary">
              2. Überblick in Azure
          </Heading>
            <Markdown fit textColor="tertiary" source={definition} />
          </Slide>
        ))}


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
