import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../Screens/styles';


export const PasswordInput = ({ isPasswordFocused, setIsPasswordFocused }) => {
    const [password, setPassword] = useState('');
    const [secureEntry, setSecureEntry] = useState(true);
    
    const toggleSecureEntry = () => {
        setSecureEntry(prev => !prev);
    };

    return (
        <View style={[ styles.inputPassword, isPasswordFocused && styles.inputFocused]}>

            <TextInput
                style={[styles.inputWidth]}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={secureEntry}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={toggleSecureEntry}>
                <Text style={[styles.textButTogle]}>{secureEntry ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
        </View>
    );
};
