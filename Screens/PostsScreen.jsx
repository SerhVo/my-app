import React from 'react';
import { View, Text } from 'react-native';

const PostsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Posts Screen</Text>
        </View>
    );
};

PostsScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <HeaderRight
                onPress={() => console.log('Logout pressed')}
            />
        ),
    };
};

export default PostsScreen;
