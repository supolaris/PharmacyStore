import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

//import HeaderTitleText from '../../ui/HeaderTitleText';

import ArrowIcon from 'react-native-vector-icons/AntDesign';

const PrimaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <ArrowIcon
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
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: PharmacyAppColors.headerColor,
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
    color: PharmacyAppColors.primaryTextColor,
  },
});
