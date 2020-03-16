var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function AddList (){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li); 
    input.value = "";
}

button.addEventListener("click", function(){
    if (inputLength() > 0){
          AddList()
    }
})

input.addEventListener("keypress", function(event){
    if (inputLength() > 0 && event.which === 13){
        AddList()
    }
})
