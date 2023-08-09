chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === "changeTabColor") {
        document.documentElement.style.setProperty("--baseBG", "#ddfcf7");
        document.documentElement.style.setProperty("--mainText", "#041622");
    }
});
