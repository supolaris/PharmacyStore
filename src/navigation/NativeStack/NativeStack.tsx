import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SelectCityScreen from '../../screens/SelectCityScreen/SelectCityScreen';
import SelectCatagoryScreen from '../../screens/SelectCatagoryScreen/SelectCatagoryScreen';
import ChooseMedicineScreen from '../../screens/ChooseMedicineScreen/ChooseMedicineScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';
import CheckOutScreen from '../../screens/CheckOutScreen/CheckOutScreen';
import OrderAgainScreen from '../../screens/OrderAgainScreen/OrderAgainScreen';
import OrderScreen from '../../screens/OrderScreen/OrderScreen';
import ImageDescriptionScreen from '../../screens/ImageDescriptionScreen/ImageDescriptionScreen';

const Stack = createNativeStackNavigator();

function MyNativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="ImageDescription_Screen"
          component={ImageDescriptionScreen}
        />
        <Stack.Screen
          name="SelectCatagory_Screen"
          component={SelectCatagoryScreen}
        />
        <Stack.Screen name="Order_Screen" component={OrderScreen} />
        <Stack.Screen name="OrderAgain_Screen" component={OrderAgainScreen} />
        <Stack.Screen name="CheckOut_Screen" component={CheckOutScreen} />
        <Stack.Screen name="Cart_Screen" component={CartScreen} />
        <Stack.Screen
          name="ChooseMedicine_Screen"
          component={ChooseMedicineScreen}
        />
        <Stack.Screen name="SelectCity_Screen" component={SelectCityScreen} />

        {/* <Stack.Screen
          name="SelectCatagoryScreen"
          component={SelectCatagoryScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNativeStack;
