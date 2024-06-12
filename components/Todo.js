import { store } from "../index.js"
import { select } from "../index.js"


function Todo(item) {

    let li = document.createElement('li')
    li.classList.add("lis_mr")
    li.innerHTML = `${item.description} <br/> ${item.deadline}`


    item.isDone = false

    const div = document.createElement("div")
    div.classList.add("flex_div")
    

    const checkbox = document.createElement("input")
    checkbox.classList.add("checkbox")

    checkbox.onchange = () => {
        if(checkbox.checked) {
            item.isDone = true
            li.classList.add("line_through")
        } else {
            item.isDone = !item.isDone
            li.classList.remove("line_through")
        }
    }

    let edit_img = document.createElement("img")
    edit_img.className = "edit"
    edit_img.src ="edit.png"

    let remove_img = document.createElement("img")
    remove_img.className = "remove"
    remove_img.src = "remove.png"

    edit_img.onclick = () => {
        let edit_prompt = prompt("edit your text")

        li.innerHTML = `${edit_prompt} <br/> ${item.deadline}`
        item.description = edit_prompt
    }


    remove_img.onclick = () => {

        const idx = store.todos.findIndex(todo => todo.id === item.id);

        if (idx !== -1) {
            store.todos.splice(idx, 1);
            div.remove();
        }
    };
    

    checkbox.type = "checkbox"
    
    let rm_ed_div = document.createElement("div")
    rm_ed_div.classList.add("end_imgs")

    
    rm_ed_div.append(edit_img, remove_img)

    div.append(checkbox, li, rm_ed_div)
    

    return div
}



function Ul(category) {

    let main_div = document.createElement("div")
    const remove_div = document.createElement("img")
    remove_div.src = "remove.png"
    remove_div.className = "remove_div"


    remove_div.onclick = () => {

        const idx = store.categories.findIndex(categ => categ.title === category);
    
        if (idx !== -1) {
            store.categories.splice(idx, 1); // изменено здесь
            main_div.remove();
            store.todos.splice(idx)
        }
    };
    


    main_div.classList.add("category")
    let h2 = document.createElement("h2")
    h2.classList.add("categ_centr")
    let categ_div = document.createElement('div')
    

    h2.innerHTML = category
    main_div.setAttribute(`data-${category}`, '')

    main_div.append(remove_div, h2, categ_div)

    return main_div
}




export {Todo, Ul}