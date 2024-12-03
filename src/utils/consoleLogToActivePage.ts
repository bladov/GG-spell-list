function sendMsg(msg: string) {
    console.log('===========================')
    console.log(msg)
    console.log('==========================')
}

function execScript(tab: any, msg: string) {
    // Выполнить функцию на странице указанной вкладки
    // и передать результат ее выполнения в функцию onResult
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id, allFrames: true },
            func: sendMsg,
            args: [msg]
        }
    )
}

export const logToActivePage = (msg: string) => {
    chrome.tabs.query({ active: true }, function (tabs) {
        const tab = tabs[0];
        // и если она есть, то выполнить на ней скрипт
        if (tab) {
            execScript(tab, msg);
        } else {
            alert("Пошло что-то не так")
        }
    })
}