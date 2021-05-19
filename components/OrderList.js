import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from "./styles";
import { Item } from "./base/Item";
import { orders } from './data/order';

let onPress;
const renderItem = ({ item }) => <Item title={item} onPress={onPress} />;

export const OrderList = ({ navigation }) => {
    onPress = (title) => {
        navigation.navigate('OrderDetail', {
            order: title.orderNo, 
            name: title.name,
            price: title.price
        })
    }
    return (
        <View style={styles.container}>
            <Text>Orders List</Text>
            <FlatList
                data={orders}
                renderItem={renderItem}
            />
        </View>
    )
}
