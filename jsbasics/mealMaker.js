let menu = {
    _meal : '',
    _price : 0,
    
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        return this._meal = mealToCheck;
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for RM${this._price}!`
      } else {
        return 'Error! Meal or price was not set correctly!'
      }
    }
  };
  
  menu.meal = 'Pizza';
  menu.price = 10;
  console.log(menu.todaysSpecial);
  
  