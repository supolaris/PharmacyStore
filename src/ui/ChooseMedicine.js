import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import SecondaryHeader from '../components/headers/SecondaryHeader';
import AppCover from '../components/common/AppCover';
import SecondaryHeading from '../components/common/SecondaryHeading';
import PrimaryTextInput from '../components/common/PrimaryTextInput';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';

import {useAppNavitaion} from '../@types/AppNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MedicineProducts} from '../assests/data/medicineProducts';
import PrimaryButton from '../components/common/PrimaryButton';

const ChooseMedicine = props => {
  const navigation = useAppNavitaion();
  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);

  const [valCheck, setValCheck] = useState();
  const [footerShow, setFooterShow] = useState(false);

  const [selectedCartId, setSelectedCartId] = useState();

  const onFlatlistCartImagePressed = () => {
    setFlatlistCartImageOption(!flatlistCartImageOption);
  };
  const flattenedData = MedicineProducts.flatMap(item => item.data);

  const renderMedicine = ({item}) => {
    const medicineSelectionPressed = async () => {
      try {
        await AsyncStorage.setItem(
          'MedicineNumberOfProductsInCart',
          JSON.stringify(item.totalNumberofProductsInCart),
        );
        await AsyncStorage.setItem(
          'MedicineId',
          JSON.stringify(item.productId),
        );
        await AsyncStorage.setItem('MedicineImage', JSON.stringify(item.image));
        await AsyncStorage.setItem('MedicineName', item.name);
        await AsyncStorage.setItem('MedicinePrice', item.price);
        await AsyncStorage.setItem('MedicineDescription', item.description);
        console.log('Data stored successfully');
        navigation.navigate('ImageDescription_Screen');
      } catch (error) {
        console.error('Error storing image:', error);
      }
    };

    const onMinusPressed = id => {
      MedicineProducts.map(item => {
        if (item.data[0].productId == id) {
          let currentVal = item.data[0].totalNumberofProductsInCart;
          if (currentVal > 0) {
            let newVal = currentVal - 1;
            item.data[0].totalNumberofProductsInCart = newVal;
            setValCheck(newVal);
          }
        }
      });
    };

    const onPlusPressed = id => {
      MedicineProducts.map(item => {
        if (item.data[0].productId == id) {
          let newVal = (item.data[0].totalNumberofProductsInCart += 1);
          setValCheck(newVal);
        }
      });
    };

    return (
      <View style={styles.flatListView}>
        <TouchableOpacity onPress={medicineSelectionPressed}>
          <Image style={styles.flatListMedicineImage} source={item.image} />
        </TouchableOpacity>

        <Pressable
          onPress={() => {
            setSelectedCartId(item.productId);
            setFooterShow(true);
          }}>
          {selectedCartId === item.productId ? (
            <View
              style={{
                position: 'absolute',
                bottom: 148,
                right: 10,
                backgroundColor: PharmacyAppColors.white,
                padding: 8,
                borderRadius: 100,
                borderWidth: 0.5,
                borderColor: '#9BA6A7',
                flexDirection: 'row',
              }}>
              <Image
                style={styles.flatlistCartImage}
                source={require('../assests/images/cartVector.png')}
              />

              <MinusIcon
                onPress={() => onMinusPressed(item.productId)}
                style={{paddingHorizontal: 10}}
                name="minus"
                size={15}
                color="#667B99"
              />

              <Text style={{color: '#667B99', fontSize: 13}}>
                {console.log(
                  'item.totalNumberofProductsInCart: ',
                  item.totalNumberofProductsInCart,
                )}
                {item.totalNumberofProductsInCart}
              </Text>

              <PlusIcon
                onPress={() => onPlusPressed(item.productId)}
                style={{paddingHorizontal: 10}}
                name="plus"
                size={18}
                color="#667B99"
              />
            </View>
          ) : (
            <View
              style={{
                position: 'absolute',
                bottom: 148,
                right: 10,
                backgroundColor: PharmacyAppColors.white,
                padding: 8,
                borderRadius: 100,
                borderWidth: 0.5,
                borderColor: '#9BA6A7',
              }}>
              <Image
                style={styles.flatlistCartImage}
                source={require('../assests/images/cartVector.png')}
              />
            </View>
          )}
        </Pressable>

        <Text style={styles.flatListMedicineNameText}>{item.name}</Text>
        <Text style={styles.flatListMedicinePriceText}>Rs {item.price}/-</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />

      <View>
        <SecondaryHeader
          title="Pharmacy Store"
          onPress={props.onBackArrowPressed}
          onCartIconPressed={props.onCartIconPressed}
        />
        <AppCover />
      </View>

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <SecondaryHeading title="Choose Medicine" />

          <View style={{paddingVertical: 14}}>
            <PrimaryTextInput placeholder="Search Medicine" />
          </View>

          <FlatList
            numColumns={2}
            data={flattenedData}
            renderItem={renderMedicine}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        {footerShow === true ? (
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 30,
              elevation: 80,
              shadowColor: 'black',
            }}>
            <PrimaryButton
              buttonText="Open Cart"
              onPress={props.onFooterCartPressed}
            />
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default ChooseMedicine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PharmacyAppColors.headerColor,
  },
  belowCoverView: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: PharmacyAppColors.white,
  },
  innerView: {
    // backgroundColor: 'red',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  flatListView: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  flatListMedicineImage: {
    height: 190,
    width: '100%',
    borderRadius: 8,
  },
  flatlistCartPressable: {
    position: 'absolute',
    top: 5,
    right: 10,
    backgroundColor: PharmacyAppColors.white,
    padding: 8,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#9BA6A7',
  },
  flatlistCartImage: {
    height: 20,
    width: 20,
  },
  flatListMedicineNameText: {
    color: '#061E40',
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Satoshi-Bold',
    paddingTop: 5,
  },
  flatListMedicinePriceText: {
    color: '#667B99',
    fontSize: 15,
    fontFamily: 'Satoshi-Medium',
    fontWeight: '500',
  },
  flatListContent: {
    //paddingBottom: 20,
  },
});
