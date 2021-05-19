import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EmployeeList')}

            > <Text>Employee List</Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductList')}

            > <Text>Product List</Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('OrderList')}

            > <Text>Order List</Text></TouchableOpacity>
        </View>
    )
}
