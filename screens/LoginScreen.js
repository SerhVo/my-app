import React, { useState } from 'react';
import { StackActions, CommonActions } from '@react-navigation/native';

import { View, Text, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, ImageBackground } from 'react-native';
import styles from './styles';
import { PasswordInput } from '../Components/PasswordInput';
import { Link } from '../Components/Link';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);


    const handleSubmit = () => {
        console.log(`Email: ${email}, Password: ${password}`);
        Keyboard.dismiss();
    navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  );
  navigation.dispatch(
    StackActions.push('Posts', {
      screen: 'Posts',
      params: { name: 'Posts' },
    })
  );
};

    const handlePress = () => {
        navigation.navigate("Registration");
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ImageBackground style={styles.photoBg} source={require('../Image/PhotoBG.jpg')}>
                <View style={styles.containerLog} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        style={[styles.input, isEmailFocused && styles.inputFocused]}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                    />
                    <PasswordInput isPasswordFocused={isPasswordFocused} setIsPasswordFocused={setIsPasswordFocused} />
                    {!isEmailFocused && !isPasswordFocused && (
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    )}
                    {!isEmailFocused && !isPasswordFocused && (
                        <Link onPress={handlePress}>No account? Sign up</Link>
                    )}
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
