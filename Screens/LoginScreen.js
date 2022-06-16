import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
       auth
       .signInWithEmailAndPassword(email, password)
       .then(() => {
            navigation.navigate("Chat");
        })
        .catch((error) => {
            console.log("Error");
        });
    
    }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>MOB4CHAT</Text>
      <Text style={styles.fieldTitle}>Email</Text>
      <TextInput
      style={styles.input}
      placeholder="Enter Email"
      value={email}
      onChangeText={(text) => setEmail(text) } 
      />

      <Text style={styles.fieldTitle}>Password</Text>
      <TextInput
      style={styles.input}
      placeholder="Enter Password"
      securetextentry={true}
      value={password}
      onChangeText={(text) => setPassword(text) }
      />

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.buttontext}>Log In</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 24,
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      marginBottom: 24,
    },
    fieldtTitle: {
      fontSize: 18,
      marginBottom: 12,
    },
    input: {
      borderColor: "#999",
      borderWidth: 1,
      marginBottom: 24,
      padding: 4,
      height: 36,
      fontSize: 18,
      backgroundColor: "white",
    },
    loginButton: {
      backgroundColor: "blue",
      width: 120,
      alignItems: "center",
      padding: 18,
      marginTop: 12,
      marginBottom: 36,
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
    },
  
  });