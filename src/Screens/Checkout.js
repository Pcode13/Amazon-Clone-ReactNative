import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStateValue} from '../Utilty/StateContext';
import CheckoutProduct from '../components/CheckoutProduct';
const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue();
  console.log('BAcsket====', basket);
  return (
    <SafeAreaView style={styles.checkout}>
      <View>
        <Image
          style={styles.checkoutAd}
          source={{
            uri: 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg',
          }}
        />
        <Text style={styles.greetingText}>Hello,</Text>
        <Text style={styles.checkoutTitle}>Your shopping Basket</Text>
      </View>
      <ScrollView>
        <View>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </View>

        <View style={styles.checkoutRight}>{/* <Subtotal /> */}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  checkout: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkoutLeft: {
    // flex: 1,
    padding: 10,
  },
  checkoutAd: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    // marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    marginBottom: 10,
  },
  checkoutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  checkoutRight: {
    padding: 10,
    backgroundColor: '#f3f3f3',
  },
});
