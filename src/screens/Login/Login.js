import {ActivityIndicator, Alert, Image, Text, View} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {Input, Button} from '../../components';
import {Formik} from 'formik';
import { postUserApi } from '../../service/User/postUserApi';
import { useDispatch } from 'react-redux';



const Login = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const {data: response} = await postUserApi(values.username, values.password);
      setData(response); // Giriş başarılıysa yanıtı sakla
      console.log('Giriş başarılı', response);
      Alert.alert('Giriş Başarılı', 'Giriş işlemi başarılı!');
      dispatch({ type: 'SET_USER', payload: { user} });
      navigation.navigate("Product")
      
    } catch (error) {
      setError(error.message || 'Giriş sırasında bir hata oluştu');
      console.error('Giriş sırasında hata:', error);
      Alert.alert('Giriş Hatası', error.message || 'Giriş sırasında bir hata oluştu');
    } finally {
      setLoading(false); 
      
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/shopping.webp')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adınızı giriniz..."
              value={values.username}
              onType={handleChange('username')}
              iconName={'account'}
            />
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onType={handleChange('password')}
              iconName={'lock'}
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  "address": {
    "geolocation": {
      "lat": "-37.3159",
      "long": "81.1496"
    },
    "city": "kilcoole",
    "street": "new road",
    "number": 7682,
    "zipcode": "12926-3874"
  },
  "id": 1,
  "email": "john@gmail.com",
  "username": "johnd",
  "password": "m38rmF$",
  "name": {
    "firstname": "john",
    "lastname": "doe"
  },
  "phone": "1-570-236-7033",
  "__v": 0
}
