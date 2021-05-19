import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { styles } from "./styles";
import { Item } from "./base/Item"
import { employees } from './data/employee';

let onPress;
const renderItem = ({ item }) => <Item title={item} onPress={onPress} />;

export const EmployeeList = ({ navigation }) => {
    onPress = (title) => {
        navigation.navigate('EmployeeDetail', {
            name: title.name,
            designation: title.designation
        })
    }
    return (
        <View style={styles.container}>
            <Text>Employees List</Text>
            <FlatList
                data={employees}
                renderItem={renderItem}
            />
        </View>
    )
}
