import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import ArrowIcon from 'react-native-vector-icons/AntDesign';

const SecondaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ArrowIcon
          onPress={props.onPress}
          style={styles.icon}
          name="arrowleft"
          size={25}
          color={PharmacyAppColors.primaryTextColor}
        />
        <Text style={styles.titleText}>{props.title}</Text>

        <Pressable
          style={styles.cartPressableView}
          onPress={props.onCartIconPressed}>
          <Image
            style={styles.cartImage}
            source={require('../../assests/images/cartVector.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SecondaryHeader;

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
    width: '70%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: PharmacyAppColors.primaryTextColor,
  },
  cartPressableView: {
    backgroundColor: PharmacyAppColors.white,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'flex-start',
  },
  cartImage: {
    height: 34,
    width: 34,
  },
});
