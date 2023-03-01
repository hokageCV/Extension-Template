console.log("new tab script is running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === "change new tab bg color") {
        document.documentElement.style.setProperty("--baseBG", "#ddfcf7");
        document.documentElement.style.setProperty("--mainText", "#041622");
    }
});
