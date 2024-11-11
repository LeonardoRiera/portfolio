import './App.css'
import React from 'react';
import { LanguageProvider } from './Contexts/LanguageContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importa la configuración de i18next
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import Proyects from './Components/Proyects/Proyects.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Faja from './Components/Faja/Faja.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx'
import RoutMap from './Components/RoutMap/RoutMap.jsx';

const App = () => {
  return (

    <div className='App'>
      <LanguageProvider>

        <I18nextProvider i18n={i18n}>

          <Navbar />
          <Header />
          <AboutMe />
          <Faja />
          <Proyects />        
          <Footer /> 
           

        </I18nextProvider>

      </LanguageProvider>
    </div>

  );
};

export default App;

