import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import checkEmail from "../util/checkEmail"

export default class SignIn extends Component {
    state = {
        email : "",
        password : ""
    }

    emailHandlerFn = val => {
        this.setState({
            email : val
        })
    }

    pwdHandlerFn = val => {
        this.setState({
            password : val
        })
    }

    formSubmitFn = ()=>{
        const validateState = JSON.parse(JSON.stringify(this.state))
        let isValidemail = checkEmail(validateState.email)
        if(isValidemail && validateState.password !== ""){

        }else{
            if(!isValidemail){
                alert("Not Vaild")
            }
            if(validateState.password === ""){
                alert("Password can't be empty")
            }
        }
    }

    render(){
        return(
        <View style={styles.body}>
            {/* <Text>
                SignIn
            </Text> */}
            <View style={styles.inputContainer}>
                <View style={styles.row}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.textInput} 
                        placeholder= "Email"
                        keyboardType = "email-address"
                        value = {this.state.email}
                        onChangeText = {this.emailHandlerFn}
                    />
                </View>
                <View style={styles.row}>
                    <Text>Password</Text>
                    <TextInput
                        style={styles.textInput} 
                        placeholder= "Password"
                        secureTextEntry = {true}
                        value = {this.state.password}
                        onChangeText = {this.pwdHandlerFn}
                    />
                </View>
                <View style={styles.row}>
                    <Text></Text>
                    <TouchableOpacity onPress={this.formSubmitFn}>
                        <Text>Sign-in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    body :{
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    row :{
        flexDirection : "row",
        alignItems :"center"
    },  
    inputContainer :{
        paddingTop : 20,
        paddingBottom : 15,
        // flexDirection : "row",
        justifyContent :"center",
        alignItems : "center"
    },
    textInput :{
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 25,
        fontSize: 16,
        margin: 5
    }
})
