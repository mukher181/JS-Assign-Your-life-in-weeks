let agemax = 90 ;
let agemaxinweeks = agemax * 365 / 7 ;
let userage = prompt("Your life in weeks\nIf you want to know\nPlease enter your current age in years: "); 
let ageleftinweeks = agemaxinweeks - userage * 52.1429;
alert (`According to the Max Age 90 Years \nYou have ${ageleftinweeks} weeks left.`);