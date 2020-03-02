function doStuff(){ 
    var element = document.getElementById("activeLink");
    element.classList.remove('active');
    element.classList.add('link');
}
function undoStuff(){
    var element = document.getElementById("activeLink");
    element.classList.remove('link');
    element.classList.add('active');
}