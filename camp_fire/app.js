var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pikePlaceMarket = {
  name: 'Pike Place Market',
  minCustomer : 14,
  maxCustomer : 35,
  averageCups : 1.2,
  averagePound : 0.34,
  customerHour : [],  //Number of customers per hour
  cupsHr:[],  // Cups sold per hour
  pndHR:[],  // Pounds to-go sold per hour
  pndPerCup: [], // Pounds of beans used for each cup per hour
  netPnd: [],   // Pounds of beans used for both per hour
  numEmp: [],  //Number of employees needed per hour
  totalCups: 0,  //Total cups sold for the day
  totalPnd: 0,  //Total pounds to-go sold for the entire day
  totalNetPnd: 0,  //Total pounds of beans sold for the entire day
  totalCust: 0, //Total number of customers for the entire day

  randomCustHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour [i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer ) + this.minCustomer );
    }
  },
  cupsHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.cupsHr[i] = parseFloat((this.customerHour [i] * this.averageCups ).toFixed(2));
    }
  },
  totalCupsCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCups += this.cupsHr[i];
      this.totalCups = parseFloat(this.totalCups.toFixed(2));
    }
  },
  pndHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndHR [i] = parseFloat((this.customerHour [i] * this.averagePound ).toFixed(2));
    }
  },
  totalPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalPnd += this.pndHR [i];
      this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
    }
  },
  pndPerCup: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndPerCup [i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    }
  },
  netPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.netPnd[i] = parseFloat((this.pndHR [i] + this.pndPerCup [i]).toFixed(2));
    }
  },
  totalNetPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalNetPnd += this.netPnd[i];
      this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
    }
  },
  totalCustCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCust += this.customerHour [i];
    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      if ((this.customerHour [i] / 30) >= 1) {
        this.numEmp[i] = 2;
      } else {
        this.numEmp[i] = 1;
      }
    }
  }
};
// Calling the methods for Pike Place Market object
pikePlaceMarket.randomCustHr();
pikePlaceMarket.cupsHr();
pikePlaceMarket.totalCupsCalc();
pikePlaceMarket.pndHr();
pikePlaceMarket.totalPndCalc();
pikePlaceMarket.pndPerCup();
pikePlaceMarket.netPndCalc();
pikePlaceMarket.totalNetPndCalc();
pikePlaceMarket.totalCustCalc();
pikePlaceMarket.numEmpCalc();
