const names = ["Jhon", "Jack", "Tom", "Mike", "Fred"]
const list = document.querySelector(".list")
const hiddenBtn = document.getElementById("hidden-btn")

hiddenBtn.addEventListener("click", () => {
    if (list.style.display == "block") {
    list.style.display = "none"   
    hiddenBtn.textContent = "reveal"    
  } else{
    list.style.display = "block"  
    hiddenBtn.textContent = "hidden"    
  }
})

names.forEach((name) => {
    const li = document.createElement("li")
    li.textContent = name
    list.appendChild(li)
    li.addEventListener("click", () => {
        const delBtn = document.createElement("button")
        delBtn.textContent = "удалить"
        li.appendChild(delBtn)
        delBtn.addEventListener("click", () => {
            li.remove()
            delBtn.remove()
        })
    })
    
})

let name = "Bob"
const addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", () => {
    const li = document.createElement("li")
    li.textContent = name
    list.appendChild(li)
    li.addEventListener("click", () => {
        const delBtn = document.createElement("button")
        delBtn.textContent = "delete"
        li.appendChild(delBtn)
        delBtn.addEventListener("click", () => {
            li.remove()
            delBtn.remove()
        })
    })
})
 