import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderTitleText = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

export default HeaderTitleText;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    color: '#061E40',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
