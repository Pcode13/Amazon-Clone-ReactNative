import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useStateValue} from '../Utilty/StateContext';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const navigation = useNavigation();
  console.log('usre', user);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.headerLogo}
          source={{uri: 'http://pngimg.com/uploads/amazon/amazon_PNG11.png'}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', fontSize: 10}}>Hello </Text>
        <Text style={{color: 'white', fontSize: 16}}>,{user.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', fontSize: 12}}>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
        <Text style={{color: 'white', fontSize: 20}}>{basket.length}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000000',
  },
  headerLogo: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
  },
  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    padding: 5,
    // borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
  headerSearchInput: {
    flex: 1,
    paddingLeft: 10,
  },
  headerSearchIcon: {
    marginRight: 10,
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerOption: {
    padding: 10,
  },
  headerOptionLineOne: {
    fontSize: 12,
    color: 'gray',
  },
  headerOptionLineTwo: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerOptionBasket: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerOptionLineTwoBasketCount: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
