import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import ArrowIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import {useFocusEffect} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TertiaryHeader = props => {
  const [productNumber, setProductNumber] = useState();

  useFocusEffect(
    useCallback(() => {
      getProductNumberInCart();
    }, []),
  );

  let productNumbers;
  const getProductNumberInCart = async () => {
    productNumbers = await AsyncStorage.getItem('TotalNumberOfProductsInCart');
    setProductNumber(productNumbers);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowIcon
          onPress={props.onBackArrowPressed}
          style={styles.icon}
          name="arrowleft"
          size={25}
          color={PharmacyAppColors.primaryTextColor}
        />
        <View style={{flex: 1, alignItems: 'center', paddingLeft: 20}}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.searchIconPressable}>
            <SearchIcon name="search1" size={15} />
          </Pressable>

          <Pressable
            style={styles.cartPressable}
            onPress={props.onCartImagePressed}>
            <Text
              style={{
                position: 'absolute',
                top: 0,
                left: 40,
                backgroundColor: 'red',
                borderRadius: 100,
                paddingHorizontal: 5,
                color: 'white',
                flex: 1,
              }}>
              {productNumber}
            </Text>

            <Image
              style={styles.cartImage}
              source={require('../../assests/images/cartVector.png')}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TertiaryHeader;

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
    width: '60%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  searchIconPressable: {
    marginHorizontal: 10,
    backgroundColor: PharmacyAppColors.white,
    paddingHorizontal: 18,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  cartPressable: {
    marginRight: 15,
    backgroundColor: PharmacyAppColors.white,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
  },
  cartImage: {
    height: 34,
    width: 34,
  },
});
