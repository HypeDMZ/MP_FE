import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    Image,
    View,
    Button, TextInput,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Footer} from "../Layout/footer";
import {Header} from '../Layout/Header';

function Setting(props){
    return(
        <View style={styles.container}>

            <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <Header data = {props.route.params.data}></Header>
            </View>

            <View style={styles.navBox1}>
                <View style={{ flex: 1.5 }}></View>
                <View style={styles.storeCon}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate() }}>
                        <Text style={styles.buttonText2}>저장</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.profileImg} source={require('FE/component/img/profile.png')}/>
                <View style={{ flex: 0.5 }}></View>
                <View style={styles.inputContainer}>
                    <Text style={styles.Title}>이름: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="현재 이름"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.Title}>자기소개: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="현재 자기소개"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.Title}>전화번호: </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="현재 전화번호"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ flex: 0.7}}></View>
                <TouchableOpacity style={styles.editbtn} onPress={()=>{
                    props.navigation.navigate()}//'Check_pw'로 이동하고 싶은데 text component 오류남..
                }>

                    <Text style={styles.buttonText}>비밀번호 변경하기</Text>
                </TouchableOpacity>
                <View style={{ flex: 1}}></View>
            </View>



            <View style={styles.bottomView}>
                <View style={{flexDirection: 'row', flex: 2, width : '95%', justifyContent : 'center'}}>
                    <Footer navigation = {props.navigation} data ={props.route.params.data}></Footer>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    storeCon:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'flex-end',
        width: '88%',
    },
    navBox1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: '100%',
        marginBottom: '5%',
        padding: '5%',
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold',
        flexDirection: 'column', // Here, change 'row' to 'column'
    },
    Title:{
        width: "20%",
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 17,
        color: "black"
    },
    text1:{
        width: '100%',
        fontSize: 16,
        color: "black",
        padding: 5,
    },
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        width: "60%",
        fontSize: 16,
        //borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    settext:{
        width: '50%',
        fontSize: 16,
        color: "black",
        marginLeft: 20,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    profileImg: {
        width: 90,
        height: 90,
        resizeMode: "cover",
    },
    moreImg:{
        marginLeft: 5,
        marginRight: 30,
        width: 20,
        height: 20,
        resizeMode: "cover",
    },
    editbtn:{
        marginTop: 15,
        width: "80%",
        borderRadius: 40,
        height: "8%",
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: "#e3e3f6"
    },

    buttonText:{
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
    },
    buttonText2:{
        textAlign: 'right',
        color: "#d0739c",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '5%'
    },
});

export {Setting}