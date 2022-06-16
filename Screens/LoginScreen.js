import { StyleSheet, Text, View, TextInput, } from 'react-native'
import React, {useState} from 'react'


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

      <TouchableOpacity style={styles.loginButton} onPress={null}>
        <Text style={styles.buttontext}>Log In</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({})