import { Option } from "./components/Option.js"
import { Todo, Ul } from "./components/Todo.js"
import { reload, submit } from "./lib/utils.js"

const forms = Array.from(document.forms)
export const select = document.getElementById('categs')

const container = document.querySelector(".container")


export const store = {
    todos: [],
    categories: []
}

forms.forEach((form) => {
    form.onsubmit = (e) => {
        e.preventDefault();

        submit(e.target, store[form.name])

        if(form.name === 'categories') {
            for(let category of store[form.name]) {
                select.append(Option(category))
            }
        } else {
            reload(store[form.name], Todo, Ul, container)
        }

        form.reset()
    }
})

console.log(store.todos);
console.log(store.categories);


const aside = document.querySelector("aside")
const menuBtn = document.querySelector(".menubtn")
const closeBtn = document.querySelector(".close")
menuBtn.onclick = () => {
    aside.classList.add("menu_active")
}

closeBtn.onclick = () => {
    aside.classList.remove("menu_active")
}