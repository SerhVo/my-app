import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
    return (
        <View>
            <Text>Map Screen</Text>
            <MapView
                style={{ flex: 1 }}
            />
        </View>
    );
};

export default MapScreen;