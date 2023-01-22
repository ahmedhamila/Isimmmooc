import { Avatar, Box, Button, Center, Circle, Divider, FormControl, HStack, Modal, NativeBaseProvider, VStack, ZStack } from "native-base"
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native"
import { Text } from "react-native"
import { ImageBackground } from "react-native"
import { Icon } from "@rneui/themed";
import Add from "./ImagePicker";
const NBBox = props => {
    return <Box  borderRadius="md" bg="primary.400" {...props} />;
  };
  function Profile({route}) {
    
    const[values,setValues]=useState({});
    const infomations=()=>{
           if(route.params.params ===undefined)
           setValues({name:"",lname:"",email:"",phone:""})
           else
           setValues({name:route.params.params.fullName,lname:route.params.params.fullName,email:route.params.params.email,phone:route.params.params.phoneNumber})
    }
    useEffect(infomations,[]);
    const [showModal, setShowModal] = useState(false);
    const [inputImage, setInputImage] = useState(route.params.av);
    const [image,setimage]=useState(route.params.av);
    return  <View style={{width:"100%",height:"100%",backgroundColor:"red"}}>
     <NativeBaseProvider  > 
          <Box  alignItems="center"  justifyContent="center" flexDirection="column" w="100%" h="100%">
        <Box position="relative"   w="100%" h="50%" >
        <Box bg="indigo.500" w="100%"  h="100%" rounded="lg" >
        <ImageBackground source={{
          uri: "https://i.pinimg.com/originals/43/7d/7f/437d7fbc153ed19719f8910d689e17c5.jpg"
        }}
       
        style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
        
            
        
            <Center>
             <Avatar bg="green.500" source={{
      uri: image
    }}  size={40} >
        AJ
      </Avatar> 
     
      <Text style={{fontSize:20}}> User  Name</Text>
      </Center>
     
         </ImageBackground>
       
     </Box>
            </Box>
          <HStack  zIndex={2} position="absolute" space={2}>
            <Button     zIndex={2} alignItems="center" position="relative" shadow={8} onPress={() => setShowModal(true)}>Change Photo</Button>
            <Center>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Add inputValue2={inputImage} setInputValue2={setInputImage} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
                console.log(route.params.setav)
                route.params.av=inputImage;
                
              setShowModal(false);
              setimage(inputImage);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
            </HStack>
        <Box bg="white" w="100%" h="50%" position="relative" p="7"   >
            <Text style={{alignSelf:"center"}} >ABUser</Text>
            <Text>Your Informations : </Text>
            <HStack   w="100%" >
            <VStack  w="30%" alignItems="flex-start" >
                <Icon name="person" />
                </VStack>
               <VStack  w="70%"  alignItems="flex-start" > 
              
                <Text  > {values.name}</Text>
              
                
            </VStack>
            </HStack>
           
          <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} /> <HStack>
            <VStack  w="30%" alignItems="flex-start">
                <Icon name="person" />
                </VStack>
               <VStack  w="70%"  alignItems="flex-start"> 
               
                <Text  > {values.lname}</Text>
            </VStack>
            </HStack>
            
            <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} /> <HStack>
            <VStack  w="30%" alignItems="flex-start">
                <Icon name="mail" />
                </VStack>
               <VStack  w="70%"  alignItems="flex-start"> 
               
                <Text  > {values.email}</Text>
            </VStack>
            </HStack>
            <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} /> <HStack>
            <VStack  w="30%" alignItems="flex-start">
                <Icon name="phone" />
                </VStack>
               <VStack  w="70%"  alignItems="flex-start"> 
               
               
                <Text  > {values.phone}</Text> 
            </VStack>
            </HStack>
            <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} /> 
           
            </Box>
      </Box>
      </NativeBaseProvider>
      </View>

  }
/*const Profiless=()=>{
    return  <View style={{width:"100%",height:"100%",backgroundColor:"red"}}>
    <NativeBaseProvider  > 
        <Box w="100%" h="100%" bg="blue">
      
        <ZStack alignItems="center"   w="100%" h="100%">
        <Box bg="indigo.500" w="100%" h="100%" rounded="lg" alignItems="center" justifyContent="center" shadow={8} >
            <Text>dnjdkssssss   </Text>
            </Box>
        <Box bg="indigo.500" w="100%"  h="50%" rounded="lg" shadow={8} >
        <ImageBackground source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg"
        }}
       
        style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
        
            
        
            <Center>
             <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}  size={40} >
        AJ
      </Avatar>
     
      <Text style={{fontSize:20}}> User  Name</Text>
      </Center>
     
         </ImageBackground>
       
     </Box>
     
     
    </ZStack>
 
  </Box>
  </NativeBaseProvider>
  </View>
}*/
export default Profile;