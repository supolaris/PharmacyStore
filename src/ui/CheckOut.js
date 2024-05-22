import React, {useState, useCallback} from 'react';
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

import {useAppNavitaion} from '../@types/AppNavigation';

import TertiaryHeader from '../components/headers/TertiaryHeader';
import PrimaryButton from '../components/common/PrimaryButton';
import SecondaryButton from '../components/common/SecondaryButton';

import MinusIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/Entypo';

import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckOut = props => {
  const navigation = useAppNavitaion();
  const [productCounterValue, setProductCounterValue] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [allCartMedicines, setAllCartMedicines] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useFocusEffect(
    useCallback(() => {
      //AsyncStorage.removeItem('combinedMedicine');
      getCartMedicines();
    }, []),
  );
  let parsedData;
  const getCartMedicines = async () => {
    const myData = await AsyncStorage.getItem('combinedMedicine');
    if (myData) {
      parsedData = JSON.parse(myData);
      //console.log('Parsed Data:', parsedData);
      setAllCartMedicines(parsedData);

      //Getting Total Price of medicines in a cart
      const TotalPrice = await AsyncStorage.getItem('TotalMedicinePriceInCart');
      setTotalPrice(JSON.parse(TotalPrice) + 20 + 200);
      //console.log('Check total price: ' + TotalPrice);
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
  const onModalButtonPressed = () => {
    navigation.navigate('Order_Screen');
    setShowModal(!showModal);
  };

  //let orderNumber = 1249267192;
  const onCheckoutPressed = async () => {
    setShowModal(!showModal);

    let newProductsparsedData;
    const myData = await AsyncStorage.getItem('combinedMedicine');
    if (myData) {
      //console.log('New data' + myData);
      newProductsparsedData = JSON.parse(myData);
      //console.log('New Parsed data: ' + parsedData);
      //objectsInArray = [parsedData]

      let previousOrderDataList = await AsyncStorage.getItem('orderList');
      console.log(
        'Previous Order Data List: ' + JSON.parse(previousOrderDataList),
      );

      if (previousOrderDataList !== '' && previousOrderDataList !== null) {
        const ParsedPreviousOrderDataList = JSON.parse(previousOrderDataList);

        const combine = [...ParsedPreviousOrderDataList, newProductsparsedData];

        const output = combine.map(item => {
          if (Array.isArray(item)) {
            return item.reduce((acc, curr, index) => {
              acc[index] = curr;
              return acc;
            }, {});
          }
          return item;
        });

        console.log('OutPut: ' + JSON.stringify(output));
        console.log('Combine order List', combine);

        await AsyncStorage.setItem('completeOrderList', JSON.stringify(output));
      }

      await AsyncStorage.setItem(
        'orderList',
        JSON.stringify(newProductsparsedData),
      );
      let getOrderList = await AsyncStorage.getItem('orderList');
      //console.log('OrderListData: ' + getOrderList);
      AsyncStorage.removeItem('combinedMedicine');
    }
  };

  const renderCartItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <View style={styles.flatlistImageView}>
          <Image style={styles.flatlistImage} source={item.pImage} />
        </View>
        <View style={styles.flatlistProductNameDetailsView}>
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
        title="Check Out"
        onBackArrowPressed={props.onBackArrowPressed}
        onCartImagePressed={props.onCartImagePressed}
      />

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            alignItems: 'center',
            height: '100%',
          }}>
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
                fontFamily: 'Satoshi-Medium',
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
                fontFamily: 'Satoshi-Regular',
              }}>
              Your order has been placed. You can check your order in menu
            </Text>

            <View style={{width: '60%'}}>
              <PrimaryButton
                onPress={onModalButtonPressed}
                buttonText="Close"
              />
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={{flex: 3}}>
            <View style={styles.flatListView}>
              <FlatList
                data={allCartMedicines}
                renderItem={renderCartItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            <View style={styles.belowFlatlistView}>
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
                  <Text style={styles.priceText}>{totalPrice}</Text>
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
  flatListView: {
    flex: 1.8,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: '#9BA6A7',
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
    fontFamily: 'Satoshi-Bold',
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
    paddingLeft: 20,
    justifyContent: 'center',
  },
  productCounterValuePriceText: {
    textAlign: 'center',
    color: '#9BA6A7',
    fontSize: 15,
  },
  productPriceText: {
    fontFamily: 'Satoshi-Medium',
    paddingRight: 5,
    color: '#061E40',
  },
  //below flatlist
  belowFlatlistView: {
    flex: 2,
  },
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
    fontFamily: 'Satoshi-Regular',
  },
  chargesText: {
    fontFamily: 'Satoshi-Medium',
  },
  priceText: {
    color: PharmacyAppColors.primaryTextColor,
    fontFamily: 'Satoshi-Medium',
  },
  totalChargesLabelText: {
    fontSize: 15,
    color: PharmacyAppColors.primaryTextColor,
    fontFamily: 'Satoshi-Regular',
  },
  totalPriceTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EBECEE',
  },
});
