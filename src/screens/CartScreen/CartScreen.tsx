import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Cart from '../../ui/Cart';

const CartScreen = () => {
  const navigation = useNavigation();

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCheckoutPressed = () => {
    navigation.navigate('CheckOut_Screen');
  };
  return (
    <Cart
      onBackArrowPressed={onBackArrowPressed}
      onCheckoutPressed={onCheckoutPressed}
    />
  );
};

export default CartScreen;
