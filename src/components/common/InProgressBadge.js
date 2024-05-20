import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InProgressBadge = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.badgeText}</Text>
    </View>
  );
};

export default InProgressBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBDC',
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderRadius: 48,
  },
  text: {
    color: '#C17502',
    fontFamily: 'Satoshi-Regular',
  },
});
