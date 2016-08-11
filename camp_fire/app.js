var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// var pounds = ['']

var pikePlace = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  customerHour: [],
  tempRandom: [],
  randomNum : function(minCustomer, maxCustomer) {
    for ( var i = 0; i < hours.length; i++){
      this.customerHour.push( Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer));
    }
  },
  getRandomCus : function() {
    for ( var i = 0; i < hours.length; i++){
      this.tempRandom[i] = this.randomNum(this.minCustomer, this.maxCustomer);
      return this.tempRandom;
    }
  },
  calcCupPerCus : function() {
    for ( var i = 0; i < hours.length; i++){
      this.cupsPerCus = (this.tempRandom[i] * this.averageCup);
      return this.cupsPerCus;
    }
  },
  calcPoundPerCus : function() {
    var poundsPerCus = (tempRandom[i] * this.averagePound) + (cupsPerCus / 16);
    return poundsPerCus;
  },
};
pikePlace.randomNum(pikePlace.minCustomer, pikePlace.maxCustomer);
pikePlace.getRandomCus();
pikePlace.calcCupPerCus();
