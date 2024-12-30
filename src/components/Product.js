import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useStateValue} from '../Utilty/StateContext';

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <View style={styles.product}>
      <View style={styles.productInfo}>
        <Text>{title}</Text>
        <Text style={styles.productPrice}>
          <Text style={styles.currency}>$</Text>
          <Text>{price}</Text>
        </Text>
        <View style={styles.productRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Text key={i}>🌟</Text>
            ))}
        </View>
      </View>

      <Image source={{uri: image}} style={styles.productImage} />

      <TouchableOpacity style={styles.addButton} onPress={addToBasket}>
        <Text style={styles.buttonText}>Add to Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android
    shadowColor: 'black', // Adds shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productInfo: {
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  productRating: {
    flexDirection: 'row',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#f0c14b',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Product;
