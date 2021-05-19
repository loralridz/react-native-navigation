import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../styles";

export const Item = ({ title,onPress }) => (
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => onPress(title)}
        >
            <Text>{title.name}</Text>
        </TouchableOpacity>
    </View>
);