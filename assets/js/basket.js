import { getProductCount } from "./common.js"

let table = document.getElementById("table");
let countElem = document.querySelector("sup");

let products = [];
if (JSON.parse(localStorage.getItem("products")) != null) {
    products = JSON.parse(localStorage.getItem("products"));
}

getProductList(products);

function getProductList(list) {
    for (const product of list) {
        table.lastElementChild.innerHTML += `<tr>
        <th>
            <img src="${product.img}" style="height:100px" alt="">
        </th>
        <td>${product.name}</td>
        <td class="position">${product.count}<i class="fas fa-times fa-2x"></i></td>
        </tr>`
    }
}

let dltBtn = document.querySelectorAll(".fa-times");

dltBtn.forEach(btn => {
    btn.onclick = function() {
        
        let name = btn.parentNode.previousElementSibling.innerHTML;
        for (let product = 0; product < products.length; product++) {
            if(products[product].name == name) {
                products.splice(product,1);
               
                localStorage.setItem("products", JSON.stringify(products));
            }
            
            
        }
        btn.parentNode.parentNode.innerHTML="";
        countElem.innerText = getProductCount(products);
       
    }
})




countElem.innerText = getProductCount(products);


