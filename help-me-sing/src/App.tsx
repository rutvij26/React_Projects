import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Theme/GlobalStyles';
import { theme } from './Theme/theme';


const AppContainer = styled.div`
display : flex;
flex : 1;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.text}
`;


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        HELP ME SING APP!
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
