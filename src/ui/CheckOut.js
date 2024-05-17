import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  Modal,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import LinearGradient from 'react-native-linear-gradient';

import TertiaryHeader from '../components/headers/TertiaryHeader';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';

import MinusIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/Entypo';

const cartData = [
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
];

const CheckOut = props => {
  const [productCounterValue, setProductCounterValue] = useState(1);

  const [showModal, setShowModal] = useState(false);

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

  const onCheckoutPressed = () => {
    setShowModal(!showModal);
  };

  const renderCartItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5}}>
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
      <TertiaryHeader
        title="Check Out"
        onBackArrowPressed={props.onBackArrowPressed}
      />

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}>
        <View
          style={{
            justifyContent: 'center',
            //backgroundColor: 'rgb(255,255,255, 0.9)',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            alignItems: 'center',
            height: '100%',
          }}>
          {/* <LinearGradient
            style={{height: '40%', width: '90%'}}
            colors={['#ffffff', '#000000']}> */}
          <View
            style={{
              height: '40%',
              width: '90%',
              backgroundColor: PharmacyAppColors.white,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{height: 60, width: 60}}
              source={require('../assests/images/modalVector.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: PharmacyAppColors.primaryTextColor,
                paddingTop: 22,
              }}>
              OrderPlaced
            </Text>
            <Text
              style={{
                width: '65%',
                textAlign: 'center',
                fontSize: 14,
                color: '#667B99',
                paddingTop: 12,
                paddingBottom: 24,
              }}>
              Your order has been placed. You can check your order in menu
            </Text>

            <View style={{width: '60%'}}>
              <PrimaryButton
                onPress={props.onModalButtonPressed}
                buttonText="Close"
              />
            </View>
          </View>
          {/* </LinearGradient> */}
        </View>
      </Modal>

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={{flex: 3}}>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 20,
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
              <Text style={styles.totalChargesLabelText}>Total</Text>
              <Text style={styles.chargesText}>
                Rs.
                <Text style={styles.priceText}>4040</Text>
              </Text>
            </View>

            {/* delivery address */}
            <View style={styles.displayChargesView}>
              <View style={styles.chargesPriceTextView}>
                <Text style={styles.chargesLabelText}>Delivery Address</Text>
                <Text style={styles.chargesText}>Islamabad</Text>
              </View>
              <View style={styles.chargesPriceTextView}>
                <Text style={[styles.chargesLabelText, {width: '70%'}]}>
                  Office #7 2nd Floor Plaza 2000, I-8 Markaz Islamabad
                </Text>
                <SecondaryButton touchableText="Change Address" />
              </View>
            </View>

            {/* Payment method */}
            {/* <View style={styles.displayChargesView}>
              <View style={styles.chargesPriceTextView}>
                <Text style={styles.chargesLabelText}>Delivery Address</Text>
                <Text style={styles.chargesText}>Islamabad</Text>
              </View>
              <View style={styles.chargesPriceTextView}>
                <Text style={[styles.chargesLabelText, {width: '70%'}]}>
                  Office #7 2nd Floor Plaza 2000, I-8 Markaz Islamabad
                </Text>
                <SecondaryButton touchableText="Change Address" />
              </View>
            </View> */}
          </View>

          {/* buttonView */}
          <View style={{flex: 1}}>
            <PrimaryButton buttonText="Confirm" onPress={onCheckoutPressed} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

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
    height: 90,
    borderRadius: 10,
  },
  flatlistProductNameDetailsView: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  flatlistProductNameText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
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
    borderWidth: 1,
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
    paddingBottom: 20,
  },
  chargesPriceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
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
  totalChargesLabelText: {
    fontSize: 15,
    color: PharmacyAppColors.primaryTextColor,
  },
  totalPriceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EBECEE',
  },
});
