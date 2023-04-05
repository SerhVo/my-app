import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const Home = ({  }) => {
    return (
        
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Posts') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Navigator
                activeTintColor="blue"
                inactiveTintColor="gray"
                style={{ backgroundColor: '#fff' }}
            >
                <Tab.Screen
                    name="Posts"
                    component={PostsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="ios-home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="CreatePost"
                    component={CreatePostsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="ios-add-circle" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="ios-person" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </Tab.Navigator>
    );
};

export default Home;