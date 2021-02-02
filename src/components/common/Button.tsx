import React from 'react'
import {
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import { Colors } from '../../theme'
import {
    Text
} from './Text'

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_SHADE,
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    }
})

interface Props extends TouchableOpacityProps {
    label: string;
    loading?: boolean;
}

export const Button: React.FC<Props> = ({
    label,
    disabled,
    loading,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...props}
            disabled={loading || disabled}
        >
            {
                loading
                ? (
                    <ActivityIndicator size="large" color={Colors.LIGHTEST_SHADE} />
                )
                : (
                    <Text fontSize={22} color={disabled ? Colors.MEDIUM_SHADE : Colors.FULL_SHADE}>
                        {label}
                    </Text>
                )
            }
        </TouchableOpacity>
    )
}