import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "../components/TextInput";
import { MessageLeft, MessageRight } from "../components/Message";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import httpService from "../Service/httpService"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);


export default function Chat() {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} zDepth={2}>
          <Paper id="style-1" className={classes.messagesBody}>
            <MessageLeft
              message="Hey Ori Wanna play some rl?"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="Yaron"
              avatarDisp={true}
            />
            <MessageRight
              message="Cant come today I am working on my chat "
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="Ori"
              avatarDisp={true}
            />
            <MessageLeft
              message="You should come, cyber is useless and boring..."
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="Yaron"
              avatarDisp={true}
            />
           <MessageLeft
              message="Hmmm, Yaron? did someone hack your computer?"
              timestamp="MM/DD 00:00"
              photoURL=""
              displayName="Liam"
              avatarDisp={false}
            />
            <MessageLeft
              message="Yaron...?"
              timestamp="MM/DD 00:00"
              photoURL="https://w0.peakpx.com/wallpaper/165/445/HD-wallpaper-neon-mask-hacker-hackers-lonely-hacker-neon-mask-thumbnail.jpg"
              displayName="TomerTheHacker 👿"
              avatarDisp={false}
            />
            <MessageRight
              message="Now, thats funny"
              timestamp="MM/DD 00:00"
              photoURL="https://w0.peakpx.com/wallpaper/165/445/HD-wallpaper-neon-mask-hacker-hackers-lonely-hacker-neon-mask-thumbnail.jpg"
              displayName="Ori"
              avatarDisp={false}
            />
          </Paper>
          <TextInput />
        </Paper>
      </div>
    );
  }
  
