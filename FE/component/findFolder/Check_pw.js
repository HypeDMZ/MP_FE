import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image,
    TouchableHighlight, Modal} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Check_pw(props){
    return(
        <View style={styles.container}>

            <View style={{flex: 2}}></View>
            <Text style={styles.Title}>현재 비밀번호</Text>
            <Text style={styles.text}>입력 해주세용</Text>
            <View style={{flex: 1}}></View>
            <TextInput
                style={styles.textInput}
                placeholder="현재 비밀번호를 입력해주세요"
                secureTextEntry={true}
            />

            <View style={{flex: 1}}></View>
            <View style={{flexDirection: 'row', flex: 2}}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    props.navigation.navigate('Set_pw_phone')}
                }>
                    <Text style={styles.buttonText}>입력</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: "white",
    },
    navBox: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backBtn: {
        justifyContent: 'flex-start',
        padding: "3%",
    },
    backImg: {
        marginLeft: 25,
        marginTop: 8,
        width: 35,
        height: 30,
        resizeMode: "cover"
    },
    Title:{
        marginLeft: '-5%',
        width: "55%",
        textAlign: "left",
        fontWeight: 'bold',
        fontSize: 25,
        color: "black"
    },
    button:{
        width: "70%",
        borderRadius: 40,
        height: "35%",
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: "#FF037C"
    },
    textBold:{
        marginLeft: '-5%',
        width: "55%",
        paddingTop: 40,
        textAlign: "left",
        fontWeight: 'bold',
        fontSize: 28,
        color: "black"
    },
    text:{
        marginLeft: '-5%',
        width: "55%",
        textAlign: "left",
        fontSize: 28
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        width: "65%",
        fontSize: 16,
        //borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
});

export {Check_pw}