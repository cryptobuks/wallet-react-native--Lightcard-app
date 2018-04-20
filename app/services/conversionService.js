import BaseService from './baseServiceExchange'

var AccountService = {
    getRates: (fromCurrency) => {
        return BaseService.get('user/rates?fromCurrency='+fromCurrency)
    },

    saveQuotes: (to_amount, from_currency, to_currency) => {
        var data = {
            to_amount,
            from_currency,
            to_currency
        }
        return BaseService.post('user/quotes/', data)
    },

    conversion: (quote, recipient) => {
        var data = {
            quote,
            recipient
        }
        return BaseService.post('user/conversions/', data)
    }
}

export default AccountService
