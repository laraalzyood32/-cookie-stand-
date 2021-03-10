'use strict';
let  salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

<<<<<<< HEAD
let  allcookieshops = [];
//Get cookie sold to table 
let  cookieshopTable = document.getElementById('cookies-sold');

let  cookieShopshape = document.getElementById('add-shop-shape');
let custPerHr
=======
let  alllocationshops = [];
>>>>>>> ff3b948d33ab4bac89095b795c5d61d1cb4ae2bf
function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  alllocationshops.push(this);

}
<<<<<<< HEAD

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
=======
let  firstshop=new  CookieShop('seatel', 23, 65, 6.3);
let  secondshop=new  CookieShop('lima', 2, 16, 4.6);
let  thirdshop=new   CookieShop('paris', 20, 38,2.3 );
let  forthshop=new  CookieShop('dubai', 11, 38, 3.7);
let  fifthshop=new  CookieShop('tokyo', 3, 24, 1.2);
CookieShop.prototype.bestsalestoday=function(){
  console.log(this.location +' ' +this.cookiesPerSale+'is the best today');
}
console.log(secondshop);
console.log(thirdshop);
console.log(forthshop);

CookieShop.prototype.table=function(){
let table = document.getElementById('table');
let table = document.createElement('table');
let trow = [];
let cookiesSold = 0; 
let totalCookiesSold = 0;
let head = document.createElement('header');
 trow = document.createElement('trow');
head.innerText = this.location;
trow.appendChild(head);
>>>>>>> ff3b948d33ab4bac89095b795c5d61d1cb4ae2bf
}

for (let i = 1; i < 5; i++){
    trow[i] = document.createElement('trow');
    let cell = document.createElement('cell');
   cell.innerText = cookiesSold;
    trow.appendChild(cell);
    cookiesSold = this.cookiesPerHr();
    for (let j = 1; j < 5; j++){
        cell[j]=document.createElement('cell');
        footer.innerText = CookiesSold ;
        let footer = document.createElement('footer');
   footer.innerText = totalCookiesSold ;
    cell.appendChild(footer);
    totalCookiesSold += cookiesSold;
cookieshopTable.appendChild(trow);
    }           
    table.appendChild(trow[i]);
}
tablearea.appendChild(table);
cookieshopTable.innerHTML = '';

totalCookiesPerHour();

<<<<<<< HEAD
function  totalcookieshops() {
  for(let  k  in  totalcookieshops) {
    totalcookieshops[k].render();
  }
}
// code to add new shop 
function salmonCookieShop(shop) {
=======
>>>>>>> ff3b948d33ab4bac89095b795c5d61d1cb4ae2bf

  
