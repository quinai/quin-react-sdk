class ECommerce {
    constructor(quin) {
        this.quin = quin;
    }

    static createPageViewHomeEvent(platform) { 
        return { type: 'pageViewHome', platform }; 
    }

    static createPageViewListingEvent(platform, label) { 
        return { type: 'pageViewListing', platform, label }; 
    }

    static createPageViewListingWithCategoryIdEvent(platform, label, categoryId) { 
        return { type: 'pageViewListingWithCategoryId', platform, label, categoryId }; 
    }

    static createAddToCartListingEvent(platform, item, quantity) { 
        return { type: 'addToCartListing', platform, item, quantity }; 
    }

    static createFilterEvent(platform) { 
        return { type: 'filter', platform }; 
    }

    static createPageViewDetailEvent(platform, item) { 
        return { type: 'pageViewDetail', platform, item }; 
    }

    static createAddToCartDetailEvent(platform, item, quantity) { 
        return { type: 'addToCartDetail', platform, item, quantity }; 
    }

    static createAddToFavouritesEvent(platform, item) { 
        return { type: 'addToFavourites', platform, item }; 
    }

    static createProductInfoEvent(platform, item) { 
        return { type: 'productInfo', platform, item }; 
    }

    static createCommentsEvent(platform) { 
        return { type: 'comments', platform }; 
    }

    static createQuantityDetailEvent(platform, item, quantity) { 
        return { type: 'quantityDetail', platform, item, quantity }; 
    }

    static createQuantityCartEvent(platform, item, quantity) { 
        return { type: 'quantityCart', platform, item, quantity }; 
    }

    static createGoToCartEvent(platform) { 
        return { type: 'goToCart', platform }; 
    }

    static createContinueShoppingEvent(platform) { 
        return { type: 'continueShopping', platform }; 
    }

    static createRemoveFromCartEvent(platform, item, quantity) { 
        return { type: 'removeFromCart', platform, item, quantity }; 
    }

    static createEmptyCartEvent(platform) { 
        return { type: 'emptyCart', platform }; 
    }

    static createCheckoutEvent(platform) { 
        return { type: 'checkout', platform }; 
    }

    static createLoginEvent(platform) { 
        return { type: 'login', platform }; 
    }

    static createDiscountCodeEvent(platform, discountCode) { 
        return { type: 'discountCode', platform, discountCode }; 
    }

    static createDeliveryFeeEvent(platform) { 
        return { type: 'deliveryFee', platform }; 
    }

    static createAdressEvent(platform) { 
        return { type: 'address', platform }; 
    }

    static createPaymentTypeEvent(platform) { 
        return { type: 'paymentType', platform }; 
    }

    static createPurchaseCompletedEvent(platform, totalBasketSize) { 
        return { type: 'purchaseCompleted', platform, totalBasketSize }; 
    }

    static createAddToCartServiceEvent(platform, item, quantity) { 
        return { type: 'addToCartService', platform, item, quantity }; 
    }

    sendTestEvent(platform) {
        this.quin.track(ECommerce.createPageViewHomeEvent(platform), Quin.PATH_TEST_EVENT);
    }

    sendPageViewHomeEvent(platform) {
        this.quin.track(ECommerce.createPageViewHomeEvent(platform));
    }

    sendPageViewListingEvent(platform, label) {
        this.quin.track(ECommerce.createPageViewListingEvent(platform, label));
    }

    sendPageViewListingWithCategoryIdEvent(platform, label, categoryId) {
        this.quin.track(ECommerce.createPageViewListingWithCategoryIdEvent(platform, label, categoryId));
    }

    sendAddToCartListingEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createAddToCartListingEvent(platform, item, quantity));
    }

    sendFilterEvent(platform) {
        this.quin.track(ECommerce.createFilterEvent(platform));
    }

    sendPageViewDetailEvent(platform, item) {
        this.quin.track(ECommerce.createPageViewDetailEvent(platform, item));
    }

    sendAddToCartDetailEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createAddToCartDetailEvent(platform, item, quantity));
    }

    sendAddToFavouritesEvent(platform, item) {
        this.quin.track(ECommerce.createAddToFavouritesEvent(platform, item));
    }

    sendProductInfoEvent(platform, item) {
        this.quin.track(ECommerce.createProductInfoEvent(platform, item));
    }

    sendCommentsEvent(platform) {
        this.quin.track(ECommerce.createCommentsEvent(platform));
    }

    sendQuantityDetailEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createQuantityDetailEvent(platform, item, quantity));
    }

    sendQuantityCartEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createQuantityCartEvent(platform, item, quantity));
    }

    sendGoToCartEvent(platform) {
        this.quin.track(ECommerce.createGoToCartEvent(platform));
    }

    sendContinueShoppingEvent(platform) {
        this.quin.track(ECommerce.createContinueShoppingEvent(platform));
    }

    sendRemoveFromCartEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createRemoveFromCartEvent(platform, item, quantity));
    }

    sendEmptyCartEvent(platform) {
        this.quin.track(ECommerce.createEmptyCartEvent(platform));
    }

    sendCheckoutEvent(platform) {
        this.quin.track(ECommerce.createCheckoutEvent(platform));
    }

    sendLoginEvent(platform) {
        this.quin.track(ECommerce.createLoginEvent(platform));
    }

    sendDiscountCodeEvent(platform, discountCode) {
        this.quin.track(ECommerce.createDiscountCodeEvent(platform, discountCode));
    }

    sendDeliveryFeeEvent(platform) {
        this.quin.track(ECommerce.createDeliveryFeeEvent(platform));
    }

    sendAdressEvent(platform) {
        this.quin.track(ECommerce.createAdressEvent(platform));
    }

    sendPaymentTypeEvent(platform) {
        this.quin.track(ECommerce.createPaymentTypeEvent(platform));
    }

    sendPurchaseCompletedEvent(platform, totalBasketSize) {
        this.quin.track(ECommerce.createPurchaseCompletedEvent(platform, totalBasketSize));
    }

    sendAddToCartServiceEvent(platform, item, quantity) {
        this.quin.track(ECommerce.createAddToCartServiceEvent(platform, item, quantity));
    }
}


class Quin {
    static PATH_SESSION = 'session';
    static PATH_EVENT = 'event';
    static PATH_TEST_EVENT = 'test-event';

    static instance = new Quin();

    constructor() {
        if (Quin.instance) {
            return Quin.instance;
        }
        Quin.instance = this;
        this.eCommerce = new ECommerce(this);
    }

    static getInstance() {
        return Quin.instance;
    }

    setConfig(apiKey, domain, enableLogging = false) {
        Http.setConfig(apiKey, domain);
        Logger.setConfig(enableLogging);
    }

    setUser(googleClientId) {
        this.user(googleClientId);
    }

    track(event, path = Quin.PATH_EVENT) {
        const user = this.user();
        if (!user) {
            Logger.log('quin track: user is nil');
            return false;
        }

        const updatedEvent = {
            ...event,
            userId: user.id,
            token: user.token,
            sessionId: user.sessionId,
            googleClientId: user.googleClientId
        };

        const response = Http.getInstance().post(path, updatedEvent);
        if (response && response.content) {
            this.saveUser(response);
            return true;
        }
        return false;
    }

    user(googleClientId) {
        let user = UserStore.getInstance().load();

        if (!user) {
            const response = Http.getInstance().post(Quin.PATH_SESSION, null);
            if (response && response.content) {
                this.saveUser(response, googleClientId);
                user = UserStore.getInstance().load();
            }
        }

        return user;
    }

    saveUser(response, googleClientId) {
        if (!response?.content?.userId) {
            Logger.log('quin saveUser: response user is nil');
            return false;
        }

        const user = createUser(
            response.content.userId,
            response.content.token,
            response.content.sessionId || '',
            googleClientId || ''
        );

        return UserStore.getInstance().save(user);
    }
}

export { Quin, ECommerce };