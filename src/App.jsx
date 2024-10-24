import './App.css'
import React from 'react';
import { LanguageProvider } from './Contexts/LanguageContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Importa la configuración de i18next
import Navbar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx'

const App = () => {
  return (

    <LanguageProvider>

      <I18nextProvider i18n={i18n}>

        <Navbar />
        <Header />

      </I18nextProvider>

    </LanguageProvider>

  );
};

export default App;
