import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground} from "react-native";
import HomeComponents from '../components/HomeComponents';

// const navigateTo = (dest) => {
//   switch (dest){
//     case 'Wallet':
      
//   }
// }

const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <ImageBackground 
        source = {require('../../assets/backgroundImage.jpg')}
        style={styles.backgroundStyle}
        resizeMode='cover'
        blurRadius={2}
        >
        <HomeComponents title="My Wallet" imageSource = {require('../../assets/wallet.png')} onClick={()=>{navigation.navigate('Colors')}} />
        <HomeComponents title="Stores" imageSource = {require('../../assets/tag.png')} onClick={()=>{navigation.navigate('Text')}}/>
        <HomeComponents title="Scan a code" imageSource = {require('../../assets/photo-camera.png') } onClick={()=>{navigation.navigate('Scan')}} />      
      </ImageBackground>
    </View>
      /* <Text style={styles.text}>QR code</Text>
      <Button
        onPress = {() => navigation.navigate('Components')}
        title = 'Go to Components Demo'
      />
      <Button
        onPress = {() => navigation.navigate('List')}
        title = 'Go to List Demo'
      />
      <Button
        onPress = {() => navigation.navigate('Image')}
        title = 'Go to Image Demo'
      />
      <Button
        onPress = {() => navigation.navigate('Counter')}
        title = 'Go to Counter Demo'
      />
      <Button
        onPress = {() => navigation.navigate('Colors')}
        title = 'Go to Colors Demo'
      />
      <Button
        onPress = {() => navigation.navigate('Square')}
        title = 'Go to Square Demo'
      />
      <Button
        onPress = {() => navigation.navigate('Text')}
        title = 'Go to Text Demo'
      /> */

    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  backgroundStyle: {
    minHeight: '100%',
  }
});

export default HomeScreen;

