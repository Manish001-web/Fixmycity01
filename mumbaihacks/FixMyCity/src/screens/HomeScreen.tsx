import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to FixMyCity</Text>
            <Button
                title="Report an Issue"
                onPress={() => navigation.navigate('ReportIssue')}
            />
            <Button
                title="View Dashboard"
                onPress={() => navigation.navigate('Dashboard')}
                style={{ marginTop: 10 }}
            />
        </View>
    );
};

export default HomeScreen;