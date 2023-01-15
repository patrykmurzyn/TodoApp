import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './pages/Routing';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
