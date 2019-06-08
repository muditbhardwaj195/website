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
    window.location.href = "page.html";
}