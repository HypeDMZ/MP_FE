import React, {useState} from 'react';
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
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Footer} from "../Layout/footer";
import {Header} from '../Layout/Header'
import axios from "axios";
import {useFocusEffect} from "@react-navigation/native";
import {getAndReissueTokens} from "../../../api/reRefresh";
import {instance} from "../../../api/axiosInstance";

function CategoryPage(props){
    const CancelToken = axios.CancelToken;
    let cancel;
    const [bucket_image, changeimage] = useState([])
    const [bucket_title, changetitle] = useState([])
    const [listlist, changeList] = useState([])
    const [rows,setRows] = useState(0);
    const [bucketList, setBucketList] = useState([])
    const [category, setCategory] = useState(props.route.params.category)
    const [content2, setContent] = useState(props.route.params.data)
    const [bucketData, changeBucketData] = useState()
    const [count,changeCount ] = useState(0)
    useFocusEffect(
        React.useCallback(() => {
            console.log('Screen was focused');
            console.log("이거 잘 받아졌는 지 확인해보자 :" ,content2);
            instance
                .get(`/api/bucket/load/${id}`)
                .then(async (response) => {
                    //console.log(response)
                    changeList(response)
                    console.log('자 축소하자',response.request._response);

                    const parsedResponse = JSON.parse(response.request._response);
                    const bucketImageList = parsedResponse.data.map(item => item.bucketImage);
                    console.log(bucketImageList);
                    changeimage(bucketImageList)

                    const bucketTitle = parsedResponse.data.map(item => item.title);
                    console.log(bucketTitle);
                    changetitle(bucketTitle)

                    const abc = parsedResponse.data.map(item => item.title);
                    console.log(bucketTitle);


                    const newItems = response.data.data.map(item => [item.id, item.bucketImage, item.title]);
                    setBucketList(newItems);
                    console.log('asdfasdfadsfadsddddfdfdfdfdfdfd', newItems)
                    changeCount(newItems.length);
                    console.log(Math.ceil(newItems.length / 2));
                    setRows(Math.ceil(newItems.length / 2));

                })
                .catch((error) => {
                    console.log('버킷 발급 실패');
                });

            getAndReissueTokens(cancel).then(r => console.log('getAndReissueTokens'));

            return () => {
                console.log('Screen was unfocused');
                if (cancel !== undefined) cancel();
            };
        }, [])
    );

    const [sort, changeSort] = useState(0)

    const sortingBucket = () => {
        if(sort % 2 === 0){
            bucketList.sort((a, b) => a[2].localeCompare(b[2]));
            setBucketList(bucketList)
        } else {
            setBucketList(bucketList.sort((a, b) => a[0] - b[0]));

        }
        // 클릭 횟수 증가
        changeSort(sort + 1);
    }



    const id = props.route.params.data[2]
    return(
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <Header data = {props.route.params.data[1]}></Header>
            </View>

            <Text style={{fontSize: 20, color: '#FF357E'}}>"{props.route.params.data[1]}"의 버킷</Text>

            <View style={{position: 'absolute', top: 50, left: 330, right: 0, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.EditButton} onPress={()=>{
                    sortingBucket();
                }
                }>
                    <Text style={{justifyContent: 'flex-start',marginLeft : '9%', fontSize : 30}}>⇆</Text>
                </TouchableOpacity>
            </View>


            {
                count !== 0?(
                    <View style ={{ width : '2500%', height : '70%', alignItems : 'center', margin : 3}}>
                        <ScrollView>
                            <View style={{ flexDirection: 'column' }}>
                                {Array.from(Array(rows)).map((_, rowIndex) => (
                                    <View style={{ flexDirection: 'row' }} key={rowIndex}>
                                        {Array.from(Array(2)).map((_, colIndex) => {
                                            const index = rowIndex * 2 + colIndex;
                                            if (index < bucketList.length) {
                                                const content = bucketList[index];
                                                console.log(content);
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            props.navigation.navigate('BucketDetail', {data : bucket_title[index], id : content[0], categoryId : content2[2]});
                                                        }}
                                                        key={index}
                                                    >
                                                        <View>
                                                            <View style={{ flexDirection: 'column', alignItems: 'center',
                                                                margin: 10, backgroundColor: 'white', borderRadius: 0, borderColor: 'black',
                                                                borderWidth: 1,}}>
                                                                <Text style={{fontSize:17, textAlign: 'center', color: 'black'}}>{content[2]}</Text>
                                                                <Image
                                                                    style={{
                                                                        width: 190,
                                                                        height: 160,
                                                                        borderColor: '#FFECEC',
                                                                        borderWidth: 2,
                                                                        flexDirection: 'row',
                                                                        borderRadius: 0,
                                                                    }}
                                                                    source={{ uri: content[1] }}
                                                                />
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            } else {
                                                return <View style={{ flex: 0.5 }} key={index} />;
                                            }
                                        })}
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                ) : (
                   <View>
                       <Image
                           source={require('./../../img/꿈동이_new.png')}
                           style={{ width: 180, height: 170 }}
                       />
                       <Text style={styles.textBold}>꿈이 비어있어요!</Text>
                   </View>
                )
            }

            <View style={styles.bottomView}>
                <View style={{flexDirection: 'row', flex: 2, width : '100%', justifyContent : 'center'}}>
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
        backgroundColor: '#FFF4F4',
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    textBold:{
        width: "55%",
        textAlign: "left",
        fontWeight: 'bold',
        fontSize: 32,
        color: "#1a1a19"
    },
});

export {CategoryPage}