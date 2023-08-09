"use strict";
console.log("new tab script is running");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("🔥 message received in new tab script:", message);
    if (message.command === "changeTabColor") {
        console.log("🔥 chaning color");
        document.documentElement.style.setProperty("--baseBG", "#ddfcf7");
        document.documentElement.style.setProperty("--mainText", "#041622");
    }
});
