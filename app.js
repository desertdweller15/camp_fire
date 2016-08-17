var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var coffeeHouse = [];  //Array for storing the coffee shop objects
var beanTableEL = document.getElementById('beans');
var baristasTableEl = document.getElementById('baristas');

//Constructor function to create coffee shop objects
function CoffeeShop(name, minCustomer, maxCustomer, averageCups, averagePound) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageCups = averageCups;
  this.averagePound = averagePound;
  this.customerHour = [];  //Number of customers for each hour
  this.cupsHr = [];  //Projected cups sold for each hour
  this.pndHR = [];  //Projected pounds to-go sold for each hour
  this.pndPerCup = []; //Projected pounds of beans used for cup for each hour
  this.netPnd = [];   //Projected pounds of beans used for both for each hour
  this.numEmp = [];  //Number of employees needed for each hour
  this.totalCups = 0;  //Total cup sold for the day
  this.totalPnd = 0;  //Total pounds to-go sold for the day
  this.totalNetPnd = 0;  //Total pounds of beans sold altogether for the day
  this.totalCust = 0; //Total number of customers for the day
  this.totalnumEmp = 0; //Total number of employee hours for the day
};

//Prototype method to calculate the necessary data to output
CoffeeShop.prototype.calculations = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    this.totalCust += this.customerHour[i];
    this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
    this.totalCups += this.cupsHr[i];
    this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
    this.totalPnd += this.pndHR[i];
    this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
    this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
    this.totalNetPnd += this.netPnd[i];
    this.numEmp[i] = Math.ceil((this.cupsHr[i] + this.pndHR[i]) / 30);
    this.totalnumEmp += this.numEmp[i];
  }
  this.totalCups = parseFloat(this.totalCups.toFixed(2));
  this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
  this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));
};

//Function that will create the table header
function tableHeader(tableName) {
  var trEl = document.createElement('tr');
  var thEl = [];
  thEl[0] = document.createElement('th');
  thEl[1] = document.createElement('th');
  thEl[0].textContent = 'Locations';
  if (tableName === bean) {
    thEl[1].textContent = 'Daily Location Totals';
  } else {
    thEl[1].textContent = 'Total Employee Hours';
  }
  trEl.appendChild(thEl[0]);
  trEl.appendChild(thEl[1]);
  for (var i = 0; i < hours.length; i++) {
    thEl[i + 2] = document.createElement('th');
    thEl[i + 2].textContent = hours[i];
    trEl.appendChild(thEl[i + 2]);
  }
  if (tableName === bean) {
    beanTableEL.appendChild(trEl);
  } else {
    baristasTableEl.appendChild(trEl);
  }
}

//Prototype method to output the shop information to data.html
CoffeeShop.prototype.render = function(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  for (var i = 0; i < hours.length + 2; i++) {
    tdEl[i] = document.createElement('td');
  }
  tdEl[0].textContent = this.name;
  trEl.appendChild(tdEl[0]);
  if (tableName === bean) {
    tdEl[1].textContent = this.totalNetPnd;
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2].textContent = this.netPnd[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    beanTableEL.appendChild(trEl);
  } else {
    tdEl[1].textContent = this.totalnumEmp;
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2].textContent = this.numEmp[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    baristasTableEl.appendChild(trEl);
  }
};

//Function that will create a totals row
function tableTotal(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = 'Totals';
  trEl.appendChild(tdEl[0]);
  tdEl[1] = document.createElement('td');
  if (tableName === bean) {
    tdEl[1].textContent = parseFloat((coffeeHouse[0].totalNetPnd + coffeeHouse[1].totalNetPnd + coffeeHouse[2].totalNetPnd + coffeeHouse[3].totalNetPnd + coffeeHouse[4].totalNetPnd).toFixed(2));
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2] = document.createElement('td');
      var hourlyTotals = 0;
      for (var j = 0; j < coffeeHouse.length; j++) {
        hourlyTotals += coffeeHouse[j].netPnd[i];
      }
      tdEl[i + 2].textContent = parseFloat(hourlyTotals.toFixed(2));
      trEl.appendChild(tdEl[i + 2]);
    }
    beanTableEL.appendChild(trEl);
  } else {
    tdEl[1].textContent = parseFloat((coffeeHouse[0].totalnumEmp + coffeeHouse[1].totalnumEmp + coffeeHouse[2].totalnumEmp + coffeeHouse[3].totalnumEmp + coffeeHouse[4].totalnumEmp).toFixed(2));
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < hours.length; i++) {
      tdEl[i + 2] = document.createElement('td');
      var hourlyTotals = 0;
      for (var j = 0; j < coffeeHouse.length; j++) {
        hourlyTotals += coffeeHouse[j].numEmp[i];
      }
      tdEl[i + 2].textContent = parseFloat(hourlyTotals.toFixed(2));
      trEl.appendChild(tdEl[i + 2]);
    }
    baristasTableEl.appendChild(trEl);
  }
}


//Creating the coffee shop objects and creating the table of information
coffeeHouse[0] = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
coffeeHouse[1] = new CoffeeShop('Capitol Hill', 12, 28, 3.2, 0.03);
coffeeHouse[2] = new CoffeeShop('Seattle Public Library', 9, 45, 2.6, 0.02);
coffeeHouse[3] = new CoffeeShop('South Lake Union', 5, 18, 1.3, 0.04);
coffeeHouse[4] = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

tableHeader(bean);
tableHeader(barista);
for (var i = 0; i < coffeeHouse.length; i++) {
  coffeeHouse[i].calculations();
  coffeeHouse[i].render(bean);
  coffeeHouse[i].render(baristas);
}
tableTotal(bean);
tableTotal(baristas);
