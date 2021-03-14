'use strict';
let salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let cookieTable = document.getElementById('cookietable');
let Form = document.getElementById('form');

function CookieShop(location, minCust, maxCust, cookiesPerSale, avgsold) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.cookiesPerSale = cookiesPerSale;
    this.cookiesSoldPerHr = [];
    this.avgsold = avgsold;
    this.cookiesold = [];
}
CookieShop.prototype.hourlycustemer = function () {
    let cookiesSoldPerHr = this.total;
    for (let i = 0; i < salesHour.length; i++) {
        this.cookiesold.push(Math.ceil(this.maxCust, this.minCust)) * this.avgsold;
    }


};


CookieShop.prototype.render=function(){
let trow = document.createElement('tr');
let td = document.createElement('td');
td.textContent = this.location;
trow.appendChild(td);
let total = 0;
for (let i = 0; i < salesHour.length; i++) {
    td = document.createElement('td');
    td.textContent = this.cookiesold[i];
    trow.appendChild(td);
    total += this.hourlycustemer[i];
}
td = document.createElement('td');
td.textContent = total;
trow.appendChild(td);
cookieTable.appendChild(trow);

}
function makeHeaderRow() {
    let trow = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = 'Location';
    trow.appendChild(th);
    for (let i = 0; i < salesHour.length; i++) {
        th = document.createElement('th');
        th.textContent = salesHour[i];
        trow.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'Total';
    trow.appendChild(th);
    cookieTable.appendChild(trow);
}

function totalrow() {
    let trow = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = 'Totals';
    trow.appendChild(td);
    for (let i = 0; i < salesHour.length; i++) {
        let total = 0;
        for (let j = 0; j < allLocations.length; j++) {
            total += allLocations[j].cookiesold[i];
        }
        td = document.createElement('td');
        td.textContent = total;
        trow.appendChild(td);
    }
    let totaltotal = 0;
        // totaltotal  += total;
    
    td = document.createElement('td');
    td.textContent = totaltotal;
    trow.appendChild(td);
    cookieTable.appendChild(trow);
}

function renderAlllocation() {
    for (let i in allLocations) {
        allLocations[i].hourlycustemer();
        allLocations[i].render();
}
}
function newshop(event) {
    event.preventDefault();

    let namenew = event.target.shopName.value;
    
    let MinCus = event.target.minCus.value;

    let MaxCus = event.target.maxCus.value;
   
    let aveCookiesold = event.target.aveCookiesold.value;
    
    let newlocation=new CookieShop(namenew, MinCus, MaxCus, aveCookiesold);
    allLocations.push(newlocation);
    cookieTable.innerHTML = '';
    makeHeaderRow();
    renderAlllocation();
    totalrow();
    
}

let seatle = new CookieShop('seatel', 23, 65, 6.3);
let lima = new CookieShop('lima', 2, 16, 4.6);
let paris = new CookieShop('paris', 20, 38, 2.3);
let dubai = new CookieShop('dubai', 11, 38, 3.7);
let tokyo = new CookieShop('tokyo', 3, 24, 1.2);
let allLocations = [seatle, lima, paris, dubai, tokyo];
renderAlllocation();
Form.addEventListener('submit', newshop);

makeHeaderRow();
totalrow();
