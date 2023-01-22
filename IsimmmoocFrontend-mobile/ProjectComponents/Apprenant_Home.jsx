import { Avatar, Box, Center, Fab, FormControl, Heading, HStack, IconButton, Input, Menu, Modal, NativeBaseProvider, Pressable, Radio, StatusBar, Toast, useColorModeValue, VStack } from 'native-base';
import React from "react";
import { Tab, Text, TabView } from '@rneui/themed'; 
import { useState } from "react";
import { FlatList } from 'react-native';
import { Button, ScrollView, TouchableOpacity, View,StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";

import Card from './Card';
function SearchBar({ searchPhrase, setSearchPhrase,serach}) {
    return <View style={{width:"100%"}}>
        <NativeBaseProvider> 
         <VStack my="4" space={5} w="100%"  >
        
  
       
          
          <Input placeholder="Search People & Places"  onChange={ (e)=>{;serach(e.target.value)}} width="100%" borderRadius="9" py="3" px="1" style={{fontSize:14}}  InputLeftElement={<Icon m="4" ml="48" size={20} color="gray" name="search"  />} InputRightElement={<Icon m="2" mr="3" size={20} color="gray" name="mic" />} />
        </VStack>
        </NativeBaseProvider>
      
      </View>
  }
  /*<Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
                </Button.Group>*/ 
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

function Cardd({item,navigation,addItem2,handleDelete2,handlefavorite}){
    const [iconname,seticonname]=React.useState(item.favorite);

  return <View style={{width:"100%",}}>
    <Card  maxW="100%"  h="100%" title={item.title} image={item.image} text={item.text} video={item.video} favorite={item.favorite} navigation={navigation}  />
    <Pressable placement="top-right"   position="absolute"  top="1" right={0} px="5" py="1.5" onPress={()=>{if(iconname==="favorite-border"){seticonname("favorite"); item.favorite="favorite";handlefavorite(item.title,"favorite-border");addItem2(item.title,item.image,item.text,item.favorite,item.video)}else{seticonname("favorite-border"); item.favorite="favorite-border";handlefavorite(item.title,"favorite");handleDelete2(item.title);
  }}}>
    <Icon color="red" name={iconname}  />
    </Pressable>
</View>
}

export default  function ApprenantHome({navigation,route}) {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState([]);
    const [index, setIndex] = useState(0);
    const courses=[{title:"mobile developpement ",
                    image:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/Mobile-Application-Software.jpg",
                    text:"this is mobile course to learn mobile developpement ",
                    video:"https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRkxYq_5_t-m2LKw5HqpgbHU-ccU9AhWG6P2Q",
                    favorite:"favorite-border"},
                    {title:"Fultter course",
                    image:"https://uploads-ssl.webflow.com/5f841209f4e71b2d70034471/60bb4a2e143f632da3e56aea_Flutter%20app%20development%20(2).png",
                    text:"this is Fultter course to learn mobile developpement  with fullter",
                    video:"https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRkxYq_5_t-m2LKw5HqpgbHU-ccU9AhWG6P2Q",
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
                   /* const styles = {
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
                      };*/
 const [showModal, setShowModal] = useState(false);
 const [av,setav]=useState("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
    const [list, setList] = React.useState(courses);
const [slist, setsList] = React.useState(courses);
const [flist,setfList]=React.useState([]);
const [fslist,setfsList]=React.useState([]);
const [activetab ,setactivetab]=React.useState(0);
const [visible,setvisible]=useState(false);
const [inputValue1, setInputValue1] = React.useState("");
const [inputValue2, setInputValue2] = React.useState("");
const [inputValue3, setInputValue3] = React.useState("");
const addItem = (title,image,text,video) => {
    if (title === "" ||image==="" ||text===""||video==="") {
      Toast.show({
        title: "Please Enter the missing paramtre",
        status: "warning"
      });
      return;
    }
    if (title.length>10) {
      console.log("this is title is to title");
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
        favorite:"favorite-border",
      }];
    });
    setsList(prevList => {
        return [...prevList, {
          title: title,
          image:image,
          text:text,
          video:video,
          favorite:"favorite-border",
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
    console.log(list[0])
  }
  }
  const handlefavorite=(index,favoritename)=>{
   var a=-1;
    
      
      a =list.findIndex(function(item, i){
        return item.title === index
      });
      if(favoritename==="favorite-border")
     {  
        list[a].favorite="favorite";
     }
      else
      {  console.log("delete")
         list[a].favorite="favorite-border";

         console.log(list[a], list[a].favorite)

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
     
  const addItem2 = (title,image,text,favorite,video) => {
    console.log("dsdsdsds");
    if (title === "" ||image==="" ||text==="") {
      Toast.show({
        title: "Please Enter the missing paramtre",
        status: "warning"
      });
      return;
    }
    console.log(flist);
    console.log(fslist);
    if(flist.length===0 && fslist.length===0){
    setfList([{
      title: title,
      image:image,
      text:text,
      video:video,
      favorite:favorite,
    }]);
    setfsList([{
      title: title,
      image:image,
      text:text,
      video:video,
      favorite:favorite,
    }])}
    else{
    setfList(prevList => {
      return [...prevList, {
        title: title,
        image:image,
        text:text,
        video:video,
        favorite:favorite,
      }];
    });
    
    setfsList(prevList => {
        return [...prevList, {
          title: title,
          image:image,
          text:text,
          video:video,
          favorite:favorite,
        }];
      });
    }
     // console.log(list[0]);
      //console.log(slist[0]);
      console.log(flist);
    console.log(fslist);
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
      console.log(list[0])
    
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
        
  
       
          
          <Input placeholder="Search Course"   value={searchPhrase} onChangeText={(text)=>{ serach(text)}} width="100%" borderRadius="9" py="3" px="1" style={{fontSize:14}} InputLeftElement={<Icon m="4" ml="48" size={20} color="gray" name="search"  />} InputRightElement={<Icon m="2" mr="3" size={20} color="gray" name="mic" />} />
        </VStack>
       
      
      </View>

      
        
      </Center>
     
      <TouchableOpacity onPress={()=>{navigation.navigate("profile",{...route,av:av,setav:setav}  )}}>
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
         <Menu.Item onPress={()=>{navigation.navigate("profile")}}>Profile</Menu.Item>
         <Menu.Item>Settings</Menu.Item>
         <Menu.Item onPress={()=>{setShowModal(true)}}>Contect</Menu.Item>
         <Menu.Item onPress={()=>{navigation.navigate("Login")}} >Deconnexion</Menu.Item>
         
       </Menu>
       </Box>
          </HStack>
          <ModalA showModal={showModal} setShowModal={setShowModal} />
        
          <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor:'white',
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
        title="Favorite"
        titleStyle={{ fontSize:12 }}
        containerStyle={() => ({
            backgroundColor: "rgb(91, 33, 182)" ,
          })}
        icon={<Icon name='favorite'  color='white' />}
      />
    </Tab>
 
    <TabView value={index } onChange={setIndex} animationType="timing" style={{backgroundColor:'white',width:"100%"}} tabItemContainerStyle={{backgroundColor:'white',height:"100%"}}     >
      <TabView.Item style={{ backgroundColor:'white', width: '100%' }} >
      
        <NativeBaseProvider >
       
       <VStack   style={{width:"100%",height:"100%"}}>
       
       <Center w="100%">
      <Box   style={{width:"100%",height:"100%",backgroundColor:'White'}}>
        <VStack space={4}  style={{width:"100%",height:"100%"}}>
            
          
          
        <View style={styles.app}>
            <FlatList
             
             
             style={{flex:1,width:"100%",height:"100%"}}
             data={list}
               renderItem={({item,index}) => ( 
                <View style={styles.item}>
                
         <Cardd item={item}  navigation={navigation} addItem2={addItem2} handlefavorite={handlefavorite} handleDelete2={handleDelete2} />
               
                </View>
      )}
      keyExtractor={(item)=> item.title}
      numColumns={2}
      columnWrapperStyle={{}} />
      </View>
                
                
           
        
          
        </VStack>
        
      </Box>
    </Center>
       </VStack>
      
       </NativeBaseProvider>
    
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'white', width: '100%',height:"100%" }}>
        
      <NativeBaseProvider>
       
        <VStack style={{width:"100%",height:"100%"}}>
         <Box  style={{width:"100%",height:"100%"}} >
       
        <View style={styles.app}>
          
            <FlatList
           
             
             style={{width:"100%",height:"100%"}}
             data={flist}
               renderItem={({item,index}) => ( 
                <View style={styles.item}>
            <View style={{width:"100%",backgroundColor:"red"}}>
          <Card  maxW="100%" title={item.title} image={item.image} text={item.text} video={item.video} favorite={item.favorite} navigation={navigation}   />
</View>
       </View>
      )}
      keyExtractor={(item)=> item.title}
      numColumns={2}
      columnWrapperStyle={{}} />
                
                </View>
           
         
             
         
      
        </Box>
        </VStack>
       
        </NativeBaseProvider>
        
      </TabView.Item>
    </TabView>
    
  
        
          </VStack>
        
        </NativeBaseProvider>
      
       
        </View>
      
      </>
      
}


const styles = StyleSheet.create( {
    app: {
      flex: 2, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
     
    },
    item: {
      flex: 1,
      maxWidth: "100%", // 100% devided by the number of rows you want
      alignItems: "center",
      backgroundColor:'red',
      // my visual styles; not important for the grid
      padding: 10,
      backgroundColor: "rgba(249, 180, 45, 0.25)",
      borderWidth: 1.5,
      borderColor: "#fff"
    }
  })