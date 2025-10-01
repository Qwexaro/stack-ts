import { Chat } from "../chat/Chat.ts";

export function testMassenger() {
    
    const chat = new Chat(3);
    
    chat.addMessage("Привет");
    chat.addMessage("Как дела?");
    chat.addMessage("Что нового?");
    chat.addMessage("Ананас?");
    console.log(chat.getHistory());
    
    chat.addMessage("Погода отличная");
    console.log(chat.getHistory());
}