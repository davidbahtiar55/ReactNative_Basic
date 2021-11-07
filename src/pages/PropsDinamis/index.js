import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const Story = (props) => {
    return (
        <View style={{alignItems:'center', marginRight: 20}}>
            <Image
              source={{
                uri: props.gambar, 
              }} 
              style={{width: 70, height: 70, borderRadius: 70 / 2}}
            />
            <Text style={{maxWidth: 50, textAlign:'center'}}>{props.judul}</Text>
          </View>
        
    )
}

 const PropsDinamis = () =>{
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}> 
            <Story 
              judul="Youtube Chanel" 
              gambar="https://placeimg.com/100/100/tech"
              />
            <Story 
              judul="Kelas Online"
              gambar="https://placeimg.com/100/100/arch"
              />
            <Story
              judul="Tutorial"
              gambar="https://placeimg.com/100/100/nature"
              />
            <Story 
              judul="Tips dan Trik" 
              gambar="https://placeimg.com/100/100/nature/grayscale"
              />
            <Story 
              judul="Diskusi" 
              gambar="https://placeimg.com/100/100/people"
              />
            <Story 
              judul="Vlog" 
              gambar="https://placeimg.com/100/100/animals"
              />
            </View>
            </ScrollView>         
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
