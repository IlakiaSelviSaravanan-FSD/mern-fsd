/*function mul(a,b){
    
    return a*b;
    
}console.log(mul(2,3));

var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var result=JSON.parse(request.response);
   var res=result.map((ele)=>ele.currencies);
   
   console.log(res);
}
*/
var a=11;
for(var i=0;i<=a;i++){
    var count=0;
    if(a%i==0){
        count++;

    }
}