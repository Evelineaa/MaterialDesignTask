import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Button} from "react-native";
import MainAppbar from "../components/MainAppbar";
import { useState } from "react";

export default function Login(){
    const [formData, setFormData] = useState({username: '', password: ''})
    const [showError, setShowError]= useState(false)

    const validateAndSubmit = () => {
        setShowError(true)
        if(formData.username.length > 0 && formData.password.length > 8) {
            setFormData({username: '', password: ''})
            setShowError(false)
        }
    }

    return(
        <>
        <MainAppbar title="Login" />
         <View style={styles.container}>
            <TextInput label="Username" style={styles.input_field}
            value={FormData.username}
            onChangeText={text => setFormData({...formData,username: text})}
            error={formData.username.length === 0 && showError}/>
            <TextInput label="Password" style={styles.input_field} keyboardType='visible-password'
            value={FormData.password}
            onChangeText={text => setFormData({...formData,password: text})}
            error={formData.password.length < 8 && showError}/>
            <Button title="button" mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>
         </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        marginTop: 30,
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,16,8)
    },
    button: {
        margin: (16,8,0,8)
    }
});