import React, { useEffect } from 'react';
import io from 'socket.io-client';
import Chat from './pages/Chat';
const App = () => {

  return <div><Chat/></div>;
};

export default App;