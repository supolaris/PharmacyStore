import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import ArrowIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/AntDesign';

const TertiaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowIcon
          style={styles.icon}
          name="arrowleft"
          size={35}
          color={PharmacyAppColors.primaryTextColor}
        />
        <Text style={styles.titleText}>{props.title}</Text>

        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.searchIconPressable}>
            <SearchIcon name="search1" size={15} />
          </Pressable>

          <Pressable style={styles.cartPressable}>
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
    //flex: 3,
    width: '60%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  searchIconPressable: {
    backgroundColor: PharmacyAppColors.white,
    // padding: 0,
    //marginRight: 20,
    paddingHorizontal: 18,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    //justifyContent: 'flex-start',
  },
  cartPressable: {
    backgroundColor: PharmacyAppColors.white,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    //justifyContent: 'flex-start',
  },
  cartImage: {
    height: 34,
    width: 34,
  },
});
