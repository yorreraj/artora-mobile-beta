const numeral = require('numeral');

export const getCurrencySymbol = (currency) => {
    switch(currency){
        case "ARIARY": return "Ar"
        case "EURO": return "€"
        case "DOLLAR": return "$"
    }
}

export const showPrice = (amount, currency) => {
    return `${numeral(amount).format('0,0')} ${getCurrencySymbol(currency)}`
}