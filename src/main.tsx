import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CountryDetails from './CountryDetails';
import './index.scss';
import { MyContextProvider } from './CountriesDataProvider';
import Header from './Components/Header/Header';

export const ThemeContext = React.createContext(true);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyContextProvider>
      <ThemeContext.Provider value={true}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/country/:countryid" element={<CountryDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </MyContextProvider>
  </React.StrictMode>
);
