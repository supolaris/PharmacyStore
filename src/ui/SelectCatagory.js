import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import {useAppNavitaion} from '../@types/AppNavigation';

import SecondaryHeader from '../components/headers/SecondaryHeader';
import AppCover from '../components/common/AppCover';
import PrimaryTextInput from '../components/common/PrimaryTextInput';
import SecondaryHeading from '../components/common/SecondaryHeading';

import ArrowIcon from 'react-native-vector-icons/SimpleLineIcons';
import ArrowDownIcon from 'react-native-vector-icons/SimpleLineIcons';

import {useFocusEffect} from '@react-navigation/native';
import {useContext} from 'react';
import {MyContext} from '../context/useContext';

const catagoryCardData = [
  {
    title: 'Digestive System',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage1.png'),
  },
  {
    title: 'Cardio Vascular',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage2.png'),
  },
  {
    title: 'Nervous System',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage3.png'),
  },
  {
    title: 'Neurological',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage4.png'),
  },
  {
    title: 'Stomach Ache',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage5.png'),
  },
  {
    title: 'Pelvic',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage6.png'),
  },
];

const SelectCatagory = props => {
  const navigation = useAppNavitaion();

  const useCtx = useContext(MyContext);

  const [getContextCityName, setGetContextCityname] = useState();

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const getData = async () => {
    const myCityName = await useCtx.cityName;
    setGetContextCityname(myCityName);
    console.log('City name: ' + myCityName);
  };

  const renderCatagoryCardData = ({item}) => {
    return (
      <View style={styles.flatListView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseMedicine_Screen')}>
          <ImageBackground
            style={styles.imageBackground}
            source={item.image}
            resizeMode="cover">
            <View style={styles.titleArrowView}>
              <Text style={styles.catagoryText}>{item.title}</Text>
              <ArrowIcon
                style={styles.arrowIcon}
                name="arrow-right"
                size={15}
                color="#9BA6A7"
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />
      <SecondaryHeader
        title="Pharmacy Store"
        onPress={props.onBackArrowPressed}
        onCartIconPressed={props.onCartIconPressed}
      />
      <AppCover />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <PrimaryTextInput placeholder="Search Catagory" />

          <View style={styles.cityOrderView}>
            <View style={styles.cityView}>
              <Text style={styles.cityHeadingText}>City</Text>
              <View style={styles.cityNameDropdownView}>
                <Text style={styles.cityNameText}>{getContextCityName}</Text>
                <TouchableOpacity
                  style={styles.dropdownHeadingView}
                  onPress={() => navigation.navigate('SelectCity_Screen')}>
                  <Text style={styles.dropdownHeadingText}>Change</Text>
                  <ArrowDownIcon
                    style={{paddingLeft: 10, paddingTop: 5}}
                    name="arrow-down"
                    size={10}
                    color={PharmacyAppColors.primaryTextColor}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.orderView}
              onPress={props.onMyOrdersPressed}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                  marginBottom: 10,
                }}
                source={require('../assests/images/shopingCartVector.png')}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: PharmacyAppColors.primaryTextColor,
                }}>
                My Orders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.catagoryHeadingView}>
            <SecondaryHeading title="Catagories" />
          </View>

          <FlatList
            data={catagoryCardData}
            numColumns={2}
            renderItem={renderCatagoryCardData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectCatagory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PharmacyAppColors.headerColor,
  },
  belowCoverView: {
    height: 633,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: PharmacyAppColors.white,
  },

  innerView: {
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  cityOrderView: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  cityView: {
    width: '52%',
    borderRadius: 5.32,
    borderWidth: 1,
    borderColor: '#9BA6A7',
    paddingVertical: 14,
    paddingHorizontal: 13,
    marginRight: 10,
  },
  cityHeadingText: {
    fontSize: 13,
    color: '#667B99',
    marginBottom: 6,
    fontFamily: 'Satoshi-Regular',
  },
  cityNameDropdownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityNameText: {
    fontSize: 14,
    fontFamily: 'Satoshi-Regular',
    color: PharmacyAppColors.primaryTextColor,
  },
  dropdownHeadingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownHeadingText: {
    color: '#667B99',
    fontSize: 12,
    fontFamily: 'Satoshi-Regular',
  },
  orderView: {
    width: '45%',
    borderRadius: 5.32,
    borderWidth: 1,
    borderColor: '#9BA6A7',
    paddingVertical: 14,
    paddingHorizontal: 13,
  },
  catagoryHeadingView: {
    paddingLeft: 3,
    paddingVertical: 15,
  },
  ItemAmountCardView: {
    flexDirection: 'row',
  },
  CatagoryCardView: {
    flexDirection: 'row',
  },

  //
  flatListView: {
    width: '48%',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imageBackground: {
    borderRadius: 10.96,
    overflow: 'scroll',
  },
  titleArrowView: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingVertical: 30,
  },
  catagoryText: {
    width: '53%',
    fontSize: 15.39,
    //fontWeight: '500',
    fontFamily: 'Satoshi-Medium',
    color: PharmacyAppColors.primaryTextColor,
  },
  arrowView: {},
  arrowIcon: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 100,
  },
});
