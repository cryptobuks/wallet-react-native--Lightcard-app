import React, {Component} from 'react'
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import Colors from './../../config/colors'
import Header from '../../components/header';

// TODO: Replace with actual KYC screen

export default class KnowYourConsumer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    back
                    title="KYC"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, te mel erat definiebas temporibus, et vis nisl urbanitas, cum etiam
                        audiam explicari ut. Et omittantur accommodare consequuntur has, usu nostro epicuri ei, vide
                        tollit graeco cum ea. Eam duis reque ridens ea. Solum postulant ut duo, cibo fastidii assentior
                        at est, ne scaevola dissentiet instructior qui. Cibo everti ea duo, at has nisl habemus
                        suavitate. Augue quaeque eos te, qui te liber hendrerit.

                        Pro noluisse adolescens no. Saepe quando ridens ius eu. Vim mundi delectus in, doctus ceteros et
                        quo. Te volumus luptatum cotidieque his.
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate("Deposit")
                        }}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    buttonDisabled: {
        backgroundColor: Colors.lightgray,
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
        flex: 1,
        height: '100%',
        padding: 25,
        backgroundColor: Colors.lightgray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: Colors.lightblue,
    },
    termsAndCondition: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    termsText: {
        color: Colors.lightblue,
        fontSize: 16,
    },
    termsSelectButton: {
        padding: 5,
    },
});
