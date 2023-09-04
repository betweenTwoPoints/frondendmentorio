// ADDING SHIT TO THE LIST

const inp = document.getElementById("userinput");
const btn = document.getElementById("nyan");
const ul = document.querySelector("ul");

function makelist() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(inp.value));

  let deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("delete"));
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);
  inp.value = "";
}

const ayy = function () {
  if (inp.value.length > 0) {
    makelist();
  }
};

const say = function (event) {
  if (inp.value.length > 0 && event.key === "Enter") {
    makelist();
  }
};

inp.addEventListener("keydown", say);

btn.addEventListener("click", ayy);
