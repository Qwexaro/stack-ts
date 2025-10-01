import { TextRedactor } from "../text.redactor.ts";

const redactor = new TextRedactor();

redactor.do({ type: "insert", text: "Прив" });
console.log(redactor.getContent());

redactor.do({ type: "insert", text: "ет!" });
console.log(redactor.getContent());

redactor.undo();
console.log(redactor.getContent());

redactor.redo();
console.log(redactor.getContent());

redactor.do({ type: "delete", text: "ет!" });
console.log(redactor.getContent());