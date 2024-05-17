import React from 'react';

import Order from '../../ui/Order';

import { useAppNavitaion } from '../../@types/AppNavigation';

const OrderScreen = () => {
  const navigation = useAppNavitaion();

  const onConfirmPressed = () => {
    navigation.navigate('OrderAgain_Screen');
  };

  const onArrowBackPressed = () => {
    navigation.goBack();
  };
  return (
    <Order
      onConfirmPressed={onConfirmPressed}
      onArrowBackPressed={onArrowBackPressed}
    />
  );
};

export default OrderScreen;
