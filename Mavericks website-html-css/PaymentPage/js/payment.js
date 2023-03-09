
// Filter Products
let Boxs = document.querySelectorAll('.box');
let buyBtns = document.querySelectorAll('.buy_btn');
let prodImg = 0;
buyBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        let prodImg = Boxs[idx].querySelector('.product_img');
        let prodName = Boxs[idx].querySelector('.product_name');
        let prodPrice = Boxs[idx].querySelector('#price');
        console.log(prodImg)
        console.log(prodName)
        console.log(prodPrice)
    })
})