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
  totalnumEmp: 0,//Total number of employees needed for the entire day
  ulEl: document.getElementById('PikePlace'),
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
  totalnumEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalnumEmp += this.numEmp[i];

    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.numEmp[i] = Math.ceil(this.customerHour[i] / 30);
      //   this.numEmp[i] = 2;
      // } else {
      //   this.numEmp[i] = 1;

    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.customerHour[i] + ' customers, ' + this.cupsHr[i] + ' cups (' + this.pndPerCup[i] + ' lbs), ' + this.pndHR[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
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
pikePlaceMarket.totalnumEmpCalc();
pikePlaceMarket.render();

var pPMEl = document.getElementById('PikePlace');


function makeLocationTotalPPM() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Pike Place Market:'+ pikePlaceMarket.totalCust;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Pike Place Market: ' + pikePlaceMarket.totalCups.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Pike Place Market: ' + pikePlaceMarket.totalPnd.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Pike Place Market: ' + pikePlaceMarket.totalNetPnd.toFixed(2);
  var totalEmployeesOverAllLiEl = document.createElement('li');
  totalEmployeesOverAllLiEl.textContent = 'Total amount of employees needed at Pike Place Market: ' + pikePlaceMarket.totalnumEmp.toFixed(2);
  pPMEl.appendChild(totalCustomersLiEl);
  pPMEl.appendChild(totalCupsLiEl);
  pPMEl.appendChild(totalPoundsToGoLiEl);
  pPMEl.appendChild(totalPoundsOverAllLiEl);
  pPMEl.appendChild(totalEmployeesOverAllLiEl);


};
makeLocationTotalPPM();


var CapitolHill = {
  name: 'Capitol Hill',
  minCustomer: 12,
  maxCustomer: 28,
  averageCups: 3.2,
  averagePound: 0.03,
  customerHour: [],  //Number of customers per hour
  cupsHr: [],  // Cups sold per hour
  pndHR: [],  //Pounds to-go sold per hour
  pndPerCup: [], //Pounds of beans used for each cup per hour
  netPnd: [],   //Pounds of beans used for both per hour
  numEmp: [],  //Number of employees needed per hour
  totalCups: 0,  //Total cups sold for the day
  totalPnd: 0,  //Total pounds to-go sold for the entire day
  totalNetPnd: 0,  //Total pounds of beans sold for the entire day
  totalCust: 0, //Total number of customers for the entire day
  totalnumEmp: 0,//Total number of employees needed for the entire day
  ulEl: document.getElementById('CapitolHill'),
  randomCustHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }
  },
  cupsHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    }
  },
  totalCupsCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCups += this.cupsHr[i];
    }
    this.totalCups = parseFloat(this.totalCups.toFixed(2));
  },
  pndHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    }
  },
  totalPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalPnd += this.pndHR[i];
    }
    this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  },
  pndPerCup: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    }
  },
  netPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
    }
  },
  totalNetPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalNetPnd += this.netPnd[i];
    }
    this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
  },
  totalCustCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCust += this.customerHour[i];
    }
  },
  totalnumEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalnumEmp += this.numEmp[i];

    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.numEmp[i] = Math.ceil(this.customerHour[i] / 30);
      //   this.numEmp[i] = 2;
      // } else {
      //   this.numEmp[i] = 1;

    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.customerHour[i] + ' customers, ' + this.cupsHr[i] + ' cups (' + this.pndPerCup[i] + ' lbs), ' + this.pndHR[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
    }
  }
};
// Calling out all the methods for CapitolHill object
CapitolHill.randomCustHr();
CapitolHill.cupsHr();
CapitolHill.totalCupsCalc();
CapitolHill.pndHr();
CapitolHill.totalPndCalc();
CapitolHill.pndPerCup();
CapitolHill.netPndCalc();
CapitolHill.totalNetPndCalc();
CapitolHill.totalCustCalc();
CapitolHill.numEmpCalc();
CapitolHill.totalnumEmpCalc();
CapitolHill.render();

var cHEl = document.getElementById('CapitolHill');




function makeLocationTotalCH() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Capitol Hill:'+ CapitolHill.totalCust;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Capitol Hill: ' + CapitolHill.totalCups.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Capitol Hill: ' + CapitolHill.totalPnd.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Capitol Hill: ' + CapitolHill.totalNetPnd.toFixed(2);
  var totalEmployeesOverAllLiEl = document.createElement('li');
  totalEmployeesOverAllLiEl.textContent = 'Total amount of employees needed at Capitol Hill: ' + CapitolHill.totalnumEmp.toFixed(2);
  cHEl.appendChild(totalCustomersLiEl);
  cHEl.appendChild(totalCupsLiEl);
  cHEl.appendChild(totalPoundsToGoLiEl);
  cHEl.appendChild(totalPoundsOverAllLiEl);
  cHEl.appendChild(totalEmployeesOverAllLiEl);


};
makeLocationTotalCH();


var SeattlePublicLibrary = {
  name: 'Seattle Public Library',
  minCustomer: 9,
  maxCustomer: 45,
  averageCups: 2.6,
  averagePound: 0.02,
  customerHour: [],  //Number of customers per hour
  cupsHr: [],  // Cups sold per hour
  pndHR: [],  //Pounds to-go sold per hour
  pndPerCup: [], //Pounds of beans used for each cup per hour
  netPnd: [],   //Pounds of beans used for both per hour
  numEmp: [],  //Number of employees needed per hour
  totalCups: 0,  //Total cups sold for the day
  totalPnd: 0,  //Total pounds to-go sold for the entire day
  totalNetPnd: 0,  //Total pounds of beans sold for the entire day
  totalCust: 0, //Total number of customers for the entire day
  totalnumEmp: 0,//Total number of employees needed for the entire day
  ulEl: document.getElementById('SeattlePublicLibrary'),

  randomCustHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }
  },
  cupsHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    }
  },
  totalCupsCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCups += this.cupsHr[i];
    }
    this.totalCups = parseFloat(this.totalCups.toFixed(2));
  },
  pndHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    }
  },
  totalPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalPnd += this.pndHR[i];
    }
    this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  },
  pndPerCup: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    }
  },
  netPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
    }
  },
  totalNetPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalNetPnd += this.netPnd[i];
    }
    this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
  },
  totalCustCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCust += this.customerHour[i];
    }
  },
  totalnumEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalnumEmp += this.numEmp [i];

    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.numEmp[i] = Math.ceil(this.customerHour [i] / 30);
      //   this.numEmp[i] = 2;
      // } else {
      //   this.numEmp[i] = 1;

    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.customerHour[i] + ' customers, ' + this.cupsHr[i] + ' cups (' + this.pndPerCup[i] + ' lbs), ' + this.pndHR[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
    }
  }
};
// Calling out all the methods for Seattle Public Library object
SeattlePublicLibrary.randomCustHr();
SeattlePublicLibrary.cupsHr();
SeattlePublicLibrary.totalCupsCalc();
SeattlePublicLibrary.pndHr();
SeattlePublicLibrary.totalPndCalc();
SeattlePublicLibrary.pndPerCup();
SeattlePublicLibrary.netPndCalc();
SeattlePublicLibrary.totalNetPndCalc();
SeattlePublicLibrary.totalCustCalc();
SeattlePublicLibrary.numEmpCalc();
SeattlePublicLibrary.totalnumEmpCalc();
SeattlePublicLibrary.render();

var spLEl = document.getElementById('SeattlePublicLibrary');

function makeLocationTotalSPL() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Seattle Public Library:' + SeattlePublicLibrary.totalCust;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Seattle Public Library: ' + SeattlePublicLibrary.totalCups.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Seattle Public Library: ' + SeattlePublicLibrary.totalPnd.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Seattle Public Library: ' + SeattlePublicLibrary.totalNetPnd.toFixed(2);
  var totalEmployeesOverAllLiEl = document.createElement('li');
  totalEmployeesOverAllLiEl.textContent = 'Total amount of employees needed at Seattle Public Library: ' + SeattlePublicLibrary.totalnumEmp.toFixed(2);
  spLEl.appendChild(totalCustomersLiEl);
  spLEl.appendChild(totalCupsLiEl);
  spLEl.appendChild(totalPoundsToGoLiEl);
  spLEl.appendChild(totalPoundsOverAllLiEl);
  spLEl.appendChild(totalEmployeesOverAllLiEl);


};
makeLocationTotalSPL();


var SouthLakeUnion = {
  name: 'South Lake Union',
  minCustomer: 5,
  maxCustomer: 18,
  averageCups: 1.3,
  averagePound: 0.04,
  customerHour: [],  //Number of customers per hour
  cupsHr: [],  // Cups sold per hour
  pndHR: [],  //Pounds to-go sold per hour
  pndPerCup: [], //Pounds of beans used for each cup per hour
  netPnd: [],   //Pounds of beans used for both per hour
  numEmp: [],  //Number of employees needed per hour
  totalCups: 0,  //Total cups sold for the day
  totalPnd: 0,  //Total pounds to-go sold for the entire day
  totalNetPnd: 0,  //Total pounds of beans sold for the entire day
  totalCust: 0, //Total number of customers for the entire day
  totalnumEmp: 0,//Total number of employees needed for the entire day
  ulEl: document.getElementById('SouthLakeUnion'),

  randomCustHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }
  },
  cupsHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    }
  },
  totalCupsCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCups += this.cupsHr[i];
    }
    this.totalCups = parseFloat(this.totalCups.toFixed(2));
  },
  pndHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    }
  },
  totalPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalPnd += this.pndHR[i];
    }
    this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  },
  pndPerCup: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    }
  },
  netPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
    }
  },
  totalNetPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalNetPnd += this.netPnd[i];
    }
    this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
  },
  totalCustCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCust += this.customerHour[i];
    }
  },
  totalnumEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalnumEmp += this.numEmp [i];

    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.numEmp[i] = Math.ceil(this.customerHour[i] / 30);
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.customerHour[i] + ' customers, ' + this.cupsHr[i] + ' cups (' + this.pndPerCup[i] + ' lbs), ' + this.pndHR[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
    }
  }
};
// Calling out all the methods for Seattle Public Library object
SouthLakeUnion.randomCustHr();
SouthLakeUnion.cupsHr();
SouthLakeUnion.totalCupsCalc();
SouthLakeUnion.pndHr();
SouthLakeUnion.totalPndCalc();
SouthLakeUnion.pndPerCup();
SouthLakeUnion.netPndCalc();
SouthLakeUnion.totalNetPndCalc();
SouthLakeUnion.totalCustCalc();
SouthLakeUnion.numEmpCalc();
SouthLakeUnion.totalnumEmpCalc();
SouthLakeUnion.render();

var slUEl = document.getElementById('SouthLakeUnion');

function makeLocationTotalSLU() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at South Lake Union:' + SouthLakeUnion.totalCust;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at South Lake Union: ' + SouthLakeUnion.totalCups.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at South Lake Union: ' + SouthLakeUnion.totalPnd.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at South Lake Union: ' + SouthLakeUnion.totalNetPnd.toFixed(2);
  var totalEmployeesOverAllLiEl = document.createElement('li');
  totalEmployeesOverAllLiEl.textContent = 'Total amount of employees needed at South Lake Union: ' + SouthLakeUnion.totalnumEmp.toFixed(2);
  slUEl.appendChild(totalCustomersLiEl);
  slUEl.appendChild(totalCupsLiEl);
  slUEl.appendChild(totalPoundsToGoLiEl);
  slUEl.appendChild(totalPoundsOverAllLiEl);
  slUEl.appendChild(totalEmployeesOverAllLiEl);


};
makeLocationTotalSLU();

var SeaTacAirport = {
  name: 'Sea-Tac Airport',
  minCustomer: 28,
  maxCustomer: 44,
  averageCups: 1.1,
  averagePound: 0.41,
  customerHour: [],  //Number of customers per hour
  cupsHr: [],  // Cups sold per hour
  pndHR: [],  //Pounds to-go sold per hour
  pndPerCup: [], //Pounds of beans used for each cup per hour
  netPnd: [],   //Pounds of beans used for both per hour
  numEmp: [],  //Number of employees needed per hour
  totalCups: 0,  //Total cups sold for the day
  totalPnd: 0,  //Total pounds to-go sold for the entire day
  totalNetPnd: 0,  //Total pounds of beans sold for the entire day
  totalCust: 0, //Total number of customers for the entire day
  totalnumEmp: 0,//Total number of employees needed for the entire day
  ulEl: document.getElementById('SeaTacAirport'),

  randomCustHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    }
  },
  cupsHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    }
  },
  totalCupsCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCups += this.cupsHr[i];
    }
    this.totalCups = parseFloat(this.totalCups.toFixed(2));
  },
  pndHr: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    }
  },
  totalPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalPnd += this.pndHR[i];
    }
    this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  },
  pndPerCup: function() {
    for (var i = 0; i < hours.length; i++) {
      this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    }
  },
  netPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
    }
  },
  totalNetPndCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalNetPnd += this.netPnd[i];
    }
    this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
  },
  totalCustCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCust += this.customerHour[i];
    }
  },
  totalnumEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.totalnumEmp , this.numEmp);
      this.totalnumEmp += this.numEmp[i];
    }
  },
  numEmpCalc: function() {
    for (var i = 0; i < hours.length; i++) {
      this.numEmp[i] = Math.ceil(this.customerHour[i] / 30);
    }
  },
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.customerHour[i] + ' customers, ' + this.cupsHr[i] + ' cups (' + this.pndPerCup[i] + ' lbs), ' + this.pndHR[i] + ' lbs to-go]';
      this.ulEl.appendChild(liEl);
    }
  }
};
// Calling out all the methods for Seattle Public Library object
SeaTacAirport.randomCustHr();
SeaTacAirport.cupsHr();
SeaTacAirport.totalCupsCalc();
SeaTacAirport.pndHr();
SeaTacAirport.totalPndCalc();
SeaTacAirport.pndPerCup();
SeaTacAirport.netPndCalc();
SeaTacAirport.totalNetPndCalc();
SeaTacAirport.totalCustCalc();
SeaTacAirport.numEmpCalc();
SeaTacAirport.totalnumEmpCalc();
SeaTacAirport.render();

var stAEl = document.getElementById('SeaTacAirport');

function makeLocationTotalSTA() {
  var totalCustomersLiEl = document.createElement('li');
  totalCustomersLiEl.textContent = 'Total customers at Sea-Tac Airport:' + SeaTacAirport.totalCust;
  var totalCupsLiEl = document.createElement('li');
  totalCupsLiEl.textContent = 'Total cups sold at Sea-Tac Airport: ' + SeaTacAirport.totalCups.toFixed(2);
  var totalPoundsToGoLiEl = document.createElement('li');
  totalPoundsToGoLiEl.textContent = 'Total to-go pound packages sold at Sea-Tac Airport: ' + SeaTacAirport.totalPnd.toFixed(2);
  var totalPoundsOverAllLiEl = document.createElement('li');
  totalPoundsOverAllLiEl.textContent = 'Total pounds of beans needed at Sea-Tac Airport: ' + SeaTacAirport.totalNetPnd.toFixed(2);
  var totalEmployeesOverAllLiEl = document.createElement('li');
  totalEmployeesOverAllLiEl.textContent = 'Total amount of employees needed at Sea-Tac Airport: ' + SeaTacAirport.totalnumEmp.toFixed(2);
  stAEl.appendChild(totalCustomersLiEl);
  stAEl.appendChild(totalCupsLiEl);
  stAEl.appendChild(totalPoundsToGoLiEl);
  stAEl.appendChild(totalPoundsOverAllLiEl);
  stAEl.appendChild(totalEmployeesOverAllLiEl);


};
makeLocationTotalSTA();
