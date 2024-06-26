import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import TertiaryHeader from '../components/headers/TertiaryHeader';
import SecondaryHeading from '../components/common/SecondaryHeading';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';

import {useAppNavitaion} from '../@types/AppNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {useFocusEffect} from '@react-navigation/native';

import {MedicineProducts} from '../assests/data/medicineProducts';

const ImageDescription = props => {
  const [screenRender, setScreenRender] = useState(1);
  const navigation = useAppNavitaion();

  const [medicineNumberOfProducts, setMedicineNumberOfProducts] = useState();
  const [medicineId, setMedicineId] = useState();
  const [medicineImage, setImage] = useState();
  const [medicineName, setMedicineName] = useState();
  const [medicinePrice, setMedicinePrice] = useState();
  const [medicineDescription, setMedicineDescription] = useState();

  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);

  const [medicineArray, setMedicineArray] = useState([]);
  const [valCheck, setValCheck] = useState();

  const [selectedCartId, setSelectedCartId] = useState();

  useFocusEffect(
    useCallback(() => {
      // AsyncStorage.removeItem('combinedMedicine');
      getMedicineData();
    }, [screenRender]),
  );

  let storedMedicineNumberOfProducts;
  let storedMedicineId;
  let storedMedicineImage;
  let storedMedicineName;
  let storedMedicinePrice;
  let storedMedicineDescription;
  const getMedicineData = async () => {
    storedMedicineNumberOfProducts = await AsyncStorage.getItem(
      'MedicineNumberOfProductsInCart',
    );
    storedMedicineId = await AsyncStorage.getItem('MedicineId');
    storedMedicineImage = await AsyncStorage.getItem('MedicineImage');
    storedMedicineName = await AsyncStorage.getItem('MedicineName');
    storedMedicinePrice = await AsyncStorage.getItem('MedicinePrice');
    storedMedicineDescription = await AsyncStorage.getItem(
      'MedicineDescription',
    );
    setMedicineNumberOfProducts(storedMedicineNumberOfProducts);
    setMedicineId(storedMedicineId);
    setImage(storedMedicineImage);
    setMedicineName(storedMedicineName);
    setMedicinePrice(storedMedicinePrice);
    setMedicineDescription(storedMedicineDescription);
  };

  let productDetails = {
    pNoOfProducts: '',
    pId: '',
    pImage: '',
    pName: '',
    pPrice: '',
    pDescription: '',
  };

  const onAddToCartPressed = async () => {
    if (
      medicineId &&
      medicineImage &&
      medicineName &&
      medicinePrice &&
      medicineDescription
    ) {
      const productDetails = {
        pNoOfProducts: medicineNumberOfProducts,
        pId: medicineId,
        pImage: medicineImage,
        pName: medicineName,
        pPrice: medicinePrice,
        pDescription: medicineDescription,
      };

      try {
        const previousMedicineData = await AsyncStorage.getItem(
          'combinedMedicine',
        );

        let updatedCart = [];

        if (previousMedicineData !== '' && previousMedicineData !== null) {
          const parsed = JSON.parse(previousMedicineData);

          const existingProductIndex = parsed.findIndex(
            item => item.pId === medicineId,
          );

          if (existingProductIndex !== -1) {
            parsed[existingProductIndex].pNoOfProducts = JSON.stringify(
              JSON.parse(parsed[existingProductIndex].pNoOfProducts) +
                JSON.parse(medicineNumberOfProducts),
            );
            updatedCart = parsed;
          } else {
            updatedCart = [...parsed, productDetails];
          }
        } else {
          updatedCart = [productDetails];
        }

        await AsyncStorage.setItem(
          'combinedMedicine',
          JSON.stringify(updatedCart),
        );
        navigation.navigate('Cart_Screen');
      } catch (error) {
        console.log('Error ' + error);
      }
    }
  };

  const flattenedData = MedicineProducts.flatMap(item => item.data);
  const renderMedicine = ({item}) => {
    const medicineSelectionPressed = async () => {
      try {
        await AsyncStorage.setItem(
          'MedicineId',
          JSON.stringify(item.productId),
        );
        await AsyncStorage.setItem(
          'MedicineNumberOfProductsInCart',
          JSON.stringify(item.totalNumberofProductsInCart),
        );
        await AsyncStorage.setItem('MedicineImage', JSON.stringify(item.image));
        await AsyncStorage.setItem('MedicineName', item.name);
        await AsyncStorage.setItem('MedicinePrice', item.price);
        await AsyncStorage.setItem('MedicineDescription', item.description);
        console.log('Data stored successfully');
        setScreenRender(screenRender + 1);
      } catch (error) {
        console.error('Error storing image:', error);
      }
    };

    const onMinusPressed = id => {
      console.log('minus');
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
      console.log('Plus');
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
        <Pressable onPress={() => setSelectedCartId(item.productId)}>
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
    <ScrollView style={styles.container}>
      <TertiaryHeader
        title="Pharmacy Store"
        onCartImagePressed={props.onCartImagePressed}
        onBackArrowPressed={props.onBackArrowPressed}
      />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={styles.medicineImageView}>
            <Image style={styles.medicineImage} source={medicineImage} />
          </View>
          <View style={styles.medicineDescriptonView}>
            <View style={styles.titlePriceAddToCartView}>
              <View style={styles.titlePriceView}>
                <Text style={styles.medicineTitleText}>{medicineName}</Text>
                <Text style={styles.medicinePriceText}>
                  RS {medicinePrice}/-
                </Text>
              </View>
              <TouchableOpacity
                style={styles.cartTouchable}
                onPress={onAddToCartPressed}>
                <Image
                  style={styles.cartImage}
                  source={require('../assests/images/cartVector.png')}
                />
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.descriptionText}>{medicineDescription}</Text>
          </View>

          <View style={{marginTop: 10}}>
            <View style={{paddingLeft: 5, paddingBottom: 10}}>
              <SecondaryHeading title="More Like" />
            </View>

            <FlatList
              numColumns={2}
              data={flattenedData}
              renderItem={renderMedicine}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ImageDescription;

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
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  medicineImageView: {
    alignItems: 'center',
  },
  medicineImage: {
    marginTop: 10,
    width: '100%',
    height: 260,
    borderRadius: 26,
  },
  medicineDescriptonView: {
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomWidth: 0.5,
    borderColor: '#9BA6A7',
  },
  titlePriceAddToCartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titlePriceView: {},
  medicineTitleText: {
    fontFamily: 'Satoshi-Bold',
    fontSize: 15,
    fontWeight: 'bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  medicinePriceText: {
    fontFamily: 'Satoshi-Medium',
    fontSize: 13,
    fontWeight: '500',
    color: '#667B99',
    paddingTop: 5,
  },
  cartTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9BA6A7',
    borderRadius: 36.56,
    paddingHorizontal: 15,
  },
  cartImage: {
    height: 18,
    width: 18,
    marginRight: 12,
  },
  addToCartText: {
    fontSize: 13,
    fontFamily: 'Satoshi-Regular',
    color: PharmacyAppColors.primaryTextColor,
  },
  descriptionText: {
    paddingTop: 13,
    color: '#454545',
    fontSize: 13,
    fontFamily: 'Satoshi-Regular',
  },
  /// Flatlist
  flatListView: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  flatListMedicineImage: {
    height: 190,
    width: 200,
    borderRadius: 8,
  },
  flatlistCartPressable: {
    position: 'absolute',
    top: 5,
    left: '78%',
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
    paddingTop: 5,
  },
  flatListMedicinePriceText: {
    color: '#667B99',
    fontSize: 15,
    fontWeight: '500',
  },
});
