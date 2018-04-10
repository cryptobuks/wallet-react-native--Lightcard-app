import React, {Component} from 'react'
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements';
import Colors from './../../config/colors'
import Header from '../../components/header';


//TODO: Pretty much everything

export default class TermsView extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header
                    navigation={this.props.navigation}
                    back
                    title="Login"
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

                <View style={styles.termsAndCondition}>
                    <Icon
                        onPress={() => this.setState({
                            terms_and_conditions: !this.state.terms_and_conditions,
                        })}
                        name="md-checkbox"
                        size={30}
                        color={this.state.terms_and_conditions ? Colors.green : Colors.lightgray}
                    />
                    <Text style={styles.agreeText}>
                        I agree to the
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://rehive.com/terms-of-use')}>
                        <Text style={styles.termsText}>
                            terms of use
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
