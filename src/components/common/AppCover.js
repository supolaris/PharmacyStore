import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

const AppCover = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assests/images/coverImage.png')}
      />
    </View>
  );
};

export default AppCover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PharmacyAppColors.headerColor,
    paddingTop: 5,
    paddingLeft: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    height: 230,
    width: 230,
  },
});
