import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';                                                                                                                          
export const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Products List"
                onPress={() => navigation.navigate('ProductList')}
            />
            <Button
                title="Employees List"
                onPress={() => navigation.navigate('EmployeeList')}
            />
            <Button
                title="Order List"
                onPress={() => navigation.navigate('OrderList')}
            />
        
        </View>
    )
}
