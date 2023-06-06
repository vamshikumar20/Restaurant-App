const create_table_row = (e) => {
    table_detail.style.display = "flex";
// var list_id=[]

    let id = e.currentTarget.id;
//     list_id.push(id)
    // alert(id)
    table_number.innerHTML = id;
    table_curr = table_array[id-1];
    removeAllChildNodes(table);
    table.setAttribute("id",id);
        if(Object.keys(table_curr["items"]).length != 0){
            let items = table_curr["items"];
            let count =1;


            let row1 = document.createElement("tr");
                
            let th1 = document.createElement("th")
            let th2 = document.createElement("th")
            let th3 = document.createElement("th")
            let th4 = document.createElement("th")
            let th5 = document.createElement("th")

            th1.innerHTML = "S.no"
            th2.innerHTML = "Item"
            th3.innerHTML = "Price"
            th4.innerHTML = "Count"
            th5.innerHTML = "del"
            

            row1.appendChild(th1);
            row1.appendChild(th2);
            row1.appendChild(th3);
            row1.appendChild(th4);
            row1.appendChild(th5);


            table.appendChild(row1)

            
            for(let j in items){
                let name = j
                let amount = menu[j]*items[j];
                let quantity = items[j];
                
                let row = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");


                let span = document.createElement("span");
                let span1 = document.createElement("span");
                let count_inp = document.createElement("input");
                let number = document.createElement("input");
                let del = document.createElement("span");

                
                // del.setAttribute("class","icofont-trash");
                span.setAttribute("class","buttonss");  
                span1.setAttribute("class","buttonss");
                
                number.setAttribute("class","inputs");
                count_inp.setAttribute("class","inputs");

                number.setAttribute("type","integer");
                
                count_inp.setAttribute("type","number");
                count_inp.setAttribute("step","1");


                del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>`; 
              del.style.cursor="pointer"
                span.innerHTML = "&uarr;"
                span1.innerHTML = "&darr;"
                number.value = amount;
                
                count_inp.addEventListener("change",increment)
                del.addEventListener("click",deleter);
                
                td1.innerHTML = count;
                td2.innerHTML = name;
                // td3.innerHTML = amount;
                count_inp.value = quantity;
                
                td3.appendChild(number);
                td4.appendChild(count_inp);
                // td4.appendChild(span);
                // td4.appendChild(span1);
                td5.appendChild(del);

                row.appendChild(td1);
                row.appendChild(td2);
                row.appendChild(td3);              
                row.appendChild(td4);
                row.appendChild(td5);


                table.appendChild(row);


                count++;
            }
            let amount_row = document.createElement("tr");
            let amount_col = document.createElement("td")
            let amount_col2 = document.createElement("td")

            let total_amount = 0;
            for(let j in table_array[id-1]["items"]){
                //console.log(j,table_array[id-1]["items"][j])
                total_amount += menu[j]*table_array[id-1]["items"][j]
            }
            // console.log("tpata;",total_amount);
            // table_array[id-1]["total"] = total_amount;
            amount_col.innerHTML = "Total";
            amount_col2.innerHTML = total_amount;
            amount_row.appendChild(amount_col);
            amount_row.appendChild(amount_col2);
            table.appendChild(amount_row);
            //
            //get total price
            localStorage.setItem(id,total_amount)

        }
    
}


window.onclick = function(event) {
    if (event.target == table_detail) {
        console.log("working");
      table_detail.style.display = "none";
      
    }
  }

modal_close.onclick = function(event){
    table_detail.style.display = "none";
    
}

let genbill=document.getElementById('generatebill');
genbill.addEventListener('click',GenerateBill)

function GenerateBill(){
  // alert("hi")
  
  let modal=document.getElementById('generatebill');
let table_name= modal.parentNode.childNodes[1].innerText.split("|")[0]
// console.log(modal.parentNode.children[1])
// console.log(modal.parentNode.innerHTML)
//  modal.parentNode.removeChild(children[2]);
 if(modal.parentNode.children[1].innerHTML!=""){ 
  // console.log("finding id "+modal.parentNode.children[1].children[0].parentElement.id)
  let toatl_price=modal.parentNode.children[1].lastElementChild.lastElementChild.innerHTML;
  // console.log(modal.parentNode.children[1].lastElementChild.lastElementChild.innerHTML)
  let id=modal.parentNode.children[1].children[0].parentElement.id
  console.log(modal.parentNode.children[1].children[0].parentElement)
  removeAllChildNodes(modal.parentNode.children[1].children[0].parentElement)
  modal.parentNode.children[1].innerHTML="";
  alert(`The bill is to be paid for ${table_name} is Rs.${toatl_price}`)
  if(table_name=="Table 1"){
    table_array[0]={items:{},total:0}
  }
  if(table_name=="Table 2"){
    table_array[1]={items:{},total:0}
  }
  if(table_name=="Table 3"){
    table_array[2]={items:{},total:0}
  }
  updateElements(id,0,0);

  
 }
 else{

  alert(`Total Cost For ${table_name} is 0, No need to pay bill`)
 }
 
  }

