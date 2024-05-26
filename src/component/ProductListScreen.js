import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend or local storage
    const fetchProducts = async () => {
      const response = await fetch('https://www.aldi.com.au/groceries/pantry/chocolate/');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>Weight: {item.weight} kg</Text>
              <Text>Volume: {item.volume} m³</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductListScreen;
