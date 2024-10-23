// src/Contexts/LanguageContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const LanguageContext = createContext();

// Este es el proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // nos aseguramos que el Estado inicial este en español

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
