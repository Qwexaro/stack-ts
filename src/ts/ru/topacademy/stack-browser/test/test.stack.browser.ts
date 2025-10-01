import { StackBrowser } from "../stack.browser.ts";

const stackBrowser = new StackBrowser();

stackBrowser.openUrl("http");
stackBrowser.openUrl("Udp");
stackBrowser.openUrl("tcp");

console.log(stackBrowser.getCurrent());

stackBrowser.back();

console.log(stackBrowser.getCurrent());

stackBrowser.back();

console.log(stackBrowser.getCurrent());

stackBrowser.back();

stackBrowser.forward();

console.log(stackBrowser.getCurrent());
            
stackBrowser.forward();

console.log(stackBrowser.getCurrent());

stackBrowser.forward();

console.log(stackBrowser.getCurrent());