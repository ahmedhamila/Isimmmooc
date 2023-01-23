import { Avatar, Box, Center, Fab,  Button,FlatList, FormControl, Heading, HStack, IconButton, Input, Menu, Modal, NativeBaseProvider, Pressable, Radio, StatusBar, Toast, useColorModeValue, VStack } from 'native-base';
import React, { useEffect } from "react";
import { Tab, Text, TabView } from '@rneui/themed'; 
import { useState } from "react";

import { ScrollView, TouchableOpacity, View } from "react-native";
import { Icon } from "@rneui/themed";
import Card from './Card';
import File from './FilePicker';
import AddV from './VideoPicker';
import Add from './ImagePicker';
function SearchBar({ searchPhrase, setSearchPhrase,serach}) {
    return <View style={{width:"100%"}}>
        <NativeBaseProvider> 
         <VStack my="4" space={5} w="100%"  >
        
  
       
          
        <Input placeholder="Search People & Places"  onChange={ (e)=>{serach(e.target.value)}}  InputRightElement={<Icon m="2" mr="3" size={20} color="gray" name="mic" />} />
        </VStack>
        </NativeBaseProvider>
      
      </View>
  }
  function ModalA  ({showModal,setShowModal})  {
    return  <View>
<Center>
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.CloseButton />
    <Modal.Header>Contact Us</Modal.Header>
    <Modal.Body>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Email</FormControl.Label>
        <Input />
      </FormControl>
    </Modal.Body>
    <Modal.Footer>
      
        <Button onPress={() => {
        setShowModal(false);
      }}>
          Save
        </Button>
    
    </Modal.Footer>
  </Modal.Content>
</Modal>
</Center>
</View>
}
function ModalF ({showModal2,setShowModal2})  {
    return  <View>
<Center>
<Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.CloseButton />
    <Modal.Header>Add Course</Modal.Header>
    <Modal.Body>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Image url</FormControl.Label>
        <Input />
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Text Description</FormControl.Label>
        <Input />
      </FormControl>
    </Modal.Body>
    <Modal.Footer>
      
        <Button onPress={() => {
        setShowModal2(false);
      }}>
          Save
        </Button>
    
    </Modal.Footer>
  </Modal.Content>
</Modal>
</Center>
</View>
}
export default  function FormateurHome({navigation,route}) {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState([]);
    const [index, setIndex] = useState(0);
    const courses=[{title:"mobile developpement ",
    image:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/Mobile-Application-Software.jpg",
    text:"this is mobile course to learn mobile developpement ",
    video:"https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRZAQKMFkmfg2JpTM6VrS9lwpxv7Fpk66JzrA",
    favorite:"favorite-border"},
    {title:"Fultter course",
    image:"https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png",
    text:"this is Fultter course to learn mobile developpement  with fullter",
    video:"https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRZAQKMFkmfg2JpTM6VrS9lwpxv7Fpk66JzrA",
    favorite:"favorite-border"},
    {title:"React course",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SjRK6i5Cw5Bjou6yKVCfJ2EifdpPXa3H9A&usqp=CAU",
    text:"this is React course to learn Web developpement with react ",
    video:"",
    favorite:"favorite-border"},
    {title:"java course",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxb1CwxwtL68UGi51O7EaZPUFWA0cvsBJ9A&usqp=CAU",
    text:"this is java course to learn java developpement ",
    video:"",
    favorite:"favorite-border"},
    {title:"python course",
    image:"https://www.freecodecamp.org/news/content/images/2022/02/Banner-10.png",
    text:"this is python course to learn python developpement ",
    video:"",
    favorite:"favorite-border"},
    {title:"R course",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_ezPqIUDViJ2xRivmtbQmJq3xqK93NzWBw&usqp=CAU",
    text:"this is R course to learn R  ",
    video:"",
    favorite:"favorite-border"},];
    const styles = {
        app: {
          flex: 2, // the number of columns you want to devide the screen into
          marginHorizontal: "auto",
         
        },
        item: {
          flex: 1,
          maxWidth: "100%", // 100% devided by the number of rows you want
          alignItems: "center",
          
          // my visual styles; not important for the grid
          padding: 10,
          backgroundColor: "rgba(249, 180, 45, 0.25)",
          borderWidth: 1.5,
          borderColor: "#fff"
        }
      };
const [showModal, setShowModal] = useState(false);
const [showModal2,setShowModal2]= useState(false);
const [showModal3,setShowModal3]= useState(false);
const [showModal4,setShowModal4]= useState(false);
const [res,setres] =useState({name:"",uri:""});
const [inputVideo,setInputVideo] =useState({name:"",uri:""});
const [inputVideo2,setInputVideo2] =useState("");
const [av,setav]=useState("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
const [list, setList] = React.useState(courses);
const [slist, setsList] = React.useState(courses);
const [flist,setfList]=React.useState([]);
const [fslist,setfsList]=React.useState([]);
const [activetab ,setactivetab]=React.useState(0);
const [visible,setvisible]=useState(false);
const [inputValue1, setInputValue1] = React.useState("");
const [inputValue2, setInputValue2] = useState("");
const [inputValue3, setInputValue3] = React.useState("");

const addItem = (title,image,text,video) => {
    if (title === "" ||image==="" ||text===""||video==="") {
      Toast.show({
        title: "Please Enter the missing paramtre",
        status: "warning"
      });
      return;
    }
   
    setList(prevList => {
      return [...prevList, {
        title: title,
        image:image,
        text:text,
        video:video,
      }];
    });
    setsList(prevList => {
        return [...prevList, {
          title: title,
          image:image,
          text:text,
          video:video,
        }];
      });
    
  };
  const serach=(index)=>{
   
    console.log(list)

    console.log(slist)
    if(index===""){
      console.log(index)
      setList(slist)
      setfList(fslist)
      setSearchPhrase(index);
     
    }
    else
    {   
        console.log(list)
        const newData = slist.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = index.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          const newData2 = fslist.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = index.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setList(newData)
          setfList(newData2)
    setSearchPhrase(index);
  }
  }
  const handleDelete = index => {
    setList(prevList => {
      const temp = prevList.filter((itemI) => itemI.title!== index);
      console.log(temp);
      return temp;
  
    });
    setsList(prevList => {
        const temp = prevList.filter((itemI) => itemI.title!== index);
        console.log(temp);
        return temp;
    
      });
  };
  const handleStatusChange = index => {
    setList(prevList => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };
     
  const addItem2 = (title,image,text,video) => {
    if (title === "" ||image==="" ||text==="") {
      Toast.show({
        title: "Please Enter the missing paramtre",
        status: "warning"
      });
      return;
    }
   
    setfList(prevList => {
      return [...prevList, {
        title: title,
        image:image,
        text:text,
        video:video,
      }];
    });
    setfsList(prevList => {
        return [...prevList, {
          title: title,
          image:image,
          text:text,
          video:video,
        }];
      });
    
  };
  const serach2=(index)=>{
   
    console.log(list)

    console.log(slist)
    if(index===""){
      console.log(index)
      setfList(slist)
      setSearchPhrase(index);
     
    }
    else
    {   
        console.log(list)
        const newData = fslist.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = index.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setfList(newData)
    setSearchPhrase(index);
  }
  }
  const handleDelete2 = index => {
    setfList(prevList => {
      const temp = prevList.filter((itemI) => itemI.title!== index);
      console.log(temp);
      return temp;
  
    });
    setfsList(prevList => {
        const temp = prevList.filter((itemI) => itemI.title!== index);
        console.log(temp);
        return temp;
    
      });
      handleDelete(index);
  };

     
    return <>
    <View style={{width:"100%" ,height:"100%"}}>
       <NativeBaseProvider> 
        <StatusBar bg="#3700B3" barStyle="light-content"  />
        
        <Box safeAreaTop bg="violet.600" w="100%"s  />
        <VStack h="100%">
        <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
          
            <Text style={{fontWeight:"bold",fontSize:30 ,width:"40%",color:"white"}}>AppName</Text>         
            
            <Center flex={1} px="2"  >
            <View style={{width:"100%"}}>
       
         <VStack my="4" space={5} w="100%"  >
        
  
       
          
          <Input placeholder="Search People & Places"   value={searchPhrase} onChangeText={(text)=>{ serach(text)}} width="100%" borderRadius="9" py="3" px="1" fontSize={14} InputLeftElement={<Icon m="4" ml="48" size={20} color="gray" name="search"  />} InputRightElement={<Icon m="2" mr="3" size={20} color="gray" name="mic" />} />
        </VStack>
       
      
      </View>

      
        
      </Center>
      <TouchableOpacity onPress={()=>{navigation.navigate("profile",{...route,av:av,setav:setav})}}>
      <Avatar bg="green.500" source={{
      uri: av
    }}  size={30}  >
        AJ 
      </Avatar>
       </TouchableOpacity >
       
       <Box w="10%" alignItems="center">
 
      < Menu w="190" trigger={triggerProps => {
       return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <Icon name="more-vert" size={30} color="white"/>
             </Pressable>
     }}>
         <Menu.Item onPress={()=>{navigation.navigate("profile",route)}}>Profile</Menu.Item>
         <Menu.Item onPress={()=>{navigation.navigate("Settings")}}>Settings</Menu.Item>
         <Menu.Item onPress={()=>{setShowModal(true)}}>Contect</Menu.Item>
         <Menu.Item onPress={()=>{navigation.navigate("Login")}}>Deconnexion</Menu.Item>
         
       </Menu>
       </Box>
          </HStack>
          <ModalA showModal={showModal} setShowModal={setShowModal} />
          <View>
<Center>
<Modal isOpen={showModal2} onClose={() => setShowModal2(false)}>
  <Modal.Content maxWidth="400px">
    <Modal.CloseButton />
    <Modal.Header>Add Course</Modal.Header>
    <Modal.Body>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <Input flex={1} onChangeText={v => setInputValue1(v)} value={inputValue1} placeholder="Add Task" />
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Image url</FormControl.Label>
        <Add inputValue2={inputValue2} setInputValue2={setInputValue2} />
       
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Video url</FormControl.Label>
        <Input flex={1} onChangeText={v => setInputVideo2(v)} value={inputVideo2} placeholder="Add Task" />
        <AddV inputVideo={inputVideo} setInputVideo={setInputVideo} />
      </FormControl>
      <FormControl mt="3">
        <FormControl.Label>Text Description</FormControl.Label>
        <Input flex={1} onChangeText={v => setInputValue3(v)} value={inputValue3} placeholder="Add Task" />
        
      </FormControl>
      
      <HStack>
          <FormControl w="50%" margin={1}>
        <FormControl.Label>FName</FormControl.Label>
        <Input flex={1} variant="underlined" placeholder="Add Task" />

      </FormControl>
      <FormControl w="50%" margin={1}>
        <FormControl.Label>UName</FormControl.Label>
        <Input flex={1} variant="underlined" placeholder="Add Task" />
      </FormControl>
      </HStack>
    </Modal.Body>
    <Modal.Footer>
      
       
        <IconButton borderRadius="sm" variant="solid"  onPress={() => {
          console.log(inputVideo.uri)
            addItem(inputValue1,inputValue2,inputValue3,inputVideo2);
            addItem2(inputValue1,inputValue2,inputValue3,inputVideo2);
            setInputValue1("");
            setInputValue2("");
            setInputValue3("");
            setShowModal2(false);
          }} />
          <Button flex="1" onPress={() => {
            setShowModal3(true);
            setShowModal2(false)
          }}>
              Continue
            </Button>
    
    </Modal.Footer>
  </Modal.Content>
</Modal>
<Modal isOpen={showModal3} onClose={() => setShowModal3(false)} >
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Select Address</Modal.Header>
          <Modal.Body>
          <Button flex="1">
            +AddChapitre
          </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal4(true);
            setShowModal3(false);
          }}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showModal4} size="lg" onClose={() => setShowModal4(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
          <HStack>
          
        <Input placeholder="Add Task" onChangeText={(v)=>{setres(v)}} value={res.name} />
     
      <File w="50%" res={res} setres={setres}  />
          </HStack>
          <HStack >
       <AddV/>
            </HStack>
            <Input placeholder="Add Task"  />
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => {
            setShowModal2(false);
            setShowModal3(false);
            setShowModal4(false);
          }}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
</Center>
</View>
          <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="default"
      dense
    >
      <Tab.Item
        title="Courses"
        titleStyle={{ fontSize:12 }}
        containerStyle={() => ({
            backgroundColor: "rgb(91, 33, 182)" ,
          })}
        icon={<Icon name='book'  color='white' />}
      />
      <Tab.Item
        title="MyCourses"
        titleStyle={{ fontSize:12 }}
        containerStyle={() => ({
            backgroundColor: "rgb(91, 33, 182)" ,
          })}
        icon={<Icon name='favorite'  color='white' />}
      />
    </Tab>
   <View style={{width:"100%",backgroundColor:"white",height:"100%"}} >
    <TabView value={index } onChange={setIndex} animationType="timing" style={{backgroundColor:"red",width:"100%"}} tabItemContainerStyle={{backgroundColor:"red",height:"100%"}}     >
      <TabView.Item style={{ backgroundColor: 'white', width: '100%' }} >
      
        <NativeBaseProvider>
       
       <VStack style={{width:"100%",height:"100%"}}>
       
       
      <Box  style={{width:"100%",height:"100%"}}>
        <VStack style={{width:"100%",height:"100%"}}>
            
          
          
          <View style={styles.app}>
            <FlatList
           
             
             style={{flex:1,width:"100%",height:"100%"}}
             data={list}
               renderItem={({item,index}) => ( 
                <View style={styles.item}>
    <Card maxW="100%"   title={item.title} image={item.image} text={item.text} video={item.video} favorite={item.favorite}  navigation={navigation}  />

                       </View> 
      )}
      keyExtractor={(item)=> item.title}
      numColumns={2}
      columnWrapperStyle={{flex:1}} />
                
                </View>
           
          </VStack>
          
       
        
      </Box>
   
       </VStack>
      
       </NativeBaseProvider>
   
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%',height:"100%" }}>
        
      <NativeBaseProvider>
       
        <VStack style={{width:"100%",height:"100%"}}>
         <Box style={{width:"100%",height:"70%"}} shadow="2" rounded="lg" >
       
        <View style={styles.app}>
            <FlatList
           
            
             style={{width:"100%",height:"100%",flex:1}}
             data={flist}
               renderItem={({item,index}) => ( 
                <View style={styles.item}>
                   <View style={{width:"100%",backgroundColor:"red"}}>
    <Card  maxW="100%"  title={item.title} image={item.image} text={item.text} video={item.video} favorite={item.favorite} navigation={navigation}  />
                <Pressable placement="bottom-right"   position="absolute"  bottom="1" right={0} px="5" py="1.5"  onPress={() => handleDelete2(item.title)}>
    <Icon color="red" name="delete"   />
    </Pressable>
    </View>
                       </View> 
       
      )}
      keyExtractor={(item)=> item.title}
      numColumns={2}
      columnWrapperStyle={{flex:1}} />
                
                
           
      </View>
             
   <Pressable placement="bottom-right"   position="absolute"  bottom="1" right={0} px="5" py="1.5" onPress={()=>{setShowModal2(true);}}>
    <Icon color="red" name="add"   />
    </Pressable>
     
        </Box>
        </VStack>
       
        </NativeBaseProvider>
        
      </TabView.Item>
    </TabView>
    </View>
        
          </VStack>

        </NativeBaseProvider>
      
        
        </View>
      
      </>
      
}


