import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Title({ children }) {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default Title;


const styles = StyleSheet.create({

    title: {
        fontSize: 20,

    }
})