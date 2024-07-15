import {Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({placeholder,value, onType,iconName,isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
       placeholder={placeholder}
       onChangeText={onType}
       value={value}
       secureTextEntry={isSecure} />
      <Icon name ={iconName} size={30} />
    </View>
  );
};

export default Input;
