export class Item {
    _customAttributes = new Map();
  
    constructor(data = {}) { 
      this.id = data.id;
      this.name = data.name;
      this.category = data.category;
      this.categoryId = data.categoryId;
      this.price = Number(data.price);
      this.currency = data.currency;
    }
  
    withCustomAttribute(key, value) {
      const newItem = new Item(this);
      newItem._customAttributes = new Map(this._customAttributes);
      newItem._customAttributes.set(key, value);
      return newItem;
    }
  
    toJson() {
      return ({   // Json'a çeviriyoruz. Json'u str'ye çevirmiyoruz.
        id: this.id,
        name: this.name,
        category: this.category,
        categoryId: this.categoryId,
        price: this.price,
        currency: this.currency,
        customAttributes: Object.fromEntries(this._customAttributes)
      });
    }
  }