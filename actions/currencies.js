//TODO: Add Action for Currencies

const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';
const SWAP_CURRENCY = 'SWAP_CURRENCY';
const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const swap_Currency = () => ({
    type:SWAP_CURRENCY,
})

export const changeCurrencyAmount = (amount) => ({
    type:CHANGE_CURRENCY_AMOUNT,
    amount,
})