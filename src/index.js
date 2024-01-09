function component() {
  var element = document.createElement("div");

  var btn = document.createElement("button");
  btn.innerText = "Click me and check the console";

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
