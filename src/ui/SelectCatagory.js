import {View, Text, StatusBar, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import {PharmacyAppColors} from '../colors/Colors';

import SecondaryHeader from '../components/headers/SecondaryHeader';
import AppCover from '../components/common/AppCover';
import PrimaryTextInput from '../components/common/PrimaryTextInput';
import ItemAmountCard from '../components/common/ItemAmountCard';
import CatagoryCard from '../components/common/CatagoryCard';

const catagoryCardData = [
  {
    title: 'Digestive System',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage1.png'),
  },
  {
    title: 'Cardio Vascular',
    image: require('../assests/images/catagoryImages/catagoryBackgroundImage1.png'),
  },
];

const SelectCatagory = () => {
  const renderCatagoryCardData = item => {
    return (
      <View>
        <View style={styles.CatagoryCardView}>
          <CatagoryCard catagoryTitle={item.title} />
          <CatagoryCard catagoryTitle={item.title} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={PharmacyAppColors.headerColor}
        barStyle="dark-content"
      />
      <SecondaryHeader title="Pharmacy Store" />
      <AppCover />

      <View style={styles.belowCoverView}>
        <View style={styles.innerView}>
          <PrimaryTextInput placeholder="Search Catagory" />

          {/* <View style={styles.ItemAmountCardView}>
            <ItemAmountCard />
            <ItemAmountCard />
          </View> */}

          {/* <View style={styles.CatagoryCardView}>
            <CatagoryCard catagoryTitle="Digestive System" />
            <CatagoryCard catagoryTitle="Cardio Vascular" />
          </View>
          <View style={styles.CatagoryCardView}>
            <CatagoryCard catagoryTitle="Digestive System" />
            <CatagoryCard catagoryTitle="Cardio Vascular" />
          </View>
          <View style={styles.CatagoryCardView}>
            <CatagoryCard catagoryTitle="Digestive System" />
            <CatagoryCard catagoryTitle="Cardio Vascular" />
          </View> */}

          <FlatList
            data={catagoryCardData}
            renderItem={renderCatagoryCardData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectCatagory;

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
  ItemAmountCardView: {
    flexDirection: 'row',
  },
  CatagoryCardView: {
    flexDirection: 'row',
  },
});
