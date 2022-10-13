import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Checkbox from './src/Checkbox';

const CheckboxPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Checkbox individual</Text>
            {/* <Checkbox options/>  */}
            <Text style={styles.title}>Checkbox uma opção por vez</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    title: {
        color: '#333',
        size: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginVertical: 10,
        marginLeft: 12,
    },
});


export default CheckboxPage;