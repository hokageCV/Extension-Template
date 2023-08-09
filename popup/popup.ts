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
    const message = { command: "changeTabColor" };
    chrome.tabs.query({}, (tabs) => {
        const newTabs = tabs.filter((tab) => tab.url === "chrome://newtab/");
        if (newTabs.length === 0) return;

        newTabs.forEach((tab) =>
            chrome.tabs.sendMessage(tab.id as number, message)
        );
    });
});

contentBtn.addEventListener("click", () => {
    const message = { command: "changeTextColor" };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTabId = tabs[0].id as number;

        chrome.tabs.sendMessage(activeTabId, message, (response) => {
            console.log("🔥 response received in popup: ", response);
        });
    });
});
