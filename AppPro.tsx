import React from "react";

import {
    View, Text, StyleSheet, useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello !!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: "#ffffff",
        fontSize: 24
    },
    darkText: {
        color: "#000000",
        fontSize: 24
    }
})

export default AppPro