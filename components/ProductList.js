import React from 'react'
import { products } from "./data/product";
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const Item = ({ title }) => (
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => onPress(title)}
        >
            <Text>{title.name}</Text>
        </TouchableOpacity>
    </View>
);

let onPress;

const renderItem = ({ item }) => <Item title={item} />;

export const ProductList = ({ navigation }) => {
    onPress = (title) => {
        navigation.navigate('ProductDetail', {
            name: title.name,
            price: title.price
        })
    }
    return (
        <View style={styles.container}>
            <Text>Products List</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
            />
        </View>
    )
}
