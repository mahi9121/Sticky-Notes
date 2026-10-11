const heading = document.createElement("h1");
heading.textContent = "Sticky Notes";
document.body.appendChild(heading);
const input = document.createElement("textarea");
input.placeholder = "Type a new note...";
document.body.appendChild(input);
const addBtn = document.createElement("button");
addBtn.textContent = "+";
document.body.appendChild(addBtn);
const notes = document.createElement("div");
document.body.appendChild(notes);


document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";
document.body.style.backgroundColor = "#f1f1f1";
document.body.style.boxShadow = "0 0 10px #ddd";
heading.style.fontFamily = "'DM Serif', cursive";
heading.style.color = "#333";


addBtn.addEventListener("click", function() {
    const note = document.createElement("div");
    const text = document.createElement("p");
    const deleteBtn = document.createElement("button");
    text.textContent = input.value;
    deleteBtn.textContent = "X";
    if (notes.children.length % 2 === 0) {
        note.style.backgroundColor = "#d1e1ff";
    } else {
        note.style.backgroundColor = "#fefffe";
    }
    note.style.position = "relative";
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "0";
    deleteBtn.style.right = "0";
    deleteBtn.style.backgroundColor = "#e54b3a";
    deleteBtn.style.borderRadius = "5px";
    note.appendChild(text);
    note.appendChild(deleteBtn);
    notes.appendChild(note);
    deleteBtn.addEventListener("click", function() {
        note.remove();
    });
    input.value = "";
});


input.style.backgroundColor = "#fefec0";
addBtn.style.backgroundColor = "#11ff00";
addBtn.addEventListener("mouseup", function() {
    addBtn.style.transform = "scale(1.1)";
});
addBtn.addEventListener("mousedown", function() {
    addBtn.style.transform = "scale(1)";
});
