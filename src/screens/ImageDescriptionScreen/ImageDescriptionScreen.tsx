import React from 'react';

import ImageDescription from '../../ui/ImageDescription';

import {useAppNavitaion} from '../../@types/AppNavigation';

const ImageDescriptionScreen = () => {
  const navigation = useAppNavitaion();

  const onAddToCartPressed = () => {
    navigation.navigate('Cart_Screen');
  };

  const onBackArrowPressed = () => {
    navigation.goBack();
  };
  const onCartImagePressed = () => {
    navigation.navigate('Cart_Screen');
  };
  return (
    <ImageDescription
      onCartImagePressed={onCartImagePressed}
      onAddToCartPressed={onAddToCartPressed}
      onBackArrowPressed={onBackArrowPressed}
    />
  );
};

export default ImageDescriptionScreen;
