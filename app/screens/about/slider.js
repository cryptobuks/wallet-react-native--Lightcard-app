import React, {Component} from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import Swiper from 'react-native-swiper';
import Colors from './../../config/colors'
import Header from '../../components/header';

export default class SliderScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <Header
                    navigation={this.props.navigation}
                    back
                    title="Login"
                />
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.textSlider}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.textSlider}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.textSlider}>And simple</Text>
                    </View>
                </Swiper>
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={styles.buttonText}>
                            Sign up
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        By tapping Sign in or Sign up, I agree to Terms of Service and Privacy Policy
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    textSlider: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: 250,
        height: 150,
    },
    buttonsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'center',
        paddingVertical: 25,
    },
    button: {
        backgroundColor: Colors.lightblue,
        height: 50,
        borderRadius: 25,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    textContainer: {
        backgroundColor: Colors.lightgray,
        paddingHorizontal: 25,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: Colors.lightblue,
    },
});
