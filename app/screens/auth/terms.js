import React, {Component} from 'react'
import {Linking, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from './../../config/colors'
import Header from '../../components/header';


export default class TermsView extends Component {
    constructor(props) {
        super(props);
        const params = this.props.navigation ? this.props.navigation.state.params : {params: {}};
        this.state = {
            loginInfo: params.loginInfo,
            signupInfo: params.signupInfo,
            termsSelected1: false,
            termsSelected2: false,
            termsSelected3: false,
        };
    }

    allTermsSelected() {
        return this.state.termsSelected1 && this.state.termsSelected2 && this.state.termsSelected3;
    }

    render() {
        return (
            <View style={styles.container}>

                <Header
                    navigation={this.props.navigation}
                    back
                    title="Terms and Conditions"
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
                            termsSelected1: !this.state.termsSelected1,
                        })}
                        name="md-checkbox"
                        size={20}
                        color={this.state.termsSelected1 ? Colors.green : Colors.lightgray}
                        style={styles.termsSelectButton}
                    />
                    <Icon
                        onPress={() => this.setState({
                            termsSelected2: !this.state.termsSelected2,
                        })}
                        name="md-checkbox"
                        size={20}
                        color={this.state.termsSelected2 ? Colors.green : Colors.lightgray}
                        style={styles.termsSelectButton}
                    />
                    <Icon
                        onPress={() => this.setState({
                            termsSelected3: !this.state.termsSelected3,
                        })}
                        name="md-checkbox"
                        size={20}
                        color={this.state.termsSelected3 ? Colors.green : Colors.lightgray}
                        style={styles.termsSelectButton}
                    />
                    <Text style={styles.agreeText}>
                        I agree to the
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://rehive.com/terms')}>
                        <Text style={styles.termsText}>
                            Terms of use
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight
                        style={this.allTermsSelected() ? styles.button : styles.buttonDisabled}
                        disabled={!this.allTermsSelected()}
                        onPress={() => {
                            this.props.navigation.navigate("AuthVerifyMobile", {
                                loginInfo: this.state.loginInfo,
                                signupInfo: this.state.signupInfo,
                            })
                        }}>
                        <Text style={styles.buttonText}>
                            Next
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};

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
