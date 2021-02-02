import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    }
})

const InitialScreen: React.FC = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default InitialScreen;
