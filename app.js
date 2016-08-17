var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var coffeeHouse = [];  //Array for storing the coffee shop objects

function CoffeeShop(name, minCustomer, maxCustomer, averageCups, averagePound) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer
  this.averageCups = averageCups;
  this.averagePound = averagePound;
  this.customerHour = [];  //Number of customers per hour
  this.cupsHr = [];  //Cups sold per hour
  this.pndHR = [];  //Pounds to-go sold per hour
  this.pndPerCup = []; //Pounds of beans used for each cup per hour
  this.netPnd = [];   //Pounds of beans used for both per hour
  this.numEmp = [];  //Number of employees needed per hour
  this.totalCups = 0;  //Total cup sold for the day
  this.totalPnd = 0;  //Total pounds to-go sold for the entire day
  this.totalNetPnd = 0;  //Total pounds of beans sold for the entire day
  this.totalCust = 0; //Total number of customers for the entire day
  this.ulEl = document.getElementById(this.name);
  this.liEl = [];
  coffeeHouse.push(this);
}

//Prototype method to calculate the necessary data to output
CoffeeShop.prototype.calculations = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    this.totalCust += this.customerHour[i];
    this.cupsHour[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    this.totalCup += this.cupsHour[i];
    this.numPndHr[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    this.totalPnd += this.numPndHr[i];
    this.numPndPerCup[i] = parseFloat((this.cupsHour[i] / 16).toFixed(2));
    this.netPnd[i] = parseFloat((this.numPndHr[i] + this.numPndPerCup[i]).toFixed(2));
    this.totalNetPnd += this.netPnd[i];
    this.numEmp[i] = Math.ceil((this.cupsHour[i] + this.numPndHr[i])/ 30);
    this.totalEmpHrs += this.numEmp[i];
  }
  this.totalCup = parseFloat(this.totalCup.toFixed(2));
  this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
};


//Prototype method to output the shop information to data.html
CoffeeShop.prototype.render = function(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  for (var i = 0; i < hours.length + 2; i++) {
    tdEl[i] = document.createElement('td');
  }
  tdEl[0].textContent = this.name;
  trEl.appendChild(tdEl[0]);
  if (tableName === beans) {
    tdEl[1].textContent = this.totalNetPnd;
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2].textContent = this.netPnd[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    beansTableEl.appendChild(trEl);
  } else {
    tdEl[1].textContent = this.totalEmpHrs;
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2].textContent = this.numEmp[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    baristasTableEl.appendChild(trEl);
  }
}


//Creating the coffee shop objects
coffeeHouse[0] = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
coffeeHouse[1] = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
coffeeHouse[2] = new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
coffeeHouse[3] = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
coffeeHouse[4] = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

for (var i = 0; i < coffeeHouse.length; i++) {
  coffeeHouse[i].calculations();
  coffeeHouse[i].render();
}
