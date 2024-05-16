import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

const SecondaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.touchableText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    borderWidth: 1,
    borderColor: '#9BA6A7',
    borderRadius: 36.56,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  touchableText: {
    fontSize: 13,
    color: PharmacyAppColors.primaryTextColor,
  },
});
