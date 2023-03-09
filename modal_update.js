function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function increment (e) {
        let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
        let count_value = this.parentNode.parentNode.childNodes[3].childNodes[0].value;
        let table = this.parentNode.parentNode.parentNode;

        let id = table.id;
        let table_element = table_array[id-1];

        console.log(count_value);
        if(count_value == 0){
            let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
            let id = table.id;
            let table_element = table_array[id-1];
            console.log(table_element["items"][food_item])
            delete table_element["items"][food_item];
            console.log(table_element["items"][food_item])
            let total_amount=0;
            for(let j in table_array[id-1]["items"]){
                //console.log(j,table_array[id-1]["items"][j])
                total_amount += menu[j]*table_array[id-1]["items"][j]
            }
            
            table_array[id-1]["total"] = total_amount;
            updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
            table.lastChild.childNodes[1].innerHTML=total_amount;   
            table.removeChild(this.parentNode.parentNode)
            console.log(this.parentNode.parentNode.childNodes[0].innerHTML)
    
        }
        else{
        table_element["items"][food_item] = parseInt(count_value);
        
        let total_amount1 = table_element["items"][food_item]*menu[food_item];
        let amount = this.parentNode.parentNode.childNodes[2];
        amount.childNodes[0].value = total_amount1;
        
        let count  = this.parentNode.parentNode.childNodes[3];
        console.log(count)
        count.childNodes[0].innerHTML = table_element["items"][food_item];    
        // amount_td.innerHTML = total_amount.toString(   );
        // console.log(amount_td,total_amount)
        let total_amount=0;
        for(let j in table_array[id-1]["items"]){
            //console.log(j,table_array[id-1]["items"][j])
            total_amount += menu[j]*table_array[id-1]["items"][j]
        }
        
        table_array[id-1]["total"] = total_amount;
        updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
        table.lastChild.childNodes[1].innerHTML=total_amount;
    }
        

}

function deleter(){
    let last = this.parentNode.parentNode.parentNode.lastChild.childNodes[1]
    
    let food_item = this.parentNode.parentNode.childNodes[1].innerHTML;
    let id = this.parentNode.parentNode.parentNode.id;
    let table_element = table_array[id-1];
    delete table_element["items"][food_item];
    let total_amount=0;
    for(let j in table_array[id-1]["items"]){
        //console.log(j,table_array[id-1]["items"][j])
        total_amount += menu[j]*table_array[id-1]["items"][j]
    }
    
    table_array[id-1]["total"] = total_amount;
    updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
    last.innerHTML = total_amount;
   
}


