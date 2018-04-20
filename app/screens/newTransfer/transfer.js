import React, {Component} from 'react'
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    StyleSheet,
    TouchableHighlight,
    Text,
    Alert,
    TouchableWithoutFeedback
} from 'react-native'
import AccountService from './../../services/accountService'
import ConversionService from './../../services/conversionService'
import Spinner from 'react-native-loading-spinner-overlay'
import ResetNavigation from './../../util/resetNavigation'
import TextInput from './../../components/transferCard'
import TextInputMultiLine from './../../components/textInputMultiline'
import Colors from './../../config/colors'
import Header from './../../components/header'
import Big from 'big.js'

export default class AmountEntry extends Component {
    static navigationOptions = {
        title: 'Transfer',
    }

    constructor(props) {
        super(props)
        this.state = {
            balance: 0,
            amount: '',
            amountUSD: '',
            rate: 0,
            disabled: false,
            loading: true,
            loadingMessage: "Fetching rates",
            fromCurrency: "NGN",
            USD_currency: null,
            editable: true,
            id: null,
        }
    }

    async componentDidMount() {
        var reference = await AsyncStorage.getItem("account_reference");
        let responseJson = await AccountService.getAllAccountCurrencies(JSON.parse(reference))
        let NGN_currencies = responseJson.data.results.filter((currency) => {
            return currency.currency.code === this.state.fromCurrency
        })

        if (NGN_currencies.length === 0) {
            Alert.alert('Error',
                "Currency '" + this.state.fromCurrency + "' is not available in your active account.",
                [{
                    text: 'OK', onPress: () => {
                        ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")
                    }
                }])
        }
        else {
            let NGN_currency = NGN_currencies[0]
            this.setState({
                balance: NGN_currency.available_balance / 100
            })
        }

        var res = await ConversionService.getRates(this.state.fromCurrency)
        console.log(res)
        var response = res.data.results;
        for (var i = 0; i < response.length; i++) {
            if (response[i].to_currency.code === "USD") {
                this.setState({
                    USD_currency: response[i]
                })
                break;
            }
        }

        if (!this.state.USD_currency) {
            Alert.alert('Error',
                "No rates available.",
                [{
                    text: 'OK', onPress: () => {
                        ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")
                    }
                }])
        }
        else {
            //console.log(this.state.USD_currency)
            if (this.state.USD_currency.fixed_rate == 0) {
                this.setState({
                    rate: this.state.USD_currency.rate
                })
            }
            else {
                this.setState({
                    rate: this.state.USD_currency.fixed_rate
                })
            }
        }
        this.setState({
            loading: false,
        })
    }

    send = async () => {
        if (this.state.amount <= 0) {
            Alert.alert(
                'Invalid',
                'Enter valid amount',
                [[{text: 'OK'}]]
            )
        }
        else {
            this.setState({
                loading: true,
                loadingMessage: 'Saving quote...',
            })
            let amountUSD = this.state.amount * this.state.rate
            amountUSD = amountUSD.toFixed(2) * 100

            let responseJson = await ConversionService.saveQuotes(parseInt(amountUSD), this.state.fromCurrency, 'USD')
            //console.log(responseJson)
            if (responseJson.status === "success") {
                this.setState({
                    loading: false,
                    editable: false,
                    quote: responseJson.data.id,
                })
                Alert.alert('Success',
                    "Quote saved successfully",
                    [{
                        text: 'OK'
                    }])
            }
            else {
                Alert.alert('Error',
                    responseJson.message,
                    [{
                        text: 'OK', onPress: () => {
                            this.setState({
                                loading: false,
                            })
                        }
                    }])
            }
        }
    }

    confirm = async () => {
        this.setState({
            loading: true,
            loadingMessage: 'Making conversion...',
        })
        let data = await AsyncStorage.getItem("user")
        let user = JSON.parse(data)
        let responseJson = await ConversionService.conversion(this.state.quote, user.email)
        if (responseJson.status === "success") {
            this.setState({
                loading: false
            })
            Alert.alert('Success',
                "Conversion successful",
                [{
                    text: 'OK', onPress: () => {
                        ResetNavigation.dispatchToSingleRoute(this.props.navigation, "Home")
                    }
                }])
        }
        else {
            Alert.alert('Error',
                responseJson.message,
                [{
                    text: 'OK', onPress: () => {
                        this.setState({
                            loading: false,
                        })
                    }
                }])
        }
    }

    amountChanged = (text) => {
        this.setState({amount: text})
        let amount = parseFloat(text)
        if (isNaN(amount)) {
            this.setState({amountUSD: 0.00})
        }
        else {
            let amountUSD = amount * this.state.rate;
            this.setState({amountUSD: amountUSD.toFixed(2)})
            if (amount > this.state.balance) {
                this.setState({
                    disabled: true
                })
            } else {
                this.setState({
                    disabled: false
                })
            }
        }
    }
    amountUSDChanged = (text) => {
        this.setState({amountUSD: text})
        let amountUSD = parseFloat(text)
        if (isNaN(amountUSD)) {
            this.setState({amount: 0.00})
        }
        else {
            var amount = amountUSD / this.state.rate
            this.setState({amount: amount.toFixed(2)})
            if (amount > this.state.balance) {
                this.setState({
                    disabled: true
                })
            } else {
                this.setState({
                    disabled: false
                })
            }
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                    navigation={this.props.navigation}
                    drawer
                    title="Transfer"
                />
                <Spinner
                    visible={this.state.loading}
                    textContent={this.state.loadingMessage}
                    textStyle={{color: '#FFF'}}
                />
                <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                    <ScrollView keyboardDismissMode={'interactive'}>
                        <TextInput
                            title="You spend exactly"
                            placeholder="Enter amount here"
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="white"
                            value={this.state.amount + ''}
                            onChangeText={this.amountChanged}
                            editable={this.state.editable}
                            currencyText="ZAR"
                        />
                        <TextInput
                            title="You get exactly"
                            placeholder="Enter amount here"
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="white"
                            value={this.state.amountUSD + ''}
                            editable={this.state.editable}
                            onChangeText={this.amountUSDChanged}
                            currencyText="USD"
                        />
                    </ScrollView>
                    {this.state.disabled &&
                    <TouchableWithoutFeedback>
                        <View style={[styles.submit, {backgroundColor: Colors.lightgray}]}>
                            <Text style={{color: 'white', fontSize: 20}}>
                                Amount exceeds balance
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    }
                    {this.state.editable && !this.state.disabled &&
                    <TouchableHighlight
                        style={styles.submit}
                        onPress={this.send}>

                        <Text style={{color: 'white', fontSize: 20}}>
                            Buy
                        </Text>
                    </TouchableHighlight>
                    }
                    {!this.state.editable && !this.state.disabled &&
                    <TouchableHighlight
                        style={styles.submit}
                        onPress={this.confirm}>

                        <Text style={{color: 'white', fontSize: 20}}>
                            Confirm
                        </Text>
                    </TouchableHighlight>
                    }
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10
    },
    submit: {
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 25,
        height: 50,
        backgroundColor: Colors.lightblue,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
