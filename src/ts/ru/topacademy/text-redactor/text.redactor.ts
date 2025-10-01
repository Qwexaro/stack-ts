import type { Action } from "./types/Action.ts";

export class TextRedactor {
    private content: string = "";
    private undoStack: Action[] = [];
    private redoStack: Action[] = [];

    do(action: Action) {
        this.apply(action);
        this.undoStack.push(action);
        this.redoStack = [];
    }

    undo() {
        if (this.undoStack.length === 0) return;

        const action = this.undoStack.pop()!;
        const inverse = this.inverseAction(action);
        this.apply(inverse);
        this.redoStack.push(action);
    }

    redo() {
        if (this.redoStack.length === 0) return;

        const action = this.redoStack.pop()!;
        this.apply(action);
        this.undoStack.push(action);
    }

    private apply(action: Action) {
        switch (action.type) {
        case "insert": this.content += action.text; break;
        case "delete": this.content = this.content.slice(0, this.content.length - action.text.length); break;
        }
    }

    private inverseAction(action: Action): Action 
    {
        return action.type === "insert" ? { type: "delete", text: action.text } : { type: "insert", text: action.text };
    }

    getContent() { return this.content; }
}