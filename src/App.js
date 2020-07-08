import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CardPhotoLeft from './Components/CardPhotoLeft/CardPhotoLeft';
import CardPhotoRight from './Components/CardPhotoRight/CardPhotoRight';
import HorizontalPhoto from './Components/HorizontalPhoto/HorizontalPhoto';
import HorizontalLine from './Components/HorizontalLine/HorizontalLine';
import FreeText from './Components/FreeText/FreeText';
import Navigation from './Components/Navigation/Navigation';
//
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './Components/UseTheme/UseTheme';
import ToggleMode from './Components/ToggleMode/ToggleMode';
import style from 'styled-theming';
import storage from 'local-storage-fallback';



const getBackground = style('mode' , {
  light: 'EEE',
  dark: '#111'
});

const getForeground = style('mode' , {
  light: 'EEE',
  dark: '#111'
});

const getFontSize = style('textZoom', {
  normal: '1em',
  magnify: '1.2em'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontSize};
}
`;

// function getInitialTheme() {
//   const savedTheme = storage.getItem('theme')
//   return savedTheme ?JSON.parse(savedTheme) : { mode: 'light'}
// }

function App() {
  // const [theme, setTheme] = useState(getInitialTheme)
  const theme = useTheme();

  return (
    
    <>
    <ThemeProvider theme= {theme}>
    <GlobalStyle/>
    <div>
    {/* <Navbar></Navbar> */}
    <Navigation></Navigation>
    </div>
    <br></br>
    <br></br>
    <div className="Main">
    <CardPhotoLeft></CardPhotoLeft>
    <br></br>
    <ToggleMode />
    <button
            onClick={e =>
              theme.setTheme(
                theme.textZoom === 'normal'
                  ? { ...theme, textZoom: 'magnify' }
                  : { ...theme, textZoom: 'normal' }
              )
            }
          >
            Toggle Zoom
    </button>
    <HorizontalLine></HorizontalLine>
    <br></br>
    <CardPhotoRight></CardPhotoRight>
    <HorizontalLine></HorizontalLine>

    <br></br>
    <HorizontalPhoto></HorizontalPhoto>
    <HorizontalLine></HorizontalLine>
    
    <FreeText></FreeText>
          
    </div>
    </ThemeProvider>
    <Footer></Footer>
    </>
    
  );
}

export default App;
