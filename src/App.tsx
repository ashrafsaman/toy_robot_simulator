import React from "react";
import './App.css';
import { Provider } from "react-redux";
import store from "./store/configureStore";
import { Container, Typography, Box } from '@mui/material';
import Menu from './components/Menu';
import Board from './components/Board';

function App() {

  return (
    <Provider store={store}>
      <Container className="App" maxWidth="xl">
        <Box display="flex" flexDirection={['column', 'column', 'row', 'row']} gap={4}>
          <Box width="100%">
            <Typography variant="h3" component="h3" color="primary" marginBottom="64px">Toy Robot Simulator</Typography>
            <Menu />
          </Box>
          <Board />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;

