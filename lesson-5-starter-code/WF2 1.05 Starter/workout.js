const $list = document.querySelector("#my-list")

const $span = document.querySelector("span")

let $items = $list.getElementsByTagName("li")
let $buttons = document.getElementsByTagName("button")

let num = $items.length

const $addButton = document.querySelector("#addBtn")
$addButton.addEventListener("click", addItem)

function update(){
    let $strikes = document.querySelectorAll(".strike")
    let remaining = num - $strikes.length
    $span.textContent = `(${remaining} left!)`
    if(remaining == 0){
        setTimeout( alert, 500, "Way to go Ken!")
    }
}

function addItem(){
    let $item = document.createElement("li")
    let $input = document.querySelector("#myInput")
    $item.textContent = $input.value
    $item.addEventListener("click", strikeItem)
    $input.value = ""
    $addButton($item)
    $list.append($item)
    num += 1
    update()
}

function removeItem(){
   this.parentNode.remove()
   num -=1
   update()
}

function strikeItem(){
    this.list.toggle("strike")
    update()
}

function addButton($item){
    let $button = document.createElement("button");
    $button.textContent ="X";
    item.append($button)
    $button.addEventListener("click", removeItem)
}


for( const item of $items) {
   item.addEventListener("click", strikeItem)
}

for (const button of $buttons){
    item.addEventListener("click", removeItem)
}