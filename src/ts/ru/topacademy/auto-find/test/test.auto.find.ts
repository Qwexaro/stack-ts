import { AutoFind } from "../auto.find.ts";

const find = new AutoFind();

find.addQuery("погода сегодня");
find.addQuery("погода завтра");
find.addQuery("погода сегодня");
find.addQuery("погода в Москве");
find.addQuery("поисковые системы");
find.addQuery("погода в Москве");
find.addQuery("поисковые системы");
find.addQuery("погода в Питере");

console.log("найдено по запросу пог:");
console.log(find.getSuggestions("пог"));