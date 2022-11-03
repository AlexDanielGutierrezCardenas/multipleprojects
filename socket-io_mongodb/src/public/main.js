import { loadNotes,oneNewNote,onSelected } from "./socket.js";
import {onHandleSubmit,renderNotes,appendNote,fillForm} from "./ui.js";

oneNewNote(appendNote);
loadNotes(renderNotes);
onSelected(fillForm);

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);
