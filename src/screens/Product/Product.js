import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getProductApi} from '../../service';
import {Button, Loading, ProductCard} from '../../components';
import { useDispatch } from 'react-redux';

const Product = ({navigation}) => {
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState([]);
  const dispatch = useDispatch(); 

  useEffect(() => {
    berk();
  }, []);

  const berk = () => {
    getProductApi()
      .then(berk => {
        setData2(berk);
        setLoading(false);
      })
      .catch(error => {
        console.error('hata:', error);
      });
  };

  const handleProductSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct2 = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <View>
      <Button text="LogOut" onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})} />
      <FlatList data={data2} renderItem={renderProduct2} />
    </View>
  );
};

export default Product;
