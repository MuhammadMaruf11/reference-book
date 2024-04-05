import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CausativeVerbs = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Causative verbs</Text>

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

export default CausativeVerbs;
