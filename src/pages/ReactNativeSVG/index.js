import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IllustraionMyApp from '../../assets/image/undraw_my_app.svg';

const ReactNativeSVG = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textAlign}>
                Materi menggunakan File SVG didalam React Native
                </Text>
                <IllustraionMyApp width={244} height={125} />
        </View>
    );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
});
