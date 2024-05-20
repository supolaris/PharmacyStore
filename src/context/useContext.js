import {createContext, useState} from 'react';

export const MyContext = createContext({
  cityName: 'Islamabad',
  cityNameFunction: name => {},
});

function ContextProvider({children}) {
  const [selectedCityName, setSelectedCityName] = useState();

  const selectedCity = city => {
    setSelectedCityName(city);
  };

  const values = {
    cityNameFunction: selectedCity,
    cityName: selectedCityName,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}

export default ContextProvider;
