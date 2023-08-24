let number = 0
function hello(target) {
    number++
    if (number > 15) {
        alert('you can only add 15 items at a time')
        return
    }
    const nameOfProduct = target.children[2].children[0].innerText
    const PriceOfProduct = target.children[2].children[1].children[0].innerText

    let parent = document.getElementById('listItem')
    let li = document.createElement('li')
    li.innerText = `${number}.${nameOfProduct}`
    parent.appendChild(li)
    
    let MainPrice = document.getElementById('MainPrice')
    let total = document.getElementById('Price')
    let main = parseFloat(MainPrice.innerText) + parseFloat(PriceOfProduct)
    MainPrice.innerText = main.toFixed(2)
    total.innerText =main.toFixed(2);

let makeButtonn =document.getElementById('make-button')
let applyButtonn =document.getElementById('apply-button')
let totalPricee =document.getElementById('MainPrice').innerText;
let mainPrice =parseFloat(totalPricee);
if(mainPrice >= 200){
    let applyButtonn =document.getElementById('apply-button')
    applyButtonn.removeAttribute('disabled')

}
else{
    let applyButtonn =document.getElementById('apply-button')
    applyButtonn.setAttribute('disabled','true');
}
if(mainPrice == 0){
    let makeButtonn =document.getElementById('make-button')
    makeButtonn.setAttribute('disabled','true')
    
}
else{
    let makeButtonn =document.getElementById('make-button')
    makeButtonn.removeAttribute('disabled')
}
}
document.getElementById('apply-button').addEventListener('click', function () {
    let input = document.getElementById('coupon-input')
    let inputValue = input.value
    if (inputValue === 'SELL200') {
        let MainPrice = document.getElementById('MainPrice')
        let discountPrice =  parseFloat(MainPrice.innerText)  * 0.2
        document.getElementById('discount').innerText = discountPrice.toFixed(2)
        let total = document.getElementById('Price')
        let twentyOff = parseFloat(MainPrice.innerText) - parseFloat(MainPrice.innerText) * 0.2
             total.innerText = twentyOff.toFixed(2)
    }

    input.value = ' ';
 
        
})
document.getElementById('close-btn').addEventListener('click',function(){
    let MainPrice = document.getElementById('MainPrice')
    let total = document.getElementById('Price')
    let discount =document.getElementById('discount')
    let parent = document.getElementById('listItem')
    MainPrice.innerText = '0.00'
    discount.innerText = '0.00'
    total.innerText = '0.00'
    parent.innerText =''
    number= 0


})
document.getElementById('make-button').addEventListener('click',function(){
   
    document.getElementById('modal').style.display ='block'
        document.getElementById('close-btn').addEventListener('click',function(){
            document.getElementById('modal').style.display = 'none'
        })

})