import React from 'react';

import SelectCity from '../../ui/SelectCity';

import {useAppNavitaion} from '../../@types/AppNavigation';

const SelectCityScreen = () => {
  const navigation = useAppNavitaion();

  const onPress = () => {
    navigation.navigate('SelectCatagory_Screen');
  };

  const onSelectCityPressed = () => {
    navigation.navigate('SelectCity_Screen');
  };
  return (
    <SelectCity onPress={onPress} onSelectCityPressed={onSelectCityPressed} />
  );
};

export default SelectCityScreen;
