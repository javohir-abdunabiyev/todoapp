
function reload(arr, component, parent_component, place) {
    place.innerHTML = ""

    for(let item of arr) {
        const to_do = component(item)

        let category_elem = place.querySelector(`[data-${item.category}]`)

        if(category_elem) {
            category_elem.append(to_do)
        } else {
            category_elem = parent_component(item.category)
            category_elem.append(to_do)
        }

        place.append(category_elem)
    }
}


function submit(form, arr) {
    let data = {
        id: crypto.randomUUID()
    }

    const fm = new FormData(form)

    fm.forEach((val, key) => data[key] = val)

    arr.push(data);
}



export {reload, submit}