const userInp = document.getElementById("user-inp");
const addBtn = document.getElementById("add-btn")
const taskList = document.getElementsByClassName("task-list")[0];
const inputBox = document.getElementsByClassName("inp-box")[0];
// document.getElementById("user-inp").addEventListener("focus", function() {
//     this.style.backgroundColor = "yellow";
// });


addBtn.addEventListener("click", function(){

    if(userInp.value!=""){
    // console.log(userInp.value);
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "task");

    taskDiv.innerHTML = `<div class="task-name">${userInp.value}</div> <div class="action-icons"><i class="fas fa-edit edit-btn"></i><i class="fa fa-trash delBtn"></i></div>`

    // const spanEle = document.createElement("span");
    // spanEle.setAttribute("class", "task-name");
    // spanEle.innerText = userInp.value;
    // taskDiv.appendChild(spanEle);
    taskList.appendChild(taskDiv);
    userInp.value = "";

    // const editBtn = document.createElement("span");
    // editBtn.setAttribute("class", "edit-btn");
    // const editIcon = document.createElement("i");
    // editIcon.classList.add("fas","fa-edit");
    // editBtn.appendChild(editIcon);
    // taskDiv.appendChild(editBtn);
    
    // const deleteBtn = document.createElement("div");
    // deleteBtn.setAttribute("class", "delbtn");
    // const icon = document.createElement("i");
    // icon.classList.add("fa", "fa-trash", "delBtn");
    // deleteBtn.appendChild(icon);
    // taskDiv.appendChild(icon);
    
    // const editBtn = document.createElement("div");
    // editBtn.setAttribute("class", "edit-button");
    
    
    const delBtnArr = document.getElementsByClassName("delBtn");

    for(let i=0; i<delBtnArr.length; i++){
        
        delBtnArr[i].onclick = function(){
            console.log(delBtnArr);
            this.parentNode.parentNode.remove();
        }
    }

    const editBtnArr = document.getElementsByClassName("edit-btn");
    // console.log(editBtnArr);
    
    for(i=0; i<editBtnArr.length; i++){
        
        editBtnArr[i].onclick = function(){
            console.log("hi");
            userInp.value = this.parentNode.previousElementSibling.innerText;
            this.parentNode.parentNode.remove();
            userInp.focus();

        }
    }
   


}
else{
    alert("Task must be filled out");
}
})


