import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Link = ({ onPress, children }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    link: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        marginTop: 16,
    },
});
