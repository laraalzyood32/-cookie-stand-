'use strict';
let  salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let  alllocationshops = [];
function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  alllocationshops.push(this);

}
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

    }           
    table.appendChild(trow[i]);
}
tablearea.appendChild(table);
cookieshopTable.innerHTML = '';

totalCookiesPerHour();


  
