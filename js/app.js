'use strict';
let  salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let  allcookieshops = [];
//Get cookie sold to table 
let  cookieshopTable = document.getElementById('cookies-sold');

let  cookieShopshape = document.getElementById('add-shop-shape');
let custPerHr
function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  allcookieshops.push(this);

}

debugger;
CookieShop.Initiallook.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust))+ this.minCust);
};

CookieShop.Initiallook.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShop.Initiallook.render = function() { 
  let tablerow = document.createElement('tr');
  let tablecolumn = document.createElement('th');
  tablerow.innerText = this.location;
  tablecolumn.appendChild(tablecolumn);

  let sold = 0;
  let finalSoldcounter = 0;

  for (let i = 0; i < salesHour.length; i++) {

    cookiesSold = this.cookiesPerHr();

    let tablerow= document.createElement('td');
    tablerow.innertext = cookiesSold;
    tablerow.appendChild(tablecolumn);

    this.cookiesSoldPerHr.push(Sold);

    finalSoldcounter += Sold;
  }

  tablecolumn = document.createElement('td');
  tablecolumn.innertext =finalSoldcounter ;
  tablerow.appendChild(tdElement);
  cookieshopTable.appendChild(tablerow);
};

function makeHeaderRow() { 
 let headElement = document.createElement('head');
  let  tablerow = document.createElement('tr');
  let  tablecolumn = document.createElement('th');
  thElement.innertext = '';
  tablerow.appendChild(tablecolumn);

  for (let  i = 0; i < saleHour.length; i++) {
    tablecolumn = document.createElement('th');
    tablecolumn.innerText = saleHour[i];
    tablerow.appendChild(tablecolumn);
  }

  tablecolumn = document.createElement('th');
  tablecolumn.innerText = 'Daily sum';
  tablerow.appendChild(tablecolumn);
  headElement.appendChild(tablerow);

  cookieshopTable.appendChild(headElement);
}

function totalCookiesPerHour() { 
  let tablerow = document.createElement('tr');
  let tablecolumn = document.createElement('th');
  tablecolumn.innerText = 'sum of houres';
  tablerow.appendChild(tablecolumn);

  let TotalCookies = 0;

  for (let  i = 0; i < salesHour.length; i++) {
    let  totalCookies = 0;
    for( let  j = 0; j < allcookieshops.length; j++) {
      totalCookies += allcookieshops[j].cookiesSoldPerHr[i];
      TotalCookies += allcookieshops[j].cookiesSoldPerHr[i];
    }
    let tdElement = document.createElement('td');
    tablecolumn.innertext = totalCookies;
    tablerow.appendChild(tdElement);

  }
  tdElement = document.createElement('td');
  tdElement.innerText = TotalCookies;
  tablerow.appendChild(tdElement);
  cookieshopTable.appendChild(tablerow);
}

new CookieShop('seatel', 23, 65, 6.3);
new CookieShop('lima', 2, 16, 4.6);
new CookieShop('paris', 20, 38,2.3 );
new CookieShop('dubai', 11, 38, 3.7);
new CookieShop('tokyo', 3, 24, 1.2);

function  totalcookieshops() {
  for(let  k  in  totalcookieshops) {
    totalcookieshops[k].render();
  }
}
// code to add new shop 
function salmonCookieShop(shop) {

  console.log(shop);
  console.log(shop.start.shopLocation);
  
  (newshop.start.shopLocation.value);
  let newLocation = 
  newshop.start.shopLocation.value;
  let newMinCust = parseInt(shop.start.minCust.value);
  let newMaxCust = parseInt(shop.start.maxCust.value);
  let  newCookiesPerSale = parseInt(shop.start.cookiesPerSale.value);
  new CookieShop(newLocation, newMinCust, newMaxCust, newCookiesPerSale);
 
  cookieshopTable.innerHTML = '';
  makeHeaderRow();
  renderallcookieshops();
  totalCookiesPerHour();
}
cookieShopshape.addshop('submit', addNewCookieShop);

makeHeaderRow();
renderallcookieshops();
totalCookiesPerHour();