
let menu_page = document.getElementById("menu");
let table_page = document.getElementById("tables");
let table_detail = document.getElementById("table_detail");
let table = document.getElementById("tablee");

let table_input = document.getElementById("table_search");
let menu_input = document.getElementById("menu_search");


let table_items = document.getElementsByClassName("table_item");
let menu_items = document.getElementsByClassName("menu_item");

let table_number = document.getElementById("table_detail_number");


let modal_close = document.getElementById("close")

let table1 = {items:{},total:0};
let table2 = {items:{},total:0};
let table3 = {items:{},total:0};

let table_array = [table1,table2,table3];



menu = {
        "Chicken-Biryani":300,
        "Chicken-Lollipop":70,
        "Ice-Cream":60,
        "Paneer Biryani":350,
        "Chicken-Manchuria":300,
        "Prawns-Fry":80,
        "Veg-Noodles":50,
        "Muthon-Mandi":600,
    }


const updateElements = (id,count,total) =>{
    let ele = document.getElementById(id)
    let p = ele.childNodes[1]
    let span = p.childNodes[1]
    p.innerHTML = count;
    span.innerHTML = `| Total price : ${total}`;
    p.appendChild(span);
    console.log(ele,count,total);

}













