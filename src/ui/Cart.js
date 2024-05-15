import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import TertiaryHeader from '../components/headers/TertiaryHeader';

import MinusIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/Entypo';

const cartData = [
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
];

const Cart = () => {
  const [productCounterValue, setProductCounterValue] = useState(1);

  const onMinusPressed = () => {
    console.log('Minus Pressed');
  };

  const onPlusPressed = () => {
    console.log('Plus Pressed');
  };

  const renderCartItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.flatlistImageView}>
          <Image style={styles.flatlistImage} source={item.image} />
        </View>
        <View style={styles.flatlistProductNameDetailsView}>
          <Text style={styles.flatlistProductNameText}>{item.name}</Text>

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
                  size={25}
                  color="red"
                />

                <Text style={styles.productCounterValueText}>
                  {productCounterValue}
                </Text>

                <PlusIcon
                  onPress={onPlusPressed}
                  name="plus"
                  size={25}
                  color="red"
                />
              </View>
            </View>

            <View style={styles.productCounterValuePriceView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.productPriceText}>
                  {productCounterValue}x
                </Text>

                <Text style={styles.productPriceText}>Rs {item.price}/-</Text>
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
      <TertiaryHeader title="Cart" />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 40,
              borderBottomWidth: 0.5,
              borderColor: '#9BA6A7',
            }}>
            <FlatList
              data={cartData}
              renderItem={renderCartItem}
              keyExtractor={(item, index) => index.toString()}
            />
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
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  productCounterValuePriceView: {
    //width: '50%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  productCounterValuePriceText: {
    //width: '50%',
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
