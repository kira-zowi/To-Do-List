const listContainer=document.getElementById("list-container");
const inputBox=document.getElementById("input-box");
function addTask () {
       if(inputBox.value===''){
        alert("You must write something!");
       }
       else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        span.addEventListener('click',()=>{
            li.remove();
        })
        li.addEventListener('click',() =>{
            li.classList.add('checked')
        })
      
       }
       inputBox.value = '';

}