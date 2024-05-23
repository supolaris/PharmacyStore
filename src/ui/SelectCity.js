import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  Pressable,
  Alert,
} from 'react-native';

import {useAppNavitaion} from '../@types/AppNavigation';

import {useContext} from 'react';

import {PharmacyAppColors} from '../colors/Colors';

import PrimaryHeader from '../components/headers/PrimaryHeader';
import AppCover from '../components/common/AppCover';
import SecondaryHeading from '../components/common/SecondaryHeading';
import PrimaryTextInput from '../components/common/PrimaryTextInput';
import PrimaryButton from '../components/common/PrimaryButton';

import FlatListIconActive from 'react-native-vector-icons/FontAwesome';
import FlatListIconInActive from 'react-native-vector-icons/FontAwesome';
import {MyContext} from '../context/useContext';

import {CitiesData} from '../assests/data/cititeData';

const SelectCity = props => {
  const navigation = useAppNavitaion();
  const useCtx = useContext(MyContext);
  const [selectedCity, setSelectedCity] = useState();

  const onSelectCityPressed = () => {
    useCtx.cityNameFunction(selectedCity);
    if (selectedCity) {
      navigation.navigate('SelectCatagory_Screen');
    } else {
      Alert.alert('Error', 'Please select the city');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const myCityName = await useCtx.cityName;
      console.log('City name: ' + myCityName);
    };
    getData();
  }, []);

  const renderCitties = ({item}) => {
    return (
      <View style={styles.flatListView}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#F4F4F4' : 'white',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#9BA6A7',
              marginBottom: 2,
            },
          ]}
          onPress={() => setSelectedCity(item.name)}>
          <Text style={styles.flatlistPressableText}>{item.name}</Text>
          {selectedCity === item.name ? (
            <FlatListIconInActive
              style={styles.flatListIcon}
              name="dot-circle-o"
              size={25}
              color={PharmacyAppColors.primaryTextColor}
            />
          ) : (
            <FlatListIconActive
              style={styles.flatListIcon}
              name="circle-o"
              size={25}
              color={PharmacyAppColors.primaryTextColor}
            />
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />

      <View style={{height: 300}}>
        <PrimaryHeader title="Pharmacy Store" />
        <AppCover />
      </View>

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <SecondaryHeading title="Select a city" />

          <View style={{paddingVertical: 14}}>
            <PrimaryTextInput placeholder="Search City" />
          </View>
          <FlatList
            data={CitiesData}
            renderItem={renderCitties}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View style={{width: '80%', alignSelf: 'center', paddingTop: 60}}>
          <PrimaryButton
            onPress={onSelectCityPressed}
            //onPress={onSelectCityPressed}
            buttonText="Select City"
          />
        </View>
      </View>
    </View>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PharmacyAppColors.headerColor,
  },
  belowCoverView: {
    height: 633,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: PharmacyAppColors.white,
  },
  innerView: {
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  flatListView: {},
  flatlistPressable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flatlistPressableText: {
    fontSize: 16.44,
    fontWeight: '300',
    color: PharmacyAppColors.primaryTextColor,
    width: '90%',
    fontFamily: 'Satoshi-Regular',
  },
  flatListIcon: {
    width: '10%',
  },
});
