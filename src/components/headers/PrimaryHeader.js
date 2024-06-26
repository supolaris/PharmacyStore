import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import ArrowIcon from 'react-native-vector-icons/AntDesign';

const PrimaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowIcon
          onPress={props.onArrowBackPressed}
          style={styles.icon}
          name="arrowleft"
          size={25}
          color={PharmacyAppColors.primaryTextColor}
        />
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 25,
    backgroundColor: PharmacyAppColors.headerColor,
    height: 85,
  },
  icon: {
    width: '10%',
    justifyContent: 'center',
    marginLeft: 20,
  },
  titleText: {
    width: '70%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Satoshi-Bold',
    color: PharmacyAppColors.primaryTextColor,
  },
});
