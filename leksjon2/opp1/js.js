const inputfield = document.getElementById("text");
const inputbutton = document.getElementById("button");
const list = document.getElementById("list");

let elements = [];

inputbutton.addEventListener("click", () => {
    elements.push(inputfield.value);
    updateDOM();
});

function updateDOM(){
    let str = "";
    for (let i = 0 ;  i < elements.length; i++){
        str += '<p id="'+ i +'" onclick="elemremove(this.id)">'+ elements[i] +'</p>';
    }
    list.innerHTML = str;
}

function elemremove(e){
    elements.splice(e,1);
    updateDOM();
}