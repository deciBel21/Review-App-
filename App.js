import  AppLoading  from 'expo-app-loading';
import React, {useState} from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import Navigator from './routes/homeStack'

const getFont=()=>{
return Font.loadAsync({
   'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
   'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})
}

export default function App() {
  const[fontsLoaded, setFontsLoaded]=useState(false);
  if(fontsLoaded){
    return(
      <Navigator />
    )
  }else{
   return(
    <AppLoading
    startAsync={getFont}
    onFinish={() => setFontsLoaded(true)}
    onError={console.warn}
    />
   )
  }
 
 
}


