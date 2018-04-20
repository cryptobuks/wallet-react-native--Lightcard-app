import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Colors from './../config/colors'
import Icon from "react-native-vector-icons/Ionicons";

export default class TransferCard extends Component {
    constructor() {
        super();
        this.state = {
            textColor: Colors.black,
            borderColor: Colors.lightgray
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.inputContainer, { borderBottomColor: this.state.borderColor }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.text, { color: this.state.textColor }]}>
                            {this.props.title}
                        </Text>
                    </View>
                    <TextInput
                        onFocus={() => this.setState({
                            textColor: Colors.lightblue,
                            borderColor: Colors.lightblue
                        })}
                        onBlur={() => this.setState({
                            textColor: Colors.black,
                            borderColor: Colors.lightgray
                        })}
                        {...this.props}
                        ref={this.props.reference}
                        underlineColorAndroid="white"
                        style={[styles.input, { fontSize: this.props.fontSize ? this.props.fontSize : 22 }]}
                    />
                </View>
                <View style={styles.currencyContainer}>
                    {this.props.currencyText == 'ZAR' ? <View>
                        <Image
                            source={require('./../../assets/icons/african_flag.png')}
                            style={{ height: 40, width: 40, borderRadius: 20 }}
                        />
                    </View> :
                        <View>
                            <Image
                                source={require('./../../assets/icons/american_flag.png')}
                                style={{ height: 40, width: 40, borderRadius: 20 }}
                            />
                        </View>}
                    <Text>{this.props.currencyText}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        paddingLeft: 0,
        paddingBottom: 10,
        paddingTop: 15,
        color: Colors.black,
        fontWeight: 'normal',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    inputContainer: {
        flex: 5,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 10,
        borderBottomWidth: 1,
    },
    errorText: {
        paddingTop: 5,
        paddingBottom: 10,
        color: Colors.red,
        paddingLeft: 5,
    },
    container: {
        flexDirection: 'row',
    },
    currencyContainer: {
        flex: 2,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
