// Menu Tag
function menutagClicked() {
    document.querySelector('.list').classList.toggle('active');
}

// Filter Up and Down
const filternames = document.querySelectorAll('.filter_name');
function clearSelection() {
    filternames.forEach((name) => {
        name.classList.remove('selected');
    })
}
function downArrowClicked1() {
    clearSelection();
    document.querySelector('.filter1').classList.toggle('selected');
};
function downArrowClicked2(){
    clearSelection();
    document.querySelector('.filter2').classList.toggle('selected');
};
function downArrowClicked3(){
    clearSelection();
    document.querySelector('.filter3').classList.toggle('selected');
};
function downArrowClicked4(){
    clearSelection();
    document.querySelector('.filter4').classList.toggle('selected');
};
function downArrowClicked5(){
    clearSelection();
    document.querySelector('.filter5').classList.toggle('selected');
};
function downArrowClicked6(){
    clearSelection();
    document.querySelector('.filter6').classList.toggle('selected');
};
// Filter Products
const filterBtns = document.querySelectorAll('.btn');
const productBoxs = document.querySelectorAll('.box');
const searchBox = document.querySelector('#searchBox');

// Search Product using Text box
searchBox.addEventListener('keyup', (e) => {
    e.preventDefault();
    searchText = e.target.value.toLowerCase().trim();
    productBoxs.forEach((product) => {
        let data = product.dataset.item;
        console.log(data);
        if (data.includes(searchText)) {
            product.style.display = 'block';
        }
        else {
            product.style.display = 'none';
        }
    })
    filterBtns.forEach((b) => {
        b.classList.remove('btn_clicked');
    })
    filterBtns[0].classList.add('btn_clicked');
})

//Filter using Filter Buttons
filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        var filter_name = btn.dataset.filter;
        productBoxs.forEach((box) => {
            if (filter_name == 'all')
            box.style.display = 'block';
            else {
                const box_category = box.dataset.category;
                if (filter_name == box_category)
                    box.style.display = 'block'
                else   
                    box.style.display = 'none'
            }
        })
    })
})
function setActiveBtn(e) {
    filterBtns.forEach((b) => {
        b.classList.remove('btn_clicked');
    })
    e.target.classList.add('btn_clicked')
}
// Cart button clicking event
const cartbtn = document.querySelectorAll('.add_cart_btn');
const cartIcon = document.getElementsByClassName('cartIcon');
function addToCart(){
    
}