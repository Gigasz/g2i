import React from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    }
})

export const ScreenContainer: React.FC = ({
    children
}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    {children}
                </View>
            </SafeAreaView>
        </View>
    )
}
