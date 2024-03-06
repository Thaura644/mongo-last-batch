import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, just navigate to a different screen for now
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.upperView}>
        <View style={styles.view}>
          <TouchableOpacity onPress={handleBackPress} style={styles.arrow}>
            <ArrowLeftIcon style={styles.backArrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageStyle}>
          {/* <Image source={require('../../assets')}/> */}

        </View>
      </SafeAreaView>

      <View style={styles.loginContent}>
        <Text style={styles.title}>Welcome to the Union</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          // Add onChangeText and value props as needed
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          // Add onChangeText and value props as needed
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
       <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }} >
        <Text style={styles.orText} >Or</Text>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF4',
  },
  upperView: {
    justifyContent: 'flex-start',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  arrow: {
    marginLeft: 16,
    marginTop: 16,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  loginContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#FFD700',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
