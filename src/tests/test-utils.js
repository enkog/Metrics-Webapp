/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '../reducer';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        countries: {
          countries: [{
            name: 'Algeria',
            topLevelDomain: [
              '.dz',
            ],
            alpha2Code: 'DZ',
            alpha3Code: 'DZA',
            callingCodes: [
              '213',
            ],
            capital: 'Algiers',
            altSpellings: [
              'DZ',
              'Dzayer',
              'Algérie',
            ],
            subregion: 'Northern Africa',
            region: 'Africa',
            population: 43851043,
            latlng: [
              28,
              3,
            ],
            demonym: 'Algerian',
            area: 2381741,
            gini: 27.6,
            timezones: [
              'UTC+01:00',
            ],
            borders: [
              'TUN',
              'LBY',
              'NER',
              'ESH',
              'MRT',
              'MLI',
              'MAR',
            ],
            nativeName: 'الجزائر',
            numericCode: '012',
            flags: {
              svg: 'https://flagcdn.com/dz.svg',
              png: 'https://flagcdn.com/w320/dz.png',
            },
            currencies: [
              {
                code: 'DZD',
                name: 'Algerian dinar',
                symbol: 'د.ج',
              },
            ],
            languages: [
              {
                iso639_1: 'ar',
                iso639_2: 'ara',
                name: 'Arabic',
                nativeName: 'العربية',
              },
            ],
            translations: {
              br: 'Argélia',
              pt: 'Argélia',
              nl: 'Algerije',
              hr: 'Alžir',
              fa: 'الجزایر',
              de: 'Algerien',
              es: 'Argelia',
              fr: 'Algérie',
              ja: 'アルジェリア',
              it: 'Algeria',
              hu: 'Algéria',
            },
            flag: 'https://flagcdn.com/dz.svg',
            regionalBlocs: [
              {
                acronym: 'AU',
                name: 'African Union',
                otherNames: [
                  'الاتحاد الأفريقي',
                  'Union africaine',
                  'União Africana',
                  'Unión Africana',
                  'Umoja wa Afrika',
                ],
              },
              {
                acronym: 'AL',
                name: 'Arab League',
                otherNames: [
                  'جامعة الدول العربية',
                  'Jāmiʻat ad-Duwal al-ʻArabīyah',
                  'League of Arab States',
                ],
              },
            ],
            cioc: 'ALG',
            independent: true,
          }],
        },
      },
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}><Router>{children}</Router></Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
