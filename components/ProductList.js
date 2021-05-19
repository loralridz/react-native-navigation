import React from 'react'
import { products } from "./data/product";
import { Text, View, FlatList } from 'react-native';
import { styles } from "./styles";
import { Item } from "./base/Item"

let onPress;
const renderItem = ({ item }) => <Item title={item} onPress={onPress} />;

export const ProductList = ({ navigation }) => {
    onPress = (title) => {
        navigation.navigate('ProductDetail', {
            name: title.name,
            price: title.price
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Products List</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
            />
        </View>
    )
}
