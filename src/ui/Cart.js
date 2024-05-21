import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, FlatList} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import TertiaryHeader from '../components/headers/TertiaryHeader';
import PrimaryButton from '../components/common/PrimaryButton';

import MinusIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const cartData = [
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
];

const Cart = props => {
  const [allCartMedicines, setAllCartMedicines] = useState([]);
  const [productCounterValue, setProductCounterValue] = useState(1);

  useFocusEffect(
    useCallback(() => {
      //AsyncStorage.removeItem('CartMedicine');
      getCartMedicines();
    }, []),
  );

  const getCartMedicines = async () => {
    const myData = await AsyncStorage.getItem('combinedMedicine');
    if (myData) {
      let parsedData = JSON.parse(myData);
      setAllCartMedicines(parsedData);
    }
  };

  const onMinusPressed = () => {
    setProductCounterValue(prevVal => {
      if (prevVal > 1) {
        return prevVal - 1;
      } else {
        return prevVal;
      }
    });
  };

  const onPlusPressed = () => {
    setProductCounterValue(prevVal => prevVal + 1);
  };

  // const onCheckoutPressed = () => {
  //   console.log('Checkout Pressed');
  // };

  const renderCartItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={styles.flatlistImageView}>
          <Image style={styles.flatlistImage} source={item.pImage} />
        </View>
        <View style={styles.flatlistProductNameDetailsView}>
          {/* {console.log('Items: ' + item)} */}
          <Text style={styles.flatlistProductNameText}>{item.pName}</Text>

          <View style={styles.detailsView}>
            <View style={styles.cartImageCounterView}>
              <Image
                style={styles.cartImage}
                source={require('../assests/images/cartVector.png')}
              />
              <View style={styles.counterView}>
                <MinusIcon
                  onPress={onMinusPressed}
                  name="minus"
                  size={20}
                  color="#667B99"
                />

                <Text style={styles.productCounterValueText}>
                  {productCounterValue}
                </Text>

                <PlusIcon
                  onPress={onPlusPressed}
                  name="plus"
                  size={20}
                  color="#667B99"
                />
              </View>
            </View>

            <View style={styles.productCounterValuePriceView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.productPriceText}>
                  {productCounterValue}x
                </Text>

                <Text style={styles.productPriceText}>Rs {item.pPrice}/-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />
      <TertiaryHeader
        onBackArrowPressed={props.onBackArrowPressed}
        title="Cart"
      />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={{flex: 3}}>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 40,
                borderBottomWidth: 0.5,
                borderColor: '#9BA6A7',
              }}>
              <FlatList
                data={allCartMedicines}
                renderItem={renderCartItem}
                keyExtractor={(item, index) => index.toString()}
              />
              {/* <Text>sdfdsaf{allCartMedicines.Name}</Text> */}
            </View>

            <View style={styles.displayChargesView}>
              <View style={styles.chargesPriceTextView}>
                <Text style={styles.chargesLabelText}>Delivery Charges</Text>
                <Text style={styles.chargesText}>
                  Rs.<Text style={styles.priceText}>200</Text>
                </Text>
              </View>
              <View style={styles.chargesPriceTextView}>
                <Text style={styles.chargesLabelText}>GST</Text>
                <Text style={styles.chargesText}>
                  Rs.
                  <Text style={styles.priceText}>40</Text>
                </Text>
              </View>
            </View>

            <View style={styles.totalPriceTextView}>
              <Text style={styles.chargesLabelText}>Total</Text>
              <Text style={styles.chargesText}>
                Rs.
                <Text style={styles.priceText}>4040</Text>
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <PrimaryButton
              buttonText="Check Out"
              onPress={props.onCheckoutPressed}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PharmacyAppColors.headerColor,
  },
  belowCoverView: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: PharmacyAppColors.white,
  },
  innerView: {
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 30,
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
    fontFamily: 'Satoshi-Bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  detailsView: {
    flexDirection: 'row',
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
    paddingLeft: 20,
    justifyContent: 'center',
  },
  productCounterValuePriceText: {
    textAlign: 'center',
    color: '#9BA6A7',
    fontSize: 15,
  },
  productPriceText: {
    fontFamily: 'Satoshi-Regular',
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
    fontFamily: 'Satoshi-Regular',
    color: '#667B99',
  },
  chargesText: {
    fontFamily: 'Satoshi-Regular',
  },
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
  },
});
