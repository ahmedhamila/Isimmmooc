//
import { AspectRatio, Box, Button, Center, Checkbox, Container, Divider, FormControl, Heading, HStack, IconButton, Image, NativeBaseProvider, Popover, Pressable, Stack, StatusBar, Tooltip } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import PlayerV from "./VideoPlayer";


export default function Course({route,navigation}){
      console.log(route.params.video)
     return ( <View style={{width:"100%",height:"100%" ,margin:5 ,flex:1,flexDirection:"column"}}    >
     <NativeBaseProvider >
     <Box w="100%" h="100%" bg="blue.500" alignItems="center"  justifyContent="center" >
        <Box position="relative"   w="100%" h="100%" >
        
         <Box w="100%" h="50%" flex={1}>
             <PlayerV source= {route.params.video} />
             </Box>
       <Box  w="100%" h="50%" position="relative" >
       <ImageBackground source={{
              uri: route.params.image    
    }}
    style={{width:"100%",height:"100%" }}
      resizeMode="stretch"
       >
    <Text style={{backgroundColor:'white',alignSelf:"center"}}>{route.params.title}</Text>
    <Text style={{backgroundColor:'white'}}>{route.params.text}</Text>
 
    <Button style={{alignSelf:"center"}} onPress={()=>{navigation.navigate("QQQapp")}} >start course</Button>
    </ImageBackground>
    </Box>
   
    </Box>
        </Box>

        </NativeBaseProvider>
        </View>
     )

}