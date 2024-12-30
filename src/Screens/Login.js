import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in!');
        navigation.navigate('HomeTab');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('User registered!', user);
        navigation.navigate('HomeTab');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-in</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={handleLogin} />

      <Text style={styles.notice}>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
        Sale. Please see our Privacy Notice, our Cookies Notice, and our
        Interest-Based Ads Notice.
      </Text>

      <Button title="Create your Amazon Account" onPress={handleRegister} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  notice: {
    marginVertical: 10,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
