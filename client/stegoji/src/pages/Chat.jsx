import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import store from '../Service/store'
import { connect } from 'react-redux';
import { appendData,removeFirstData  } from '../Service/actions';
import { TextInput } from "../components/TextInput";
import { MessageLeft, MessageRight } from "../components/Message";
import { type } from "@testing-library/user-event/dist/type";
// import { usePromiseTracker } from "react-promise-tracker";
// import { trackPromise } from "react-promise-tracker";
// import httpService from "../Service/httpService"
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


function Chat({ allData, appendData,removeFirstData  }) {
  useEffect(()=>{
    removeFirstData();
  }, [])
  const [url, setUrl] = useState("")
  const decrypt = async ()=>{
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.message)
    } else {

    }
  }
  
  const convertTupleStringToArray = (tupleString)=> {
    tupleString = tupleString.trim().slice(1, -1);
    const tupleValues = tupleString.split(',');
    const array = tupleValues.map(value => value.trim());
    return array;
  }
    const classes = useStyles();
    const handleDataUpdate = (newData) => {
      appendData(newData);
      setUrl(`http://localhost:5000/api/decrypt?data=${convertTupleStringToArray(newData)[0]}&key=${convertTupleStringToArray(newData)[0]}`)
      decrypt();
    };
    const renderMessages = (data) => {
      return data.slice(1).map((message, index) => (
        message !== "" ? <MessageRight
          key={index}
          message={message}
          // timestamp={message.timestamp}
          // photoURL={message.photoURL}
          // displayName={message.displayName}
        />
        : <div></div>
      ));
    };
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} zDepth={2}>
          <Paper id="style-1" className={classes.messagesBody}>
          {renderMessages(allData)}
          </Paper>
          <TextInput onDataUpdate={handleDataUpdate}/>
        </Paper>
        <Paper>

        </Paper>
      </div>
    );
  }
  const mapStateToProps = (state) => {
    return {
      allData: Object.values(state.data)
    };
  };
  
  export default connect(mapStateToProps, { appendData,removeFirstData  })(Chat);
  
