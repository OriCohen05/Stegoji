import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import store from "../Service/store";
import { connect } from "react-redux";
import { appendData, removeFirstData } from "../Service/actions";
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
      position: "relative",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
  })
);

function Chat({ allData, appendData, removeFirstData }) {
  useEffect(() => {
    removeFirstData();
  }, []);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [output, setOutPut] = useState("");
  const decrypt = async (data, key) => {
    const response = await fetch(
      `http://localhost:8080/api/decrypt?data=${data}&key=${key}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setOutPut(data.output);
    } else {
    }
  };
  const removeQuotes = (value) => {
    if (typeof value === "string") {
      // Check if the value starts and ends with single quotes
      if (value.startsWith("'") && value.endsWith("'")) {
        // Remove the single quotes
        value = value.slice(1, -1);
      }
    }

    return value;
  };
  const convertTupleStringToArray = (tupleString) => {
    tupleString = tupleString.trim().slice(1, -1);
    const tupleValues = tupleString.split(",");
    const array = tupleValues.map((value) => value.trim());
    console.log(array);
    return array;
  };
  const classes = useStyles();
  const handleDataUpdate = (newData) => {
    appendData(newData);
    console.log(url);
  };
  const renderMessages = (data) => {
    return data.slice(1).map((message, index) =>
      message !== "" ? (
        <MessageRight
          key={index}
          message={message}
          // timestamp={message.timestamp}
          // photoURL={message.photoURL}
          // displayName={message.displayName}
        />
      ) : (
        <div></div>
      )
    );
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Key:", key);
    console.log("Value:", value);
    // setOutPut(decrypt(key, value));
    decrypt(key, value);
  };
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zDepth={2}>
        <h1>Encryptor</h1>
        <Paper id="style-1" className={classes.messagesBody}>
          {renderMessages(allData)}
        </Paper>
        <TextInput onDataUpdate={handleDataUpdate} />
      </Paper>
      <Paper className={classes.paper} zDepth={2}>
        <h1>Decryptor</h1>
        <Paper id="style-1" className={classes.messagesBody}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Key:
                <input type="text" value={key} onChange={handleKeyChange} />
              </label>
            </div>
            <div>
              <label>
                Value:
                <input type="text" value={value} onChange={handleValueChange} />
              </label>
            </div>
            <button type="submit">Submit</button>
            <MessageLeft message={output}></MessageLeft>
          </form>
        </Paper>
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    allData: Object.values(state.data),
  };
};

export default connect(mapStateToProps, { appendData, removeFirstData })(Chat);
