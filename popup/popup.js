console.log("popup is running");

const newTabBtn = document.getElementById("new-tab-btn");
newTabBtn.addEventListener("click", () => {
    const message = { command: "change new tab bg color" };

    chrome.tabs.query({}, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });
});

const contentBtn = document.getElementById("content-btn");
contentBtn.addEventListener("click", () => {
    const message = { command: "change content text color" };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.tabs.sendMessage(tabs[i].id, message);
        }
    });
});
