import { AspectRatio, Box, Button, Center, Checkbox, Container, Divider, Fab, FormControl, Heading, HStack, IconButton, Image, NativeBaseProvider, Popover, Pressable, Stack, StatusBar, Tooltip } from "native-base";
import React from "react";
//import { Button } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";


export default function Card(props) {
    console.log("lde")
    const text=props.text+""
    const [iconname,seticonname]=React.useState("favorite-border");
    
    return <><View style={{width:"100%",margin:1,backgroundColor:"white" }} key={props.key}>
       <NativeBaseProvider > 

<TouchableOpacity  style={{width:"100%",height:"100%"}} onPress={()=>{props.navigation.navigate("QQapp",{ title:props.title, image:props.image, text:props.text, video:props.video,});}} >
<Box   style={{width:"100%",height:"100%"}} >
    
      <Box   style={{width:"100%",height:"100%"}} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" > 
      
        <Box  w="100%" style={{margin:1,backgroundColor:"white" }} >
          <AspectRatio  style={{width:"100%",height:"50%"}} ratio={4/3}>
            <Image source={{
            uri: props.image
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" right={1} px="3" py="1.5">
            PHOTOS
          </Center>
        
          
        </Box>
        <Stack p="4" space={1}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {props.title}
              
            </Heading>
            <Text  _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
               {text.substring(0,19)+"..."}
            </Text>
          </Stack>
          <Text fontWeight="400">
          </Text>
          
       
        
          <Box w="100%" alignItems="center">
      <Popover placement="top" trigger={triggerProps => {
      return <Button size={"sm"} variant="link" {...triggerProps}>read more</Button>;
    }} >
        <Popover.Content width="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          {
          /* @ts-ignore */
        }
          
          <Popover.Body>
          <Text fontWeight="400">
            {text}
          </Text>
            </Popover.Body>
          
        </Popover.Content>
      </Popover>
    </Box>
   
          
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    
    </Box>
    </TouchableOpacity>
    </NativeBaseProvider>
       </View>
      </>;
      
}
