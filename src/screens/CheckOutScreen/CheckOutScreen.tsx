import React from 'react';
import {View, Text} from 'react-native';

import {useAppNavitaion} from '../../@types/AppNavigation';

import CheckOut from '../../ui/CheckOut';

const CheckOutScreen = () => {
  const navigation = useAppNavitaion();

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onModalButtonPressed = () => {
    navigation.navigate('Order_Screen');
  };
  const onCartImagePressed = () => {
    navigation.navigate('Cart_Screen');
  };
  return (
    <CheckOut
      onBackArrowPressed={onBackArrowPressed}
      onModalButtonPressed={onModalButtonPressed}
      onCartImagePressed={onCartImagePressed}
    />
  );
};

export default CheckOutScreen;
