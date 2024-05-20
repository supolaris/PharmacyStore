import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

const ItemAmountCard = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assests/images/shopingCartVector.png')}
      />
      <View style={styles.titleValueView}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </View>
  );
};

export default ItemAmountCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    paddingVertical: 14,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5.32,
    borderColor: '#9BA6A7',
    width: '46%',
    marginHorizontal: 15,
  },
  image: {
    height: 15,
    width: 15,
    marginBottom: 15,
  },
  titleValueView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Satoshi-Regular',
    color: PharmacyAppColors.primaryTextColor,
  },
  value: {
    fontSize: 14,
    fontFamily: 'Satoshi-Regular',
    color: PharmacyAppColors.primaryTextColor,
  },
});
