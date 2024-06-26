import React from 'react';

import SelectCatagory from '../../ui/SelectCatagory';

import {useAppNavitaion} from '../../@types/AppNavigation';

const SelectCatagoryScreen = () => {
  const navigation = useAppNavitaion();

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCatagoryIconPressed = () => {
    navigation.navigate('ChooseMedicine_Screen');
  };

  const onCartIconPressed = () => {
    navigation.navigate('Cart_Screen');
  };
  const onMyOrdersPressed = () => {
    navigation.navigate('Order_Screen');
  };

  return (
    <SelectCatagory
      onBackArrowPressed={onBackArrowPressed}
      onCatagoryIconPressed={onCatagoryIconPressed}
      onCartIconPressed={onCartIconPressed}
      onMyOrdersPressed={onMyOrdersPressed}
    />
  );
};

export default SelectCatagoryScreen;
