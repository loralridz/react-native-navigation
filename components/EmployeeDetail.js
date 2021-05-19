import React from 'react'
import { styles } from "./styles"
import { Text, View } from 'react-native';

export const EmployeeDetail = ({ route }) => {
    const { name, designation } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Employee Name : {name}</Text>
            <Text style={styles.text}>Employee Designation : {designation}</Text>
        </View>
    )
}
