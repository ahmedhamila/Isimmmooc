import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';

export default function PlayerV(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View  style={{backgroundColor:"white",flex:1,width:"100%" ,height:"100%",alignItems:"center",justifyContent:"flex-end" ,position:"absolute"}}>
      <Video
        ref={video}
        source={{
          uri: props.source,
        }}
        useNativeControls
        resizeMode="cover"
        isLooping 
        fullscreen={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        style={{width:"100%" ,height:"100%",position:"relative",margin:0}}
        videoStyle={{width:"100%",height:"100%"}}
      />
      
    </View>
  );
}
/*<View  style={{alignItems:"center" ,position:"absolute"} }  >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>*/ 