import React, {useRef, useState} from 'react'
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


export const TextInput = () => {
    const classes = useStyles();
    const [inputText, setInputText] = useState("");

    const formSubmit = ()=>{
        const json = {iam : inputText};
        httpService.post('', JSON.stringify(json))
          .then((value) => console.log('Value:',value))
          .catch((error) => console.error('Error:', error));
    } 

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Store the input value to local state
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
            <Button variant="contained" color="primary" type="submit" className={classes.button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



