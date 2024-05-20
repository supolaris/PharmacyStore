import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import SearchIcon from 'react-native-vector-icons/AntDesign';

const PrimaryTextInput = props => {
  return (
    <View style={styles.container}>
      <SearchIcon
        style={styles.icon}
        name="search1"
        size={20}
        color={PharmacyAppColors.grayBlue}
      />
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        placeholderTextColor={PharmacyAppColors.grayBlue}
      />
    </View>
  );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PharmacyAppColors.gray,
    padding: 0,
    borderRadius: 50,
  },
  icon: {
    paddingLeft: 10,
  },
  textInput: {
    paddingLeft: 10,
    fontFamily: 'Satoshi-Regular',
  },
});
