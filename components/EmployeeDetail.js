import React from 'react'
import { styles } from "./styles"
import { Text, View } from 'react-native';

export const EmployeeDetail = ({ route }) => {
    const { name, designation } = route.params;
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{designation}</Text>
        </View>
    )
}
