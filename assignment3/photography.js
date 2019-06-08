var myVar;
$(document).ready(function(){
    myFunction();
});
function myFunction()
{
    myVar = setTimeout(showpage,3000);
}
function showpage()
{
    console.log("called");
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}