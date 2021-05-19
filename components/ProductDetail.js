import React from 'react'
import { styles } from "./styles"
import { Text, View } from 'react-native';

export const ProductDetail = ({ route }) => {
    const { name, price } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Product Name : {name}</Text>
            <Text style={styles.text}>Product Price : {price}</Text>
        </View>
    )
}
