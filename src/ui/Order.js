import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import PrimaryHeader from '../components/headers/PrimaryHeader';
import PrimaryButton from '../components/common/PrimaryButton';
import InProgressBadge from '../components/common/InProgressBadge';

const Order = () => {
  const [productCounterValue, setProductCounterValue] = useState(1);

  const onOrderAgainPressed = () => {
    console.log('Order Again Pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />
      <PrimaryHeader title="Orders" />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={{flex: 3}}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    fontSize: 19.26,
                    color: PharmacyAppColors.primaryTextColor,
                  }}>
                  Order ID
                </Text>
                <InProgressBadge badgeText="In Progress" />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  paddingTop: 6,
                  paddingBottom: 8,
                  color: PharmacyAppColors.primaryTextColor,
                }}>
                124-9267-192
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton
              buttonText="Order Again"
              onPress={onOrderAgainPressed}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PharmacyAppColors.headerColor,
  },
  belowCoverView: {
    //height: 633,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: PharmacyAppColors.white,
  },
  innerView: {
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 30,
    // justifyContent: 'space-around',
    //justifyContent: 'space-evenly',
  },
  flatlistImageView: {
    flexDirection: 'row',
  },
  flatlistImage: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  flatlistProductNameDetailsView: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  flatlistProductNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 15,
    color: PharmacyAppColors.primaryTextColor,
  },
  detailsView: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  cartImageCounterView: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 50,
    borderColor: PharmacyAppColors.gray,
  },
  cartImage: {
    height: 18,
    width: 18,
    marginRight: 14,
  },

  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCounterValueText: {
    fontSize: 16,
    color: '#667B99',
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  productCounterValuePriceView: {
    justifyContent: 'center',
  },
  productCounterValuePriceText: {
    textAlign: 'center',
    color: '#9BA6A7',
    fontSize: 15,
  },
  productPriceText: {
    paddingRight: 5,
    color: '#061E40',
  },
  //below flatlist
  displayChargesView: {
    paddingTop: 10,
    paddingBottom: 70,
  },
  chargesPriceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingBottom: 10,
  },
  chargesLabelText: {
    fontSize: 15,
    color: '#667B99',
  },
  chargesText: {},
  priceText: {
    color: PharmacyAppColors.primaryTextColor,
  },
  totalPriceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: PharmacyAppColors.gray,
    //marginHorizontal: 5,
    //paddingBottom: 10,
  },
});
