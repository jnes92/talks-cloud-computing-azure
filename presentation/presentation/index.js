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
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";
import def1 from "./def1-rg.md"
import def2 from "./def2-appService.md"
import def3 from "./def3.md"
import def4 from "./def4.md"
import def5 from "./def5.md"

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
          <Notes>
            {/* <Markdown source={def1} /> */}
          </Notes>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Kapitel 1: Einführung
            </Heading>
          <List ordered textColor="tertiary">
            <ListItem bold> Über mich </ListItem>
            <ListItem bold> BRICKMAKERS GmbH </ListItem>
          </List>
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
