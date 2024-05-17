import React from 'react';

import ImageDescription from '../../ui/ImageDescription';

import { useAppNavitaion } from '../../@types/AppNavigation';

const ImageDescriptionScreen = () => {
  const navigation = useAppNavitaion();

  const onAddToCartPressed = () => {
    navigation.navigate('Cart_Screen');
  };

  const onBackArrowPressed = () => {
    navigation.goBack();
  };
  return (
    <ImageDescription
      onAddToCartPressed={onAddToCartPressed}
      onBackArrowPressed={onBackArrowPressed}
    />
  );
};

export default ImageDescriptionScreen;
