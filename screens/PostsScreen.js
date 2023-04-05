import React, { useEffect, useState } from 'react';
import { Header } from '@react-navigation/stack';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const PostsScreen = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Header.Button
                    title="Logout"
                    onPress={() => {
                     navigation.navigate('Login');
                    }}
                />
            ),
        });
    }, [navigation]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.log(error));
    }, []);

    const renderPostItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
        </View>
    );

    return (
        <FlatList
            data={posts}
            renderItem={renderPostItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default PostsScreen;

