import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Link, useNavigation } from 'expo-router'
import contentsData from '../data/contents.json';

const TableOfContent = () => {
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Table of Contents</Text>
            <FlatList
                data={contentsData.tableOfContents}
                keyExtractor={(section, index) => `${index}`}
                renderItem={({ item }) => (
                    <View style={styles.chapterContainer}>
                        <Text style={styles.chapterTitle}>{item.item.title} :</Text>
                        <FlatList
                            data={item.item.subItems}
                            keyExtractor={(subItem, index) => `${index}`}
                            renderItem={({ item }) => (
                                <Link href={item?.url} style={styles.subItem}>{item.title}</Link>
                            )}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    chapterContainer: {
        marginBottom: 16,
    },
    chapterTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subItem: {
        marginLeft: 16,
        marginBottom: 4,
        fontSize: 16,
        color: '#212529',
        borderBottomWidth: 1,
        borderBottomColor: '#6f6',
    },
    backButton: {
        position: 'absolute',
        top: 65, // Adjust as needed
        left: 20, // Adjust as needed
        zIndex: 1, // Ensure back button is above other content
    },
    backButtonText: {
        fontSize: 16,
        color: '#333333', // Back button text color
    },
});

export default TableOfContent;
