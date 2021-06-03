const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = ['pizza', 'pasta', 'ice tea', 'ice cream', 'coke']

fridge.push('pizza');
fridge.push('pasta');
fridge.push('ice tea');
fridge.push('ice cream');
fridge.push('coke');

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.

buyList.shift();
fridge.push('chicharon')

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp() {
    if (fridge.length > 0) {
        let item = fridge.shift()
        buyList.push(item)

    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
    }
}
console.log(buyList)
console.log(fridge)

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    if (buyList.length > 0) {
        let item = buyList.shift()
        fridge.push(item)

    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
    }
}

downButton.addEventListener('click', moveDown)

console.log(buyList)
console.log(fridge)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge