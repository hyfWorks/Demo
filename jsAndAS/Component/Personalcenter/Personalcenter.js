/**
 * Created by Yongfa on 2016/12/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    NetInfo,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native';
import Button from '../utils/common/CustomButton'
import Dialog from '../utils/common/Dialog'
let CANCLE_LOGIIN="0X00";
let CANCLE_DIOLOG="0X11"
export default class Personalcenter extends Dialog {

    render() {
        return (
            <View>
                <View>
                    <Button
                        text="注销"
                        onPress={this.onPress.bind(this)}/>
                </View>
                {this.showDialog()}
            </View>
        );
    }
    onPress(){
        this.setState({
            modalVisible:true,
        });
    }
    content(){
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff',}
            : null
        return(
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                {/*标题*/}
                <View style={{borderBottomColor:'#000',borderBottomWidth:1,paddingBottom:20}}>
                    <Text style={{fontSize:16,color:'#000',marginLeft:10,marginTop:20,}}>确定要注销吗？</Text>
                </View>
                {/*按钮选择*/}
                <View style={{flexDirection:'row',alignItems:'center',marginTop:20}} >
                    <TouchableHighlight style={styles.buttonStyles} onPress={this.cancle.bind(this,[false,CANCLE_LOGIIN])}>
                        <Text style={styles.buttonText}>确定</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyles} onPress={this.cancle.bind(this,[false,CANCLE_DIOLOG])}>
                        <Text style={styles.buttonText}>取消</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height:80,
        paddingHorizontal:30
    },
    innerContainer: {
        borderRadius: 10,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0,0,0,0.5)'
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 15,
        color:'#fff'
    },
    modalButton: {
        marginTop: 10,
    },
    buttonStyles:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#5ecece',
        alignItems:'center',
        marginBottom:10,
        marginTop:20,
        paddingVertical:8,
        borderRadius:5,
    }
});