let cart = [];
let total = 0;

// السلة
function toggleCart(){
document.getElementById("cart").classList.toggle("show");
}

function addToCart(name,price){
cart.push({name,price});
update();
}

function update(){
let items="";
total=0;

cart.forEach(i=>{
items+=`<p>${i.name} - ${i.price} جنيه</p>`;
total+=i.price;
});

document.getElementById("cart-items").innerHTML=items;
document.getElementById("total").innerText=total;
document.getElementById("cart-count").innerText=cart.length;
}

// الكاميرا
function openCamera(){
const video=document.getElementById("video");

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>{
video.srcObject=stream;
})
.catch(()=>{
alert("الكاميرا مش شغالة");
});
}

// واتساب
function sendOrder(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if(!name || !phone || !address){
alert("املي البيانات الأول");
return;
}

if(cart.length === 0){
alert("السلة فاضية");
return;
}

let order = cart.map(i => i.name + " - " + i.price).join(" | ");

let message = `طلب جديد 👇
الاسم: ${name}
رقم: ${phone}
العنوان: ${address}
الطلب: ${order}
الإجمالي: ${total} جنيه`;

window.open(`https://wa.me/201223367009?text=${encodeURIComponent(message)}`);
}