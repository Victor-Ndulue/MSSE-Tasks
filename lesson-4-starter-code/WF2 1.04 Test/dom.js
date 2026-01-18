const $h2 = document.querySelector("h2");
$h2.textContent = "Ken's To Do List";
const $list = document.querySelector("#my-list");
let $items = $list.getElementsByTagName("li");
$h2.setAttribute("class", "blue");


function strikeItem(index){
$$items[index].setAttribute("class", "strike")
}

const $span = document.querySelector("span");

function update() {
  const num = $list.getElementsByTagName("li").length;
  $span.textContent = `${num} left`;
  if (num === 0) {
    alert("Way to go Ken!");
  }
}

function addItem(text) {
  const $item = document.createElement("li");
  $item.textContent = text;
  $list.append($item);
  update();
}

function removeItem(index) {
  const items = $list.getElementsByTagName("li");
  items[index].remove();
  update();
}

function strikeItem(index) {
  const items = $list.getElementsByTagName("li");
  items[index].setAttribute("class", "strike");
  update();
}

update(); // Initial call