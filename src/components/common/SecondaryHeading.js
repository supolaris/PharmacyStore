import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

const SecondaryHeading = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default SecondaryHeading;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
  },
  text: {
    fontSize: 16.44,
    fontFamily: 'Satoshi-Regular',
    color: PharmacyAppColors.primaryTextColor,
  },
});
