import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const CommentsScreen = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setComments(response.data))
      .catch(error => console.log(error));
  }, []);

  const renderCommentItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={comments}
      renderItem={renderCommentItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CommentsScreen;

