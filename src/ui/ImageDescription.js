import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import TertiaryHeader from '../components/headers/TertiaryHeader';
import SecondaryHeading from '../components/common/SecondaryHeading';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';

const medicinesData = [
  {
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
  {
    image: require('../assests/images/medicine6.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
  {
    image: require('../assests/images/medicine2.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '2100',
  },
  {
    image: require('../assests/images/medicine3.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '2100',
  },
  {
    image: require('../assests/images/medicine4.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
  },
  {
    image: require('../assests/images/medicine5.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '',
  },
];

const ImageDescription = () => {
  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);
  const onFlatlistCartImagePressed = () => {
    setFlatlistCartImageOption(!flatlistCartImageOption);
  };

  const renderMedicine = ({item}) => {
    return (
      <View style={styles.flatListView}>
        <Image style={styles.flatListMedicineImage} source={item.image} />
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
            ]}
            onPress={onFlatlistCartImagePressed}>
            <Image
              style={styles.flatlistCartImage}
              source={require('../assests/images/cartVector.png')}
            />

            <MinusIcon
              onPress={() => {
                cartProductNumberCount = cartProductNumberCount + 1;
              }}
              style={{paddingHorizontal: 10}}
              name="minus"
              size={15}
              color="#667B99"
            />

            <Text style={{color: '#667B99', fontSize: 13}}>
              {cartProductNumberCount}
            </Text>

            <PlusIcon
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
    <View style={styles.container}>
      <TertiaryHeader title="Pharmacy Store" />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <View style={styles.medicineImageView}>
            <Image
              style={styles.medicineImage}
              source={require('../assests/images/medicine1.png')}
            />
          </View>
          <View style={styles.medicineDescriptonView}>
            <View style={styles.titlePriceAddToCartView}>
              <View style={styles.titlePriceView}>
                <Text style={styles.medicineTitleText}>
                  O-ZEETINE Capsules 6/25MG
                </Text>
                <Text style={styles.medicinePriceText}>RS 1900/-</Text>
              </View>
              <TouchableOpacity style={styles.cartTouchable}>
                <Image
                  style={styles.cartImage}
                  source={require('../assests/images/cartVector.png')}
                />
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.descriptionText}>
              A product that provides a guaranteed level of life takaful
              protection against death, of the Participant.
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <View style={{paddingLeft: 5, paddingBottom: 10}}>
              <SecondaryHeading title="More Like" />
            </View>

            <FlatList
              numColumns={2}
              data={medicinesData}
              renderItem={renderMedicine}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageDescription;

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
    fontSize: 15,
    fontWeight: 'bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  medicinePriceText: {
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
    color: PharmacyAppColors.primaryTextColor,
  },
  descriptionText: {
    paddingTop: 13,
    color: '#454545',
    fontSize: 13,
  },
  /// Flatlist
  flatListView: {
    //flex: 1,
    //borderRadius: 20,
    //marginTop: 10,
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
