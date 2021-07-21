import React from "react";
import { DiscordMessage } from "../../components/DiscordMessage/DiscordMessage";
import { Page } from "../Page";
// import { Card } from "../../components/Card/Card";
import "./HomePage.scss";

export const HomePage: React.FunctionComponent = () => {
  return (
    <div className="HomePage">
      <Page title="Home" centered={true}>
        {/* <Card linkTo="/ratings">
          <h2>Ratings</h2>
        </Card> */}
        <div className="content">
          <DiscordMessage
            displayName="Gowon"
            roleColour="#02BCA1"
            avatarURL="https://cdn.discordapp.com/avatars/720135602669879386/72dbc5628d2e045826f96229a9345a08.png?size=1024"
          >
            <p>Welcome to Gowon!</p>
          </DiscordMessage>

          <div className="buttons">
            <a
              href="https://discord.com/oauth2/authorize?client_id=720135602669879386&scope=bot&permissions=26688"
              className="button button-discord invite"
            >
              Invite the bot
            </a>
            <a
              href="https://discord.gg/9Vr7Df7TZf"
              className="button button-discord support"
            >
              Join the support server
            </a>
            <a
              href="https://last.fm/user/gowon_"
              className="button button-lastfm lastfm"
            >
              Follow her on Last.fm
            </a>
          </div>
        </div>
      </Page>
    </div>
  );
};
