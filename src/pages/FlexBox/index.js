import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber : 400,
//     }
//   }

//   componentDidMount(){
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 800,
//       })
//     }, 2000);
//   }

//   componentWillUnmount() {
//     console.log('==> component wil unmount');
//   }

//   componentDidUpdate(){
//     console.log('==> component did update');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#C8D6E5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#EE5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#FECA57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1DD1A1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5F27CD', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image 
//             source={{
//               uri:
//                'https://placeimg.com/100/100/tech',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//             David Bahtiar
//           </Text>
//          <Text>{this.state.subscriber} ribu subscriber</Text>
//       </View>
//       </View>
//         </View>
//       );
//     }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
  }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update')
  //   setTimeout(() => {
  //       setSubscriber(400)
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#C8D6E5',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{backgroundColor: '#EE5253', width: 50, height: 50}} />
      <View style={{backgroundColor: '#FECA57', width: 50, height: 50}} />
      <View style={{backgroundColor: '#1DD1A1', width: 50, height: 50}} />
      <View style={{backgroundColor: '#5F27CD', width: 50, height: 50}} />
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text>Beranda</Text>
      <Text>Video</Text>
      <Text>Playlist</Text>
      <Text>Komunitas</Text>
      <Text>Channel</Text>
      <Text>Tentang</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
      <Image 
        source={{
          uri:
           'https://placeimg.com/100/100/tech',
        }}
        style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
      />
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        David Bahtiar
      </Text>
     <Text>{subscriber} ribu subscriber</Text>
  </View>
  </View>
    </View>
  )
}

export default FlexBox;