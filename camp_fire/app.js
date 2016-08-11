var hours = ['6am,7am,8am,9am,10am,11am,12pm,1pm,2pm,3pm,4pm,5pm,6pm,7pm,8pm']
// var pounds = ['']

var pikePlace = {
  minCustomer: 14,
  maxCustomer: 35,
  averageCup: 1.2,
  averagePound: 0.34,
  customerHour:[],
  randomNum : function(minCustomer, maxCustomer) {
    this.customerHour.push( Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer));
  },
  // getRandomCus : function() {
  //   var tempRandom = this.randomNum(this.minCustomer, this.maxCustomer);
  //   return tempRandom;
  // },
  // calcCupPerCus : function() {
  //   var cupsPerCus = (tempRandom * this.averageCup);
  //   return cupsPerCus;
  // },
  // calcPoundPerCus : function() {
  //   var poundsPerCus = (tempRandom * this.averagePound) + (cupsPerCus / 16);
  //   return poundsPerCus;
  // },
};
pikePlace.randomNum(pikePlace.minCustomer, pikePlace.maxCustomer);
// pikePlace.getRandomCus();
// pikePlace.calcCupPerCus();
