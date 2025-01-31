function onResult() {
  console.log('onResult', 23)
}

function sendMsg(msg: string) {
  try {
    const textarea: any = document.querySelector('textarea[title="Text Chat Input"]')
    const chatSendBtn: any = document.querySelector('#chatSendBtn')
    textarea.value = msg
    chatSendBtn.click()
  }
  catch (error) {
    console.error('error', error)
  }
}

function execScript(tab: any, msg: string) {
  // Выполнить функцию на странице указанной вкладки
  // и передать результат ее выполнения в функцию onResult
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: true },
      func: sendMsg,
      args: [msg],
    },
    onResult,
  )
}

export function sendMsgToChat(msg: string) {
  chrome.tabs.query({ active: true }, (tabs) => {
    const tab = tabs[0]
    // и если она есть, то выполнить на ней скрипт
    if (tab) {
      execScript(tab, msg)
    }
    else {
      alert('Перейдите на страницу roll20, там где есть чат')
    }
  })
}
