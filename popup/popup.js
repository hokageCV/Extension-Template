"use strict";
console.log("popup is running");
const newTabBtn = document.getElementById("new-tab-btn");
newTabBtn.addEventListener("click", () => {
    const message = { command: "change new tab bg color" };
    chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
            chrome.tabs.sendMessage(tab.id, message);
        }
    });
});
const contentBtn = document.getElementById("content-btn");
contentBtn.addEventListener("click", () => {
    const message = { command: "change content text color" };
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        for (const tab of tabs) {
            chrome.tabs.sendMessage(tab.id, message);
        }
    });
});
