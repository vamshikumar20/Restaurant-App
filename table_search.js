
const table_search = (e) => {
    let value = e.target.value
    for(let i of table_items){
        let table_item_name = i.childNodes[0].innerHTML 
        if (!table_item_name.toLowerCase().includes(value.toLowerCase())){
            i.style.display = "none"
            console.log("workingggg")
        } 
        else{
            i.style.display="flex";
            console.log("working");
        }
    }    
    if(value == ""){
        for(let i of table_items){
            console.log(i)
            i.style.display = "flex";
        }
    }
}
table_input.addEventListener("keyup",table_search )

const menu_search = (e) => {
    let value = e.target.value
    for(let i of menu_items){
        // console.log(i)
        let menu_item_name = i.innerText 
        if ( !menu_item_name.toLowerCase().includes(value.toLowerCase())){
            i.style.display = "none"
            // console.log("workingggg")
        } 
        else{
            i.style.display="flex";
            // console.log("working");
        }
    } 
    for(let j in menu2){
        if(value == j){
            console.log("i")
            for(let i of menu_items){
                let menu_item_name = i.childNodes[0].innerHTML 
                // console.log(menu2[j].includes(menu_item_name))
                if(menu2[j].includes(menu_item_name)){
                    i.style.display = "flex";
                }
                else{
                    i.style.display = 'none';
                }
            }
        }


    }   
    if(value == ""){
        for(let i of menu_items){
            i.style.display = "flex";
        }
    }
}
menu_input.addEventListener("keyup",menu_search )
