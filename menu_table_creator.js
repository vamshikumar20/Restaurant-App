const createTableElements =  () => {
    // removeAllChildNodes(table_page);
    let count =1;

    for(let i of table_array){
        if(i=={items:{},total:0}){
            alert("bill to pay 0");
        }
        else
       {
        console.log(i,menu[i])
        let div = document.createElement("div");
        let p = document.createElement("p");
        let span = document.createElement("span");
        let h1 = document.createElement("h1");


        h1.innerText = "Table " + count;
        p.innerText = i["total"];
        span.innerText = "| Total items : " + Object.keys(i["items"]).length;


        div.setAttribute("class","table_item");
        div.setAttribute("id",count);
        
        const dragover = (e) => {
            e.preventDefault();
            console.log("dragover");
        }

        const dragdrop = (e) => {
            e.preventDefault();
            console.log("dragdrp");
            
            console.log(e.currentTarget.id)
            let id = e.currentTarget.id;
            let data = e.dataTransfer.getData("text");
            let total_amount =0;
            console.log("data",data);

            for(let i in menu){
                if (i == data){
                    if(table_array[id-1]["items"][data] ==undefined){
                        table_array[id-1]["items"][data]  = 1;
                        
                    }
                    else{
                        table_array[id-1]["items"][data]  += 1;
                    }
                    for(let j in table_array[id-1]["items"]){
                        //console.log(j,table_array[id-1]["items"][j])
                        total_amount += menu[j]*table_array[id-1]["items"][j]
                    }
                    console.log("tpata;",total_amount);
                    table_array[id-1]["total"] = total_amount;
                    
                    updateElements(id,Object.keys(table_array[id-1]["items"]).length,total_amount);
                }
            }
            console.log(table_array);


            
        } 

        div.addEventListener("dragover",dragover);
        div.addEventListener("drop",dragdrop,false);
        div.addEventListener("click",create_table_row)




        div.appendChild(h1);
        div.appendChild(p);
        p.appendChild(span);
        table_page.appendChild(div);
        console.log(div.innerHTML)
        count++;
     }
    }
}


const createMenuElements = () => {
    course=["MainCourse","Dessert","Starter","MainCourse","MainCourse","Starter","MainCourse","MainCourse"]

    let cc=0
    for(let i in menu){

        console.log(i,menu[i])
        let div = document.createElement("div");
        let hele = document.createElement("h1");
        let pele = document.createElement("p");
        

        hele.innerText = i;
        pele.innerText = "Rs. "+menu[i]+", "+course[cc];
        cc=cc+1
        div.setAttribute("class","menu_item");
        div.setAttribute("draggable","true")

        
        const drag = (ev) =>{
            ev.dataTransfer.setData("text", ev.target.childNodes[0].innerHTML);
        }


        div.addEventListener("dragstart",drag);
        div.addEventListener("dragend",() =>console.log("Ended"));
        

        div.appendChild(hele);
        div.appendChild(pele);
        menu_page.appendChild(div);
        console.log(div.innerHTML)
    }

}

createTableElements();
createMenuElements();
