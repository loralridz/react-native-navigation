import React from 'react'
import { styles } from "./styles"
import { Text, View } from 'react-native';

export const OrderDetail = ({ route }) => {
    const { order,name, price } = route.params;
    return (
        <View style={styles.container}>
            <Text>{order}</Text>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    )
}
