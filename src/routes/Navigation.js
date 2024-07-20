import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Product, Login } from '../screens';
import { useSelector } from 'react-redux';
import { Loading } from '../components';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthLoading ? (
        <Stack.Screen name="Loading" component={Loading} />
      ) : !userSession ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Detail" component={Detail} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
