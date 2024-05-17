import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {PharmacyAppColors} from '../colors/Colors';

import SecondaryHeader from '../components/headers/SecondaryHeader';
import TertiaryHeader from '../components/headers/TertiaryHeader';

const ImageDescription = () => {
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
              <TouchableOpacity style={styles.cartTouchableOpacity}>
                <Image
                  style={styles.cartImage}
                  source={require('../assests/images/cartVector.png')}
                />
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
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
    borderRadius: 26,
  },
});
