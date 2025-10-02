import { testAutoFind } from "./src/ts/ru/topacademy/auto-find/test/test.auto.find.ts";
import { testBankQueue } from "./src/ts/ru/topacademy/bank-queue/test/test.bank.queue.ts";
import { testCryptography } from "./src/ts/ru/topacademy/cryptography/test/test.cryptography.ts";
import { testExcpectCode } from "./src/ts/ru/topacademy/excpect-code/test-expect-code/test.expect.code.ts";
import { testMassenger } from "./src/ts/ru/topacademy/massenger/test/test.massenger.ts";
import { testCountUniqueUsers } from "./src/ts/ru/topacademy/social-suite/test-social-suite/test.count.unique.users.ts";
import { testStackBrowser } from "./src/ts/ru/topacademy/stack-browser/test/test.stack.browser.ts";
import { testTaskImimitator } from "./src/ts/ru/topacademy/task-imitator/test/test.task.imitator.ts";
import { testTextRedactor } from "./src/ts/ru/topacademy/text-redactor/test-text-redactor/test.text.redactor.ts";
import { testDictionary } from "./src/ts/ru/topacademy/translater/test/test.dictionary.ts";

console.log("----------------------------\nзадание 1:");

testStackBrowser();

console.log("-----------------------------\nзадание 2:");

testBankQueue();

console.log("-----------------------------\nзадание 3:");

testExcpectCode();

console.log("-----------------------------\nзадание 4:");

testTaskImimitator();

console.log("-----------------------------\nзадание 5:");

testDictionary();

console.log("-----------------------------\nзадание 6:");

testCountUniqueUsers();

console.log("-----------------------------\nзадание 7:");

testMassenger();

console.log("-----------------------------\nзадание 8:");

testAutoFind();

console.log("-----------------------------\nзадание 9:");

testCryptography();

console.log("-----------------------------\nзадание 10:");

testTextRedactor();