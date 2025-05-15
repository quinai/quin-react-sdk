import {item} from './item';
import {user} from './user';

const Event = {
    userId: string,
    token: string,
    sessionId: string,
    googleClientId: string,
    platform: string,
    category: string,
    action: string,
    label: string,
    url: string,
    item: null,
    customAttributes: {}
}

const EventCategory = {
    HOME: 'home',
    LISTING: 'listing',
    DETAIL: 'cart',
    CHECKOUT: 'checkout',
    SERVICE: 'service',
    INTERACTION: 'interaction',
    REACTION: 'reaction'
};

const EventLabel = {
    ADD_TO_BASKET : 'addtobasket',
    ADD_TO_FAVOURITTES: 'addtofavourittes',
    PRODUCT_INFO: 'productinfo',
    DELIVERY_INFO: 'deliveryinfo',
    COMMENTS: 'comments',
    QUANTITY: 'quantity',
    GO_TO_CART: 'gotocart',
    CONTINUE_SHOPPING: 'continueshopping',
    REMOVE_FROM_CART: 'removefromcart',
    EMPTY_CART: 'empty_cart',
    CHECKOUT: 'chechkout',
    LOGIN: 'login',
    DISCOUNT_CODE: 'discountcode',
    DELIVERY_FEE: 'deliveryfee',
    ADDRESS: 'adress', // d'yi kontrol et!
    PAYMENT_TYPE: 'paymenttype',
    PURCHASE_COMPLETED: 'purchasecompleted'
};

const EventAction = {
    PAGE_VIEW: 'pageview',
    CLICK: 'click'
};

const createEvent = (category, action, label = '', url = '', item) =>{
    return{
        userId: '',
        token: '',
        sessionId: '',
        googleClientId: '',
        platform: '',
        category,
        action,
        label,
        url,
        item,
        customAttributes: {}
    }
}

const setUser = (event, user) => {
    return{
        ...event,
        userId: user.id,
        token: user.token,
        sessionId: user.sessionId,
        googleClientId: user.googleClientId
    };
};

const withCustomAttribute = (event, key, value) => {
    return {
        ...event,
        customAttributes:{
            ...event.customAttributes,
            [key]: value
        }
    };
};

module.exports = {
    EventCategory,
    EventLabel,
    EventAction,
    createEvent,
    setUser,
    withCustomAttribute
};