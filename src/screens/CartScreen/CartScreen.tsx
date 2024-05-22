import React from 'react';

import {useAppNavitaion} from '../../@types/AppNavigation';

import Cart from '../../ui/Cart';

const CartScreen = () => {
  const navigation = useAppNavitaion();

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
