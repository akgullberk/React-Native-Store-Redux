import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
