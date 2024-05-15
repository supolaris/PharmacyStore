import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SelectCityScreen from '../../screens/SelectCityScreen/SelectCityScreen';
import SelectCatagoryScreen from '../../screens/SelectCatagoryScreen/SelectCatagoryScreen';

const Stack = createNativeStackNavigator();

function MyNativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SelectCityScreen" component={SelectCityScreen} />

        {/* <Stack.Screen
          name="SelectCatagoryScreen"
          component={SelectCatagoryScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNativeStack;
