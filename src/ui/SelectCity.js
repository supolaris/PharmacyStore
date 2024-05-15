import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  Pressable,
} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import PrimaryHeader from '../components/headers/PrimaryHeader';
import AppCover from '../components/common/AppCover';
import SecondaryHeading from '../components/common/SecondaryHeading';
import PrimaryTextInput from '../components/common/PrimaryTextInput';

import FlatListIconActive from 'react-native-vector-icons/FontAwesome';
import FlatListIconInActive from 'react-native-vector-icons/FontAwesome';

const citiesData = [
  {
    id: 1,
    name: 'Islamabad',
  },
  {
    id: 2,
    name: 'Lahore',
  },
  {
    id: 3,
    name: 'Peshawar',
  },
  {
    id: 4,
    name: 'Rawalpindi',
  },
  {
    id: 5,
    name: 'Karachi',
  },
];

const SelectCity = () => {
  const [selectedCity, setSelectedCity] = useState('Islamabad');

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

          {/* <View style={styles.flatListView}> */}
          <FlatList
            data={citiesData}
            renderItem={renderCitties}
            keyExtractor={item => item.id.toString()}
          />
          {/* </View> */}
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
    height: '100%',
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
  },
  flatListIcon: {
    width: '10%',
  },
});
