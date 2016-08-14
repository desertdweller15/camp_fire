var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// function CoffeeHouse {
this.name = name;
this.minCustomer = [],
this.maxCustomer = [],
this.averageCups = [],//averageCups
this.averagePound = [],//averagePound
this.customerHour = [],
this.cupsHr = [],
this.pndHR = [],
this.pndPerCup = [],
this.netPnd = [],
this.numEmp = [],
this.TotalNetPnd = 0,
this.TotalPnd = 0,
this.TotalCustomer = 0,
this.TotalCups = 0,

  this.calculations = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customerHour[i] = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      this.TotalCustomer += this.customerHour[i];
      this.cupsHr[i] = parseFloat((this.customerHour[i] * this.averageCups).toFixed(2));
      this.totalCups += this.cupsHr[i];
      this.pndHR[i] = parseFloat((this.customerHour[i] * this.averagePound).toFixed(2));
      this.totalPnd += this.pndHR[i];
      this.pndPerCup[i] = parseFloat((this.cupsHr[i] / 16).toFixed(2));
      this.netPnd[i] = parseFloat((this.pndHR[i] + this.pndPerCup[i]).toFixed(2));
      this.TotalNetPnd += this.netPnd[i];
      this.numEmp[i] = Math.ceil(this.customerHour[i] / 30);
    }
    this.totalCup = parseFloat(this.totalCup.toFixed(2));
    this.totalPnd = parseFloat(this.totalPnd.toFixed(2));
    this.totalNetPnd = parseFloat(this.totalNetPnd.toFixed(2));

// };
  // Output  shop info to data.html
this.render = function() {
  console.log("Number of employees needed at " + this.name + " for each hour:",this.numEmp);
  for (var i = 0; i < hours.length; i++) {
    this.liEl[i] = document.createElement('li');
    this.liEl[i].textContent = hours[i] + ': ' + this.netPnd[i] + ' lbs [' + this.numCustHr[i] + ' customers, ' + this.numCupHr[i] + ' cups (' + this.numPndPerCup[i] + ' lbs), ' + this.numPndHr[i] + ' lbs to-go]';
    this.ulEl.appendChild(this.liEl[i]);
  }
  this.liEl[15] = document.createElement('li');
  this.liEl[15].textContent = 'Total customers at Pike Place: ' + this.totalCust;
  this.ulEl.appendChild(this.liEl[15]);
  this.liEl[16] = document.createElement('li');
  this.liEl[16].textContent = 'Total cups sold at Pike Place: ' + this.totalCup;
  this.ulEl.appendChild(this.liEl[16]);
  this.liEl[17] = document.createElement('li');
  this.liEl[17].textContent = 'Total to-go pound packages sold at Pike Place: ' + this.totalPnd;
  this.ulEl.appendChild(this.liEl[17]);
  this.liEl[18] = document.createElement('li');
  this.liEl[18].textContent = 'Total pounds of beans needed at Pike Place: ' + this.totalNetPnd;
  this.ulEl.appendChild(this.liEl[18]);
    };
