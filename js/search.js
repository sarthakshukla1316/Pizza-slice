// ######################### SEARCH SECTION ############################

let searchTxt1=document.getElementById("searchTxt1");
searchTxt1.addEventListener("input",function(){
    let val=searchTxt1.value.toLowerCase();
    let foodCards = document.getElementsByClassName("food-menu-item");
    Array.from(foodCards).forEach(function(element){
        let foodTxt =element.getElementsByClassName("food-title")[0].innerText.toLowerCase();
        if(foodTxt.includes(val))
        element.style.display="block";
        else
        element.style.display="none";
    });
});

