var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var additems = document.getElementById("add-items")
var clear = document.getElementById("close")
var addbook = document.getElementById("add-book")
var container = document.getElementById("container")
var addtitle = document.getElementById("add-title")
var addcity = document.getElementById("add-city")
var del = document.getElementById("del")
var display = document.querySelector(".display")
var input = document.querySelector("#upload")
var img = document.querySelector("img")
var reader;

additems.addEventListener("click",function(){
    popupoverlay.style.display ="block";
    popupbox.style.display ="block";

});

function cancel(){
    popupoverlay.style.display ="none";
    popupbox.style.display ="none";

}

    addbook.addEventListener("click",function(){
     var div = document.createElement("div")
     div.setAttribute("id","box-container")
     div.innerHTML = `<h2>${addtitle.value}</h2>
                      <p>${addcity.value}</p>
                      <img src="${reader ? reader.result : ''}" alt=""/>
                      <button id="del"onclick="Delete(event)">Delete</button>`
     container.append(div)
     popupoverlay.style.display ="none";
    popupbox.style.display ="none";
    });

        function Delete(event){
         event.target.parentElement.remove();
        }

        input.addEventListener("change", function () {
            if (input.files.length > 0) {
              reader = new FileReader();
              reader.readAsDataURL(input.files[0]);
              reader.addEventListener("load", function () {
                display.innerHTML = `<img src="${reader.result}" alt=""/>`;
              });
            }
         });
    




