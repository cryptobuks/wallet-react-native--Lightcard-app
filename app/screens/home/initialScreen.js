import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image
} from 'react-native'
import Swiper from 'react-native-swiper';
import { Font } from 'expo';
import Colors from './../../config/colors';
import Header from '../../components/header';

export default class InitialScreen extends Component {
    constructor(props){
        super(props)
    }

    async componentDidMount() {
        try {
            const token = await AsyncStorage.getItem('token')
            if (token != null) {
                ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")
            }
            return token
        } catch (error) {
        }
      }
    render() {
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('./../../../assets/icons/app.png')}
                            resizeMode="contain"
                            style={styles.image}/>
                        <Text style={styles.mainSlider}>Lightcard</Text>
                        <Text style={styles.subSlider}>Money without borders</Text>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('./../../../assets/icons/light-02.png')}
                                resizeMode="contain"
                                style={styles.image}/>
                            <Text style={styles.titleSlider}>Get the best exchange rates</Text>
                            <Text style={styles.textSlider}>Banks charge higher exchange rates and commission, we don't.
                                Get live exchange rats in the app and have more money to spend while you
                                travel.</Text>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('./../../../assets/icons/light-03.png')}
                                resizeMode="contain"
                                style={styles.image}/>
                            <Text style={styles.titleSlider}>Shop till you drop</Text>
                            <Text style={styles.textSlider}>Swipe your Lightcard in any country, or shop online at your
                                favourite international stores. There are never hidden cost or unexpected fees.</Text>
                        </View>

                    </View>
                    <View style={styles.slide}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('./../../../assets/icons/light-04.png')}
                                resizeMode="contain"
                                style={styles.image}/>
                            <Text style={styles.titleSlider}>Instant personal service</Text>
                            <Text style={styles.textSlider}>With Lightcard, you're always one message away from immediate
                                help. Message us 24/7 from anywhere in the world if you run into problems.</Text>
                        </View>
                    </View>
                </Swiper>

                <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>
                            Log in
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.button, {marginLeft: 25}]}
                        onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={styles.buttonText}>
                            Sign up
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        By tapping Log in or Sign up, I agree to Terms of Service and Privacy Policy
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
    mainSlider: {
        color: Colors.lightblue,
        paddingTop: 50,
        fontSize: 35,
        fontWeight: 'bold',
    },
    subSlider: {
        padding: 10,
        paddingHorizontal: 30,
        textAlign: 'center',
        fontSize: 20,
        color: Colors.black,
    },
    titleSlider: {
        color: Colors.lightblue,
        paddingTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
    },
    textSlider: {
        padding: 10,
        paddingHorizontal: 30,
        textAlign: 'center',
        fontSize: 14,
        color: Colors.black,
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        color: 'white'
    },
    textContainer: {
        backgroundColor: Colors.lightgray,
        paddingHorizontal: 25,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        color: Colors.lightblue
    }
})