import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useStateValue} from '../Utilty/StateContext';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <View style={styles.checkoutProduct}>
      <Image style={styles.checkoutProductImage} source={{uri: image}} />

      <View style={styles.checkoutProductInfo}>
        <Text style={styles.checkoutProductTitle}>{title}</Text>
        <Text style={styles.checkoutProductPrice}>
          <Text style={styles.priceSymbol}>$</Text>
          <Text style={styles.priceAmount}>{price}</Text>
        </Text>
        <View style={styles.checkoutProductRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Text key={i}>🌟</Text>
            ))}
        </View>
        {!hideButton && (
          <Button title="Remove from Basket" onPress={removeFromBasket} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkoutProduct: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkoutProductImage: {
    width: 150,
    height: 150,
    objectFit: 'contain',
    marginRight: 20,
  },
  checkoutProductInfo: {
    flex: 1,
  },
  checkoutProductTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutProductPrice: {
    marginVertical: 10,
  },
  priceSymbol: {
    fontSize: 16,
    color: '#888',
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutProductRating: {
    flexDirection: 'row',
  },
});

export default CheckoutProduct;
