let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let obj={};
function check(str){
if(str[0]=='T' && str[1]=='h' && str[2]=='e' && str[3]==' '){
var res=str.slice(4);
obj[res]=str;
return res;
}
if(str[0]=='A'){
if(str[1]==' '){
var res=str.slice(2);
obj[res]=str;
return res;
}
if(str[1]=='n' && str[2]==' '){
var res=str.slice(3);
obj[res]=str;
return res;
}
}
obj[str]=str;
return str;
}
for(let i=0;i<touristSpots.length;i++){
touristSpots[i]=check(touristSpots[i]);
// console.log(touristSpots[i]);
}
touristSpots.sort();
for(let i=0;i<touristSpots.length;i++){
touristSpots[i]=obj[touristSpots[i]];
}
console.log(touristSpots);