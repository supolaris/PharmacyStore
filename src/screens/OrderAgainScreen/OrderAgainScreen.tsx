import React from 'react';

import { useAppNavitaion } from '../../@types/AppNavigation';

import OrderAgain from '../../ui/OrderAgain';

const OrderAgainScreen = () => {
  const navigation = useAppNavitaion();

  const onArrowBackPressed = () => {
    navigation.goBack();
  };

  const onOrderAgainPressed = () => {
    navigation.navigate('SelectCity_Screen');
  };
  return (
    <OrderAgain
      onArrowBackPressed={onArrowBackPressed}
      onOrderAgainPressed={onOrderAgainPressed}
    />
  );
};

export default OrderAgainScreen;
