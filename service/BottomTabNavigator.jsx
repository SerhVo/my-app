import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#f2f2f2',
                },
                activeTintColor: '#000',
                inactiveTintColor: '#a6a6a6',
            }}>
            <Tab.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Create"
                component={CreatePostsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="plus" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

