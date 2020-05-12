import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CardPhotoLeft from './Components/CardPhotoLeft/CardPhotoLeft';
import CardPhotoRight from './Components/CardPhotoRight/CardPhotoRight';
import HorizontalPhoto from './Components/HorizontalPhoto/HorizontalPhoto';
import HorizontalLine from './Components/HorizontalLine/HorizontalLine';
import FreeText from './Components/FreeText/FreeText';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <>
    <div>
    {/* <Navbar></Navbar> */}
    <Navigation></Navigation>
    </div>
    <br></br>
    <br></br>
    <div className="Main">
    <CardPhotoLeft></CardPhotoLeft>
    <br></br>
    <HorizontalLine></HorizontalLine>
    <br></br>
    <CardPhotoRight></CardPhotoRight>
    <HorizontalLine></HorizontalLine>

    <br></br>
    <HorizontalPhoto></HorizontalPhoto>
    <HorizontalLine></HorizontalLine>
    
    <FreeText></FreeText>

    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
