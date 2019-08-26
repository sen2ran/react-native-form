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



    render(){
        return(
        <View style={styles.body}>
            <Text>
                SignIn
            </Text>

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
