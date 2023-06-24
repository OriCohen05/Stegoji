import React, {useRef, useState, useEffect} from 'react'
import httpService from "../Service/httpService"
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);


export const TextInput = ({ onDataUpdate }) => {
  const button = useRef();
  useEffect(() => {
    // button.current.click();
  }, [])
  const classes = useStyles();
  const [inputText, setInputText] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
    const formSubmit =async (e) => {
      e.preventDefault();
      const json = {
        request: {
          message: inputText
        }
      };
      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        onDataUpdate(responseMessage);
      } else {
        setResponseMessage('Error: Failed to get response');
      }
    }

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

    return (
        <>
            <form className={classes.wrapForm} onSubmit={formSubmit} noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Write something mf"
                className={classes.wrapText}
                //margin="normal"
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit" className={classes.button} ref={button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



