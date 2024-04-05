import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ModalAuxillaries = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Modal auxiliaries</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default ModalAuxillaries;
