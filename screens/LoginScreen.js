import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Linking } from 'react-native';
import { supabase } from '../services/supabase';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        console.log('Email:', email, 'Password:', password);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            alert('Login failed: ' + error.message);
        } else {
            alert('Login successful!')
        }
    };

    const handleGithubLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        });
        if (error) {
            alert('GitHub login failed: ' + error.message);
        } else if (data) {
            alert('GitHub login successful!');
            // Handle successful login, e.g., navigate to main screen
        }
    };

    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        if (error) {
            alert('Google login failed: ' + error.message);
        } else if (data) {
            alert('Google login successful!');
            // Handle successful login, e.g., navigate to main screen
        }
    };

    return (
        <ImageBackground
            source={require('../assets/img/computer-screen-black-background-dark.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Login to DevChat263 to start chatting with other devs in Zimbabwe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.socialButtonsContainer}>
                    <TouchableOpacity style={styles.socialButton} onPress={handleGithubLogin}>
                        <Text style={styles.socialButtonText}>
                            Sign in with GitHub
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                        <Text style={styles.socialButtonText}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adds a semi-transparent white overlay
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333', // Dark gray color for better contrast
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    input: {
        height: 60,
        borderBottomWidth: 5,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 12,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    socialButtonsContainer: {
        marginTop: 20,
    },
    socialButton: {
        backgroundColor: '#333',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignSelf: 'center',
        marginBottom: 10,
        width: '80%',
    },
    socialButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default LoginScreen;
