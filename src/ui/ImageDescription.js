import React, {useCallback, useEffect, useState} from 'react';
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

const medicinesData = [
  {
    id: 1,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 1,
        image: require('../assests/images/medicine1.png'),
        name: 'O-ZEETINE Capsules 6/25MG',
        price: '1900',
        description:
          'A product that provides a guaranteed level of life takaful protection against death, of the Participant.',
      },
    ],
  },
  {
    id: 2,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 2,
        image: require('../assests/images/medicine6.png'),
        name: 'LIPITOR Tablets 10MG',
        price: '1900',
        description:
          'LIPITOR Tablets 10MG - A medication that helps manage cholesterol levels in patients.',
      },
    ],
  },
  {
    id: 3,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 3,
        image: require('../assests/images/medicine2.png'),
        name: 'CRESTOR Tablets 5MG',
        price: '2100',
        description:
          'CRESTOR Tablets 5MG - A treatment used to lower bad cholesterol and fats in the blood.',
      },
    ],
  },
  {
    id: 4,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 4,
        image: require('../assests/images/medicine3.png'),
        name: 'PRILOSEC Capsules 20MG',
        price: '2100',
        description:
          'PRILOSEC Capsules 20MG - A drug that treats frequent heartburn and acid reflux.',
      },
    ],
  },
  {
    id: 5,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 5,
        image: require('../assests/images/medicine4.png'),
        name: 'XANAX Tablets 0.25MG',
        price: '1900',
        description:
          'XANAX Tablets 0.25MG - A prescription medicine used to treat anxiety disorders.',
      },
    ],
  },
  {
    id: 6,
    totalNumberofProductsInCart: 0,
    totalAmountofProducts: 0,
    data: [
      {
        id: 6,
        image: require('../assests/images/medicine5.png'),
        name: 'PROZAC Capsules 20MG',
        price: '2100',
        description:
          'PROZAC Capsules 20MG - An antidepressant used to treat major depressive disorder.',
      },
    ],
  },
];

const ImageDescription = props => {
  const [screenRender, setScreenRender] = useState(1);
  const navigation = useAppNavitaion();

  const [medicineId, setMedicineId] = useState();
  const [medicineImage, setImage] = useState();
  const [medicineName, setMedicineName] = useState();
  const [medicinePrice, setMedicinePrice] = useState();
  const [medicineDescription, setMedicineDescription] = useState();

  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);
  const [cartProductNumberCount, setCartProductNumberCount] = useState(1);

  const [medicineArray, setMedicineArray] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // AsyncStorage.removeItem('combinedMedicine');
      getMedicineData();
    }, [screenRender]),
  );

  let storedMedicineId;
  let storedMedicineImage;
  let storedMedicineName;
  let storedMedicinePrice;
  let storedMedicineDescription;
  const getMedicineData = async () => {
    storedMedicineId = await AsyncStorage.getItem('MedicineId');
    storedMedicineImage = await AsyncStorage.getItem('MedicineImage');
    storedMedicineName = await AsyncStorage.getItem('MedicineName');
    storedMedicinePrice = await AsyncStorage.getItem('MedicinePrice');
    storedMedicineDescription = await AsyncStorage.getItem(
      'MedicineDescription',
    );
    setMedicineId(storedMedicineId);
    setImage(storedMedicineImage);
    setMedicineName(storedMedicineName);
    setMedicinePrice(storedMedicinePrice);
    setMedicineDescription(storedMedicineDescription);
  };

  let productDetails = {
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
      productDetails = {
        pId: medicineId,
        pImage: medicineImage,
        pName: medicineName,
        pPrice: medicinePrice,
        pDescription: medicineDescription,
      };
    }
    try {
      const previousMedicineData = await AsyncStorage.getItem(
        'combinedMedicine',
      );

      if (previousMedicineData !== '' && previousMedicineData !== null) {
        const parsed = JSON.parse(previousMedicineData);

        const combine = [...parsed, productDetails];
        //console.log('combine' + combine);

        await AsyncStorage.setItem('combinedMedicine', JSON.stringify(combine));
        const combinedAsync = await AsyncStorage.getItem('combinedMedicine');
        //console.log('CombinedAsyn', combinedAsync);
        navigation.navigate('Cart_Screen');
      } else {
        setMedicineArray([]);
        const combine = [...medicineArray, productDetails];
        await AsyncStorage.setItem('combinedMedicine', JSON.stringify(combine));
        navigation.navigate('Cart_Screen');
      }
      //navigation.navigate('Cart_Screen');
    } catch (error) {
      console.log('Error ' + error);
    }
  };

  const onFlatlistCartImagePressed = () => {
    setFlatlistCartImageOption(!flatlistCartImageOption);
  };

  const flattenedData = MedicineProducts.flatMap(item => item.data);
  const renderMedicine = ({item}) => {
    const medicineSelectionPressed = async () => {
      try {
        await AsyncStorage.setItem(
          'MedicineId',
          JSON.stringify(item.productId),
        );
        await AsyncStorage.setItem('MedicineImage', JSON.stringify(item.image));
        await AsyncStorage.setItem('MedicineName', item.name);
        await AsyncStorage.setItem('MedicinePrice', item.price);
        await AsyncStorage.setItem('MedicineDescription', item.description);
        console.log('Data stored successfully');
        setScreenRender(screenRender + 1);
        //navigation.navigate('ImageDescription_Screen');
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
        {!flatlistCartImageOption ? (
          <Pressable
            style={styles.flatlistCartPressable}
            onPress={onFlatlistCartImagePressed}>
            <Image
              style={styles.flatlistCartImage}
              source={require('../assests/images/cartVector.png')}
            />
          </Pressable>
        ) : (
          <Pressable
            style={[
              styles.flatlistCartPressable,
              {flexDirection: 'row', left: '40%', alignItems: 'center'},
            ]}>
            <Image
              style={styles.flatlistCartImage}
              source={require('../assests/images/cartVector.png')}
            />

            <MinusIcon
              onPress={() =>
                setCartProductNumberCount(cartProductNumberCount - 1)
              }
              style={{paddingHorizontal: 10}}
              name="minus"
              size={15}
              color="#667B99"
            />

            <Text style={{color: '#667B99', fontSize: 13}}>
              {cartProductNumberCount}
            </Text>

            <PlusIcon
              onPress={() =>
                setCartProductNumberCount(cartProductNumberCount + 1)
              }
              style={{paddingHorizontal: 10}}
              name="plus"
              size={18}
              color="#667B99"
            />
          </Pressable>
        )}

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
                {/* <Text>{medicineDetails.Name}</Text> */}
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
