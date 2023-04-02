import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, ImageBackground, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { PasswordInput } from '../Components/PasswordInput';
import { Link } from '../Components/Link';
import { Avatar } from '../Components/Avatar';


const RegistrationScreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleSubmit = () => {
        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        Keyboard.dismiss();
    };
    const handlePress = () => {
        Linking.openURL('https://example.com');
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <ImageBackground style={styles.photoBg} source={require('../Image/PhotoBG.jpg')}>
                <Avatar />
                <View style={styles.containerReg} onPress={() => Keyboard.dismiss()}>
                    <Text style={styles.title}>Registration</Text>
                    <TextInput
                        style={[styles.input, isNameFocused && styles.inputFocused]}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)}
                    />
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

                    {!isEmailFocused && !isNameFocused && !isPasswordFocused && (
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    )}
                    {!isEmailFocused && !isNameFocused && !isPasswordFocused && (
                        <Link onPress={handlePress}>Already have an account? Log in</Link>
                    )}
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default RegistrationScreen;
