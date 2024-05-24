import React from 'react';
import {View, Text} from 'react-native';

import ChooseMedicine from '../../ui/ChooseMedicine';

import {useAppNavitaion} from '../../@types/AppNavigation';

const ChooseMedicineScreen = () => {
  const navigation = useAppNavitaion();

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onCartIconPressed = () => {
    navigation.navigate('Cart_Screen');
  };

  const medicineSelectionPressed = () => {
    navigation.navigate('ImageDescription_Screen');
  };

  const onFooterCartPressed = () => {
    navigation.navigate('Cart_Screen');
  };

  return (
    <ChooseMedicine
      onBackArrowPressed={onBackArrowPressed}
      onCartIconPressed={onCartIconPressed}
      medicineSelectionPressed={medicineSelectionPressed}
      onFooterCartPressed={onFooterCartPressed}
    />
  );
};

export default ChooseMedicineScreen;
