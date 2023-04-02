import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';


export const Avatar = () => {
    const [image, setImage] = useState(null);

    const pickImage = useCallback(async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access media library is required!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleAddImage = useCallback(() => {
        pickImage();
    }, [pickImage]);

    const handleDeleteImage = useCallback(() => {
        setImage(null);
    }, []);

    return (
        <View style={styles.container}>
            {image ? (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteImage}>
                        <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity style={styles.placeholder} onPress={handleAddImage}>
                    <AntDesign style={styles.addIcon} name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -60,
        zIndex: 1,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 16,
    },
    deleteButton: {
        position: 'absolute',
        top: 81,
        left: 107,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: 25,
        height: 25,

    },
    addIcon: {
        position: 'absolute',
        top: 81,
        left: 107,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: 25,
        height: 25,
    },
    placeholder: {
        backgroundColor: '#F6F6F6',
        width: 120,
        height: 120,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#fff',
        fontSize: 16,
    },
});

