import {useNavigation, NavigationProp} from '@react-navigation/native';
import {NativeStackParamsList} from './NavigationType';

export const useAppNavitaion = () => {
  return useNavigation<NavigationProp<NativeStackParamsList>>();
};
