import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Product, Login } from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthLoading ? (
        <Stack.Screen name="Loading" component={Loading} />
      ) : !userSession ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Product" component={Product} options={{
            title:"Dükkan",
            headerStyle: {
              backgroundColor: '#2286c3',
            },
            headerTitleStyle: {
              color:"white"
              
            }, 
            headerTitleAlign: 'center',
            headerShown: true,
            headerRight:() => <Icon name="logout" size={30} color="white"
             onPress={() => dispatch({ type: 'REMOVE_USER' })} />
          }} />
          <Stack.Screen name="Detail" component={Detail} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
