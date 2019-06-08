$(document).ready(function(){
    //AOS.init();
    
    //myFunction();
    AOS.init();
});
var myVar;
function myFunction()
{
    myVar = setTimeout(showpage,3000);
}
function showpage()
{
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}