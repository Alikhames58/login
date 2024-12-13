let productNameInput = document.getElementById('productName')
let productPriceInput = document.getElementById('productPrice')
let productCategoryInput = document.getElementById('productCategory')
let productDescriptionInput = document.getElementById('productDescription')
let productImageInput = document.getElementById('productImage')
let prodcutSearch = document.getElementById('search')
let addBtn = document.getElementById('addBtn')
let updateBtn = document.getElementById('updateBtn')
let logoutBtn = document.getElementById("logoutBtn")
let currentIndex = 0
let productList = JSON.parse(localStorage.getItem('product')) || []
displayData()
function addProduct() {
    if (validationName() && validationPrice() && validationCategory() && validationDesc()) {
        let product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescriptionInput.value,
            image: productImageInput.files[0] ? `img/${productImageInput.files[0]?.name}` : 'img/work-1.jpg'
        }
        productList.push(product)
        displayData()
        localStorage.setItem('product', JSON.stringify(productList))
        clearData()
        console.log(productList)
    }
}
function displayData() {
    let container = ""
    for (let i = 0; i < productList.length; i++) {
        container += createCols(i)
    }
    document.getElementById('rowData').innerHTML = container
}
function createCols(i) {
    return `
    <div class="col">
    <div class="card h-100">
    <img class="card-img-top" src="${productList[i].image}" alt="${productList[i].name}" />
    <div class="card-body text-center">
    <span class="badge bg-info text-center my-2">Item : ${i + 1}</span>
    <h3 class="card-title h6">${productList[i].name}</h3>
    <div class="d-flex flex-column gap-2">
    <h4 class="card-text small">${productList[i].price}</h4>
    <h4 class="card-text small">${productList[i].category}</h4>
    <p class="card-text small">${productList[i].desc}</p>
    </div>
    <div class="card-footer text-center d-flex gap-2 justify-content-center">
    <button onclick = "deleteItem(${i})" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
    <button onclick = "setUpdateInfo(${i})" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
    </div>
    </div>
    </div>
    </div>
    `
}
function clearData() {
    productNameInput.value = null
    productPriceInput.value = null
    productCategoryInput.value = null
    productDescriptionInput.value = null
    productNameInput.classList.remove('is-valid')
    productPriceInput.classList.remove('is-valid')
    productCategoryInput.classList.remove('is-valid')
    productDescriptionInput.classList.remove('is-valid')
}
function deleteItem(index) {

    productList.splice(index, 1)
    displayData()
    localStorage.setItem('product', JSON.stringify(productList))
}
function searchItem() {
    let term = prodcutSearch.value
    let container = ""
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {

            container += createCols(i)
        }

    }
    document.getElementById('rowData').innerHTML = container


}
function setUpdateInfo(index) {
    currentIndex = index
    productNameInput.value = productList[index].name
    productPriceInput.value = productList[index].price
    productCategoryInput.value = productList[index].category
    productDescriptionInput.value = productList[index].desc
    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')
}
function updateProduct() {
    if (validationName() && validationPrice() && validationCategory() && validationDesc()) {
        let product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescriptionInput.value,
            image: productImageInput.files[0] ? `img/${productImageInput.files[0]?.name}` : 'img/work-1.jpg'
        }
        productList.splice(currentIndex, 1, product)
        addBtn.classList.remove('d-none')
        updateBtn.classList.add('d-none')
        displayData()
        clearData()
        localStorage.setItem('product', JSON.stringify(productList))
    }


}
function validationName() {
    let regex = /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/
    let text = productNameInput.value
    let msgName = document.getElementById('msgName')
    if (regex.test(text)) {
        productNameInput.classList.add('is-valid')
        productNameInput.classList.remove('is-invalid')
        msgName.classList.add('d-none')
        return true
    }
    else {
        productNameInput.classList.add('is-invalid')
        productNameInput.classList.remove('is-valid')
        msgName.classList.remove('d-none')
        return false
    }
}
function validationPrice() {
    let regex = /^\d{4,10}(\.\d{1,2})?$/
    let text = productPriceInput.value
    let msgPrice = document.getElementById('msgPrice')
    if (regex.test(text)) {
        productPriceInput.classList.add('is-valid')
        productPriceInput.classList.remove('is-invalid')
        msgPrice.classList.add('d-none')
        return true
    }
    else {
        productPriceInput.classList.add('is-invalid')
        productPriceInput.classList.remove('is-valid')
        msgPrice.classList.remove('d-none')
        return false
    }
}
function validationCategory() {
    let regex = /^(tv|mobile|screens|electronics)$/i
    let text = productCategoryInput.value
    let msgCategory = document.getElementById('msgCategory')
    if (regex.test(text)) {
        productCategoryInput.classList.add('is-valid')
        productCategoryInput.classList.remove('is-invalid')
        msgCategory.classList.add('d-none')
        return true
    }
    else {
        productCategoryInput.classList.add('is-invalid')
        productCategoryInput.classList.remove('is-valid')
        msgCategory.classList.remove('d-none')
        return false
    }
}
function validationDesc() {
    let regex = /^[a-zA-Z][a-zA-Z0-9 ]{2,19}$/
    let text = productDescriptionInput.value
    let msgDesc = document.getElementById('msgDesc')
    if (regex.test(text)) {
        productDescriptionInput.classList.add('is-valid')
        productDescriptionInput.classList.remove('is-invalid')
        msgDesc.classList.add('d-none')
        return true
    }
    else {
        productDescriptionInput.classList.add('is-invalid')
        productDescriptionInput.classList.remove('is-valid')
        msgDesc.classList.remove('d-none')
        return false
    }
}
function logout() {
    window.location = "./index.html";
}
logoutBtn.addEventListener("click", function () {
    logout()
});

