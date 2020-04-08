
let button = document.getElementById("button");

if (!localStorage.getItem('add')) {
    localStorage.setItem('add', 0);
}

button.addEventListener("click", () => {
    count();
});

function count() {
    let add = localStorage.getItem('add');
    document.getElementById("count").innerHTML = add;
    add++;
    localStorage.setItem('add', add);
}

