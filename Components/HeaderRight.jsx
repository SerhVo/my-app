import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderRight = ({ onPress }) => {
return (
<TouchableOpacity onPress={onPress} style={styles.container}>
<Icon name="sign-out" size={20} color="white" />
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
container: {
marginRight: 10,
},
});

export { HeaderRight };