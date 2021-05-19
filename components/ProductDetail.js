import React from 'react'
import {styles} from "./styles"
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export const ProductDetail = ({ navigation, route }) => {
    const { name, price } = route.params;
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    )
}
