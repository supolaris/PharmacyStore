import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {PharmacyAppColors} from '../../colors/Colors';

import ArrowIcon from 'react-native-vector-icons/SimpleLineIcons';

const CatagoryCard = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assests/images/catagoryImages/catagoryBackgroundImage1.png')}
        resizeMode="cover">
        <View style={styles.titleArrowView}>
          <Text style={styles.catagoryText}>{props.catagoryTitle}</Text>

          {/* <View style={styles.arrowView}> */}
          <ArrowIcon
            style={styles.arrowIcon}
            name="arrow-right"
            size={15}
            color="#9BA6A7"
          />
          {/* </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginHorizontal: 3,
    marginVertical: 3,
  },
  imageBackground: {
    borderRadius: 10.96,
    overflow: 'scroll',
    //backgroundColor: 'red',
  },
  titleArrowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingVertical: 30,
  },
  catagoryText: {
    width: '50%',
    fontSize: 15.39,
    fontWeight: '500',
    color: PharmacyAppColors.primaryTextColor,
  },
  arrowView: {},
  arrowIcon: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 100,
  },
});
