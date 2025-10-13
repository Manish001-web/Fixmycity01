import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ReportIssueScreen = () => {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleSubmit = () => {
        // Logic to submit the issue with description and image
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report an Issue</Text>
            <TextInput
                style={styles.input}
                placeholder="Describe the issue"
                value={description}
                onChangeText={setDescription}
            />
            <Button title="Pick an image from camera roll" onPress={handleImagePick} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 20,
    },
});

export default ReportIssueScreen;