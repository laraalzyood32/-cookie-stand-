'use strict';
let  salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let  cookieTable = document.getElementById('cookietable');
let  Form = document.getElementById('form');
let    allLocations = [seatle,lima,paris,dubai,tokyo];
function CookieShop(location, minCust, maxCust, cookiesPerSale,avgsold) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this. cookiesSoldPerHr = [];
  this.avgsold= avgsold;
  this. hourlycustemer=[];
}
  CookieShop.prototype.hourlycustemer=function(){
    let cookiesSoldPerHr=this.total;
    for (let i=0;i<salesHour.length;i++){
       this.hourlycustemer.push(random(this.maxCust,this.minCust));
    }
return this;
  };
  
  let trow = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.name;
  trow.appendChild(td);
  let total = 0;
  for (let i = 0; i < salesHours.length; i++) {
    td = document.createElement('td');
    td.textContent = this.hourlySales[i];
    trow.appendChild(td);
    total += this.hourlySales[i];
  }
  td = document.createElement('td');
  td.textContent = total;
  trow.appendChild(td);
  cookieTable.appendChild(trow);


function makeHeaderRow() {
  let trow = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Location';
  trow.appendChild(th);
  for (let i = 0; i < salesHours.length; i++) {
    th = document.createElement('th');
    th.textContent = locationHours[i];
    trow.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  trow.appendChild(th);
  cookieTable.appendChild(trow);
}

function totalrow() {
  let trow= document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  trow.appendChild(td);
  for (let i = 0; i < salesHours.length; i++) {
    let  total = 0;
    for (let  j = 0; j < allLocations.length; j++) {
      total += allLocations[j].hourlySales[i];
    }
    td = document.createElement('td');
    td.textContent = total;
    trow.appendChild(td);
  }
  let totaltotal = 0;
  for (let y = 0; y < allLocations.length; y++) {
    totalAll += allLocations[j].hourlySales.reduce(reducer);
  }
  td = document.createElement('td');
  td.textContent = totaltotal;
  trow.appendChild(td);
  cookieTable.appendChild(trow);
}

function renderAllStores() {
  for (let i in allLocations) {
    allLocations[i].HourlySales().render();
  }
}

function   newshop(event) {
  event.preventDefault();

  let  namenew = event.target.namenew.value;
  console.log(typeof namenew);
  let  MinCus= event.target.MinCus.valueAsNumber;
  console.log(MinCus);
  console.log(typeof MinCus);
  let  MaxCus = event.target.MaxCus.valueAsNumber;
  console.log(MaxCus);
  console.log(typeof MaxCus);
  let aveCookiesold = event.target.aveCookiesold.valueAsNumber;
  console.log(aveCookiesold);
  console.log(typeof aveCookiesold);

  new Shop(namenew, MinCus, MaxCus, aveCookiesold);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  totalrow();
}

seatel=new  CookieShop('seatel', 23, 65, 6.3);
  lima=new  CookieShop('lima', 2, 16, 4.6);
  paris=new   CookieShop('paris', 20, 38,2.3 );
  dubai=new  CookieShop('dubai', 11, 38, 3.7);
  tokyo=new  CookieShop('tokyo', 3, 24, 1.2);

Form.addEventListener('submit', NewShop);

makeHeaderRow();
renderAllStores();
totalrow();
