import { TranslateMap } from "../dictionary/translate.map.ts";

const translation = new TranslateMap();

translation.addWord("cat", "кот");
translation.addWord("hello", "привет");
translation.addWord("dog", "собака");

console.log(translation.findTranslation("cat"));
console.log(translation.findTranslation("bird"));
console.log(translation.showAll())