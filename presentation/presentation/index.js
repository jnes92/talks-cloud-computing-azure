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
import def3 from "./def3.md"
import def4 from "./def4.md"
import def5 from "./def5.md"

import teamIdeaLogo from '../assets/team-idea.png'

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
    let definitionsMd = [def1, def2, def3, def4, def5]

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
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
          <Text> Kommt gerne für einen Kaffee vorbei </Text>
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
            <ListItem> App Service Plan Tipps </ListItem>
            <ListItem> Zero-Downtime Deployment</ListItem>
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


      </Deck>
    );
  }
}
