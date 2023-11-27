const addBtn = document.querySelector("#addBtn");
const notesContainer = document.querySelector("#notesContainer");

addNote();

function addNote() {
    addBtn.addEventListener("click", () => {
        notesContainer.prepend(createNote());
    })
}

function createNote() {
    const addTitle = document.querySelector("#addTitle");
    const addText = document.querySelector("#addText");

    const createNoteContainer = document.createElement("div");
    createNoteContainer.id = "note";

    const createNoteTitleContainer = document.createElement("div");
    createNoteTitleContainer.id = "noteTitleContainer";

    const createNoteTitle = document.createElement("h3");
    createNoteTitle.id = "noteTitle";

    const createNoteRemoveBtn = document.createElement("button");
    createNoteRemoveBtn.id = "noteRemove";

    const createNoteRemoveIcon = document.createElement("img");
    createNoteRemoveIcon.src = "./assets/remove.svg";

    const createNoteText = document.createElement("p");
    createNoteText.id = "noteText";

    if (addText.value == "") {
        return "";
    }

    createNoteText.textContent = addText.value;
    if (addTitle.value !== "") {
        createNoteTitle.textContent = addTitle.value;
        createNoteTitleContainer.append(createNoteTitle);
    }

    createNoteRemoveBtn.append(createNoteRemoveIcon);
    createNoteTitleContainer.append(createNoteRemoveBtn);
    createNoteContainer.append(createNoteTitleContainer);
    createNoteContainer.append(createNoteText);


    addText.value = "";
    addTitle.value = "";

    createNoteRemoveBtn.addEventListener("click", () => {
        createNoteContainer.remove();
    });

    return createNoteContainer;
}