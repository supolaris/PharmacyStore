import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import SecondaryHeader from '../components/headers/SecondaryHeader';
import AppCover from '../components/common/AppCover';
import SecondaryHeading from '../components/common/SecondaryHeading';
import PrimaryTextInput from '../components/common/PrimaryTextInput';

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
    price: '2100',
  },
];

const ChooseMedicine = props => {
  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);
  const [cartProductNumberCount, setCartProductNumberCount] = useState(1);

  const onFlatlistCartImagePressed = () => {
    setFlatlistCartImageOption(!flatlistCartImageOption);
  };

  const renderMedicine = ({item}) => {
    return (
      <View style={styles.flatListView}>
        <TouchableOpacity onPress={props.medicineSelectionPressed}>
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
            data={medicinesData}
            renderItem={renderMedicine}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
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
    paddingBottom: 100,
  },
});
