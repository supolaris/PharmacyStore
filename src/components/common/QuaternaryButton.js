import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

const QuaternaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
        <Text style={styles.touchableText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuaternaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12.91,
    paddingVertical: 22,
  },
  touchableText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: PharmacyAppColors.white,
  },
});
