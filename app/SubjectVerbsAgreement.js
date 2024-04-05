import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubjectVerbsAgreement = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Subject verbs agreement</Text>

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

export default SubjectVerbsAgreement;
