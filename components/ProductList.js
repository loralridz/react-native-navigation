import React from 'react'
import { products } from "./data/product";
import { StyleSheet, Text, View, Button, FlatList ,TouchableOpacity} from 'react-native';
const Item = ({ title }) => (
    <View>
        {/* <Button
        //   onPress={() => navigation.navigate('Home')}
        onPress={console.log(999)}
        style={{backgroundColor:"white",color:"black"}}
        >{title}</Button> */}
        <TouchableOpacity
            style={styles.button}
        onPress={onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
);
let onPress;
const renderItem = ({ item }) => <Item title={item} />;
export const ProductList = ({ navigation }) => {
    onPress=()=>{
        console.log("pressed")
        navigation.navigate('ProductDetail')
    }
    return (
        <View style={styles.container}>
            <Text>Products List</Text>
            <FlatList
                data={products}
                renderItem={renderItem}

            // keyExtractor={(item) => item.id}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});

