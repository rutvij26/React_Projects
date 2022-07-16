import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission()
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            alert("You need to enable permission to access library")
        }
    }

    const handlePress = () => {
        if (!imageUri) {
            selectImage()
        } else {
            Alert.alert('Delete', 'Are you sure you want to delete this Image? ',
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' }
                ])

        }
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                onChangeImage(result.uri)
            }
        } catch (error) {
            console.log("Error Reading image");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ImageInput;