import React, { useEffect } from 'react';
// import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
// import Login from './components/Login';
import ReduxProvider from './Service/store.js'

const App = () => {

  return (
    <ReduxProvider>
      <div>
        <Chat/>
      </div>
  </ReduxProvider>
  );
};

export default App;