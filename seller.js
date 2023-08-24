
function getValueFromInputField(id) {
  let idCall = document.getElementById(id);
  let idValue = idCall.value;
  idCall.value = "";
  return idValue;
}
function getValueFromId(id) {
  let idCall = document.getElementById(id);
  let idValue = idCall.innerText;
  let value = parseFloat(idValue);
  return value;
}
function setValue(id, value) {
  let idCall = document.getElementById(id);
  idCall.innerText = value;
}

let productList = document.getElementById('productList').children
document.getElementById('numberOfProducts').innerText = parseInt(productList.length)

let update = document.getElementById('update')
update.addEventListener('click', function () {
  let inputSellerName = getValueFromInputField('inputSellerName')
  let inputSellerEmail = getValueFromInputField('inputSellerEmail')
  let inputSellerMobile = getValueFromInputField('inputSellerMobile')
  let inputSellerAddress = getValueFromInputField('inputSellerAddress')


  if (inputSellerMobile.length === 11) {
    setValue('sellerPhone', inputSellerMobile)
    document.getElementById('inputSellerMobile').value = ''

  }
  if (inputSellerEmail.endsWith('@gmail.com')) {
    setValue('sellerEmail', inputSellerEmail)
    document.getElementById('inputSellerEmail').value = ''
  }
  if (inputSellerName.length > 2) {
    setValue('sellerName', inputSellerName)
    document.getElementById('inputSellerName').value = ''
  }
  if (inputSellerAddress.length > 10) {
    setValue('sellerAddress', inputSellerAddress)
    document.getElementById('inputSellerAddress').value = ''

  }
})
function deleteProduct(target) {
  let productList = document.getElementById('productList')
  productList.removeChild(target.parentNode);
  let numberOfProducts = document.getElementById('numberOfProducts')
  numberOfProducts.innerText = parseInt(productList.children.length)



}

// let productsImage = document.getElementById('productsImage')
// let productsName = document.getElementById('productsName')
// let productsPrice = document.getElementById('productsPrice')
// let productsDescription = document.getElementById('productsDescription')
let submitProducts = document.getElementById('submitProduct')
submitProducts.addEventListener('click', function () {
  let productsName = getValueFromInputField('productsName')
  let productsPrice = getValueFromInputField('productsPrice')
  let productsImageInput = document.getElementById('productsImage')
  let productList = document.getElementById('productList')


  if (productsImageInput.files.length > 0) {
    let productsImage = productsImageInput.files[0];
    let li = document.createElement('li')
    li.classList.add('flex', 'items-center', 'justify-between', 'bg-white', 'p-4', 'border', 'rounded-md', 'shadow-md');

    li.innerHTML = `
        <div class="flex items-center">
          <img src="${URL.createObjectURL(productsImage)}" alt="${productsName}" class="w-16 h-16 object-contain mr-4">
          <div>
              <span class="text-gray-800 font-semibold">${productsName}</span>
              <p class="text-gray-600">$ ${productsPrice}</p>
          </div>
        </div>
        <button onclick='deleteProduct(this)' class="btn text-red-500">Delete</button>
      `;
    productList.appendChild(li)
    let numberOfProducts = document.getElementById('numberOfProducts')
    numberOfProducts.innerText = parseInt(productList.children.length)


  }


  document.getElementById('productsDescription').value = ''

})


//   let inputSellerName = document.getElementById('inputSellerName')
//   let inputSellerEmail = document.getElementById('inputSellerEmail')
//   let inputSellerMobile = document.getElementById('inputSellerMobile')
//   let inputSellerAddress = document.getElementById('inputSellerAddress')

//   let sellerName = document.getElementById('sellerName')
//   let sellerEmail = document.getElementById('sellerEmail')
//   let sellerPhone = document.getElementById('sellerPhone')









