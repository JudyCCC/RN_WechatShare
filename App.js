/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as wechat from 'react-native-wechat'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentDidMount() {
    wechat.registerApp('wx954443ae01d7b587');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => {
          wechat.isWXAppInstalled()
            .then((isInstalled) => {
              if (isInstalled) {
                wechat.openWXApp()
              } else {
                ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT)
              }
            })
        }}>
          <Text>判断是否安装微信</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{
            wechat.shareToTimeline({
                type: 'imageUrl',
                title: 'web image',
                description: 'share web image to time line',
                mediaTagName: 'email signature',
                messageAction: undefined,
                messageExt: undefined,
                imageUrl: 'https://avatars1.githubusercontent.com/u/192222?s=88&amp;v=4'
            }).then((success)=>{
                console.log(success)
                alert('微信分享成功'+JSON.stringify(success))
            }).catch((error)=>{
                console.log(error)
                alert('微信分享失败'+JSON.stringify(error))
            })
        }}>
          <Text>分享图片到朋友圈</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{
            wechat.shareToTimeline({
                type: 'text',
                description: '分享文字',
            }).then((success)=>{
                console.log(success)
                alert('微信分享成功'+JSON.stringify(success))
            }).catch((error)=>{
                console.log(error)
                alert('微信分享失败'+JSON.stringify(error))
            })
        }}>
          <Text>分享文字到朋友圈</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{
            wechat.shareToSession({
                type: 'imageUrl',
                title: 'web image',
                description: 'share web image to time line',
                mediaTagName: 'email signature',
                messageAction: undefined,
                messageExt: undefined,
                imageUrl: 'https://avatars1.githubusercontent.com/u/192222?s=88&amp;v=4'
            }).then((success)=>{
                console.log(success)
                alert('微信分享成功'+JSON.stringify(success))
            }).catch((error)=>{
                console.log(error)
                alert('微信分享失败'+JSON.stringify(error))
            })
        }}>
          <Text>分享图片给好友</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={()=>{
            wechat.shareToSession({
                type: 'text',
                description: '分享文字',
            }).then((success)=>{
                console.log(success)
                alert('微信分享成功'+JSON.stringify(success))
            }).catch((error)=>{
                console.log(error)
                alert('微信分享失败'+JSON.stringify(error))
            })
        }}>
          <Text>分享文字给好友</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
