'use strict';
let  salesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let  alllocationshops = [seatle,lima,paris,dubai,tokyo];
function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  this.hourlycustemer=[];
  this.avgsold= avgsold;
}
  CookieShop.prototype.hourlycustemer=function(){
    console.log(this.location +' ' +this.cookiesPerSale+'is the best today');
    let cookiesSoldPerHr=this.total;
    for (let i=0;i<salesHour.length;i++){
       this.hourlycustemer.push(random(this.maxCust,this.minCust));
    }

  }
  let soldcookies = 0; 
let totalCookiesSold = 0;
  CookieShop.prototype.cookiesSoldPerHr=function(){
    this.hourlycustemer();
    for (let i=0;i<salesHour.length;i++){
      let hour=math.ceil(this.hourlycustemer[i]*this.avgsold);
      let soldcookies = this.cookiesSoldPerHour();
      location[i] = soldcookies;
      totalCookiesPerDay = totalCookiesPerDay + soldcookies;
    }
    this.totalCookiesSoldInADay = totalCookiesPerDay;
    location[i] = this.totalCookiesSoldInADay;
    return location;
  }



 
  

    let table = document.getElementById('cookietable');
    let table = document.createElement('table');
    let trow = [];
  
  CookieShop.prototype.render=function(){
    this.cookiesSoldPerHr();
    let trow=document.createElement('tr');
    let td=document.createElement('td');
    td.innerText=this.location;
    trow.appendChild(td);


    for (let i=0;i<salesHour.length;i++){
       td=document.createElement('td');
       td.innerText=this.cookiessoldperhour[i];
       trow.appendChild(td);

  }
  let theader=document.createElement('th');
  theader.innerText=this.totalCookiesSold;
  trow.appendChild(th);
  table.appendChild(trow);
  }

let  firstshop=new  CookieShop('seatel', 23, 65, 6.3);
let  secondshop=new  CookieShop('lima', 2, 16, 4.6);
let  thirdshop=new   CookieShop('paris', 20, 38,2.3 );
let  forthshop=new  CookieShop('dubai', 11, 38, 3.7);
let  fifthshop=new  CookieShop('tokyo', 3, 24, 1.2);



function header(){
  let trow=document.createElement('tr');
  let th =document.createElement('th');
  th.innerText='location';
  trow.appendChild(th);
  for (let i=0;i<salesHour.length;i++){
    th =document.createElement('th');
    th.innerText=saleshoure[i];
    trow.appendChild(th);
  }
  th=docment.createElement('th');
  th.innerText='totalforalllocations';
  trow.appendChild(th);
  trow.appendChild(table);
}

    function  footer(){
      if(footer.length===0){
        let tablefooter =document.createElement('tf');
        let newRow = document.createElement('tfoot');
      let footerhead=document.createElement('th');
      footerhead.innerText='total all location';
      footerhead.appendChild(footerrow);
      tablefooter.appendChild(cookieTable);
      
    let sumoftotal=0;
    for (let i=0;i<salesHour.length;i++){
      for (let j=0;j<alllocationshops.length;j++){
        sumoftotal+=cookiesSoldPerHr[i].alllocationshops[j];

      }
      footerhead=document.createElement('th');
      footerhead.innerText=totalCookiesSold ;
      footerrow.appendChild(footerhead);
    }
    footerhead=document.createElement('th');
    footerhead.innerText=sumoftotal ;
    footerrow.appendChild(footerhead);     
  table.appendChild(footerrow);

  (function  cookietable(){
    header();
    for (let i=0;i<salesHour.length;i++){
      alllocationshops.render();
    }
    footer();
  }) ();
         let  newShop=document.getElementById('newshop');
  
  function handleshop(event){
    event.preventDefault();
 newShop.addEventListener('submit', handleshop);
    let newShop =event.target.place.value;
    let  max=parseInt(event.target.max.value);
    let  min=parseInt(event.target.min.value);
    let avgsold=parseInt(event.target.avgsold.value);
    if( totalCookiesSoldInADay===mincus){
      alert('this a bad day sales');
    }
    else{
  
      let addnewlocatin= new Location(newShop, mincus, avgsold, maxcus);
      location.push(addnewlocatin);
      totalcookiesSoldPerHour = 0;
      addnewlocatin.hourlycustemer();
      addnewlocatin.cookiesSoldPerHour();
      alllocationshops();
      console.log('total ' + totalcookiesSoldPerHour);
    }
  }
