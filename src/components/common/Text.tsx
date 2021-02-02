import React from 'react'
import {
    Text as RNText
} from 'react-native'
import { Colors } from '../../theme'

interface Props {
    fontSize?: number,
    color?: string,
}

export const Text: React.FC<Props> = ({
    children,
    fontSize = 16,
    color = Colors.FULL_SHADE,
}) => {
    return (
        <RNText
            style={{
                fontSize,
                color,
            }}
        >
            {children}
        </RNText>
    )
}