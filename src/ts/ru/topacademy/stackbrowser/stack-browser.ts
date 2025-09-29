 export class StackBrowser {
        private _forwardStack: string[];
        private _backwardStack: string[];
        private _current: string;
        
        constructor() {
            this._forwardStack = [];
            this._backwardStack = [];
            this._current = "";
        }

        openUrl(url: string): void {
            if (this._current == null) 
            {
                this._current = url;       
            } 
            else
            {
                this._backwardStack?.push(this._current);
                this._current = url;
                this._forwardStack = [];

            }
        }

        back(): void {
            if (this._backwardStack.length == 0) { console.log("Вернуться нельзя"); return; }
            
            this._forwardStack.push(this._current);
            
            this._current = this._backwardStack.pop()!;
        }


        forward(): void {
            if (this._forwardStack.length == 0) { console.log("Вперед нельзя"); return;  }
            this._backwardStack.push(this._current);
            this._current = this._forwardStack.pop()!;
        }

        getCurrent(): string { return this._current;  }
    }