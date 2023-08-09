"use strict";
const newTabBtn = document.getElementById("new-tab-btn");
if (!(newTabBtn instanceof HTMLButtonElement)) {
    throw new Error("newTabBtn is not a button");
}
const contentBtn = document.getElementById("content-btn");
if (!(contentBtn instanceof HTMLButtonElement)) {
    throw new Error("contentBtn is not a button");
}
// ==================================
newTabBtn.addEventListener("click", () => {
    console.log("🔥 clicked: new tab button");
    const message = { command: "changeTabColor" };
    chrome.tabs.query({}, (tabs) => {
        const newTabs = tabs.filter((tab) => tab.url === "chrome://newtab/");
        if (newTabs.length === 0)
            return;
        newTabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, message));
    });
});
contentBtn.addEventListener("click", () => {
    const message = { command: "changeTextColor" };
    console.log("🔥 clicked: content button");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log("🔥 message sent from popup!");
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, message, (response) => {
            console.log("🔥 response received in popup :", response);
        });
    });
});
