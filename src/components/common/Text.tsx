import React from 'react'
import {
    Text as RNText,
    TextStyle,
    TextProps
} from 'react-native'
import { Colors } from '../../theme'

interface Props extends TextProps {
    fontSize?: number;
    color?: Colors;
    fontStyle?: "italic" | "normal";
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    style?: TextStyle,
}

export const Text: React.FC<Props> = ({
    children,
    fontSize,
    color,
    fontWeight,
    fontStyle,
    textAlign,
    style,
    ...props
}) => {
    return (
        <RNText
            style={{
                fontSize,
                color,
                fontWeight,
                fontStyle,
                textAlign,
                ...style,
            }}
            {...props}
        >
            {children}
        </RNText>
    )
}