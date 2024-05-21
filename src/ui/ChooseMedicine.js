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
  ScrollView,
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

const medicinesData = [
  {
    id: 1,
    image: require('../assests/images/medicine1.png'),
    name: 'O-ZEETINE Capsules 6/25MG',
    price: '1900',
    description:
      'A product that provides a guaranteed level of life takaful protection against death, of the Participant.',
  },
  {
    id: 2,
    image: require('../assests/images/medicine6.png'),
    name: 'LIPITOR Tablets 10MG',
    price: '1900',
    description:
      'LIPITOR Tablets 10MG - A medication that helps manage cholesterol levels in patients.',
  },
  {
    id: 3,
    image: require('../assests/images/medicine2.png'),
    name: 'CRESTOR Tablets 5MG',
    price: '2100',
    description:
      'CRESTOR Tablets 5MG - A treatment used to lower bad cholesterol and fats in the blood.',
  },
  {
    id: 4,
    image: require('../assests/images/medicine3.png'),
    name: 'PRILOSEC Capsules 20MG',
    price: '2100',
    description:
      'PRILOSEC Capsules 20MG - A drug that treats frequent heartburn and acid reflux.',
  },
  {
    id: 5,
    image: require('../assests/images/medicine4.png'),
    name: 'XANAX Tablets 0.25MG',
    price: '1900',
    description:
      'XANAX Tablets 0.25MG - A prescription medicine used to treat anxiety disorders.',
  },
  {
    id: 6,
    image: require('../assests/images/medicine5.png'),
    name: 'PROZAC Capsules 20MG',
    price: '2100',
    description:
      'PROZAC Capsules 20MG - An antidepressant used to treat major depressive disorder.',
  },
];

const ChooseMedicine = props => {
  const navigation = useAppNavitaion();
  const [flatlistCartImageOption, setFlatlistCartImageOption] = useState(false);
  const [cartProductNumberCount, setCartProductNumberCount] = useState(1);

  const onFlatlistCartImagePressed = () => {
    setFlatlistCartImageOption(!flatlistCartImageOption);
  };

  const renderMedicine = ({item}) => {
    const medicineSelectionPressed = async () => {
      try {
        await AsyncStorage.setItem('MedicineId', JSON.stringify(item.id));
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
    </ScrollView>
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
    //paddingBottom: 20,
  },
});
