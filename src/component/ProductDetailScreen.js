import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [price, setPrice] = useState(product.price);
  const [availability, setAvailability] = useState(product.availability);

  const updateProduct = async () => {
    // Update product details in backend or local storage
    const response = await fetch(`https://www.aldi.com.au/groceries/pantry/chocolate/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price, availability }),
    });

    if (response.ok) {
      alert('Product updated successfully');
    } else {
      alert('Failed to update product');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>Weight: {product.weight} kg</Text>
      <Text>Volume: {product.volume} m³</Text>
      <Text>Quantity: {product.quantity}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>Availability: {product.availability ? 'Available' : 'Out of stock'}</Text>

      <TextInput
        style={styles.input}
        value={String(price)}
        onChangeText={setPrice}
        placeholder="Update Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={String(availability)}
        onChangeText={setAvailability}
        placeholder="Update Availability"
      />
      <Button title="Update Product" onPress={updateProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default ProductDetailScreen;
