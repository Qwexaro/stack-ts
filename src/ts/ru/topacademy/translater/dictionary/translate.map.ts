export class TranslateMap {

    dictionary;

    constructor() {
        this.dictionary = new Map();
    }

    addWord(word: string, translation: string): void {
        this.dictionary.set(word, translation);
    }

    findTranslation(word: string): string {
        if (this.dictionary.has(word)) {
            return this.dictionary.get(word);
        }
        return "Перевод не найден";
    }

    showAll(): string {
        if (this.dictionary.size === 0) {
            return "Словарь пуст";
        }
        
        let result = "";
        
        for (const [word, translation] of this.dictionary) {
            result += `${word} — ${translation}\n`;
        }
        return result.trim();
    }
}