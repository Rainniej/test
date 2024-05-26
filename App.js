import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './src/component/ProductListScreen';
import ProductDetailScreen from './src/component/ProductDetailScreen';
import BottomNavigation from './src/component/BottomNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
          <Tab.Screen name="Shop" component={ProductListScreen} 
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: 'shop-outline',
            tabBarIconFocused: 'shop',
          }}
            />
          <Tab.Screen
            name="Explore"
            component={ProductDetailScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: 'search-outline',
              tabBarIconFocused: 'search',
            }}
          />
          <Tab.Screen
            name="Cart"
            component={ProductDetailScreen}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: 'cart-outline',
              tabBarIconFocused: 'cart',
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={ProductDetailScreen}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: 'heart-outline',
              tabBarIconFocused: 'heart',
            }}
          />
          <Tab.Screen
            name="Account"
            component={ProductDetailScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: 'person-outline',
              tabBarIconFocused: 'person',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>

export default App;
