function onExtensionInstalled(listener) {
    chromeRunTimeOnInstalledAddListener(listener)
}

function getActive() {
    return chromeStorageLocalGet('active')
}

function setActive(activeValue) {
    return chromeStorageLocalSet({ active: activeValue })
}

function getDirectory() {
    return chromeStorageLocalGet('directory')
}

function setDirectory(directoryValue) {
    return chromeStorageLocalSet({ directory: directoryValue })
}

// Chrome API! WARNING: not handling exceptions

function chromeRunTimeOnInstalledAddListener(listener) {
    chrome.runtime.onInstalled.addListener(listener)
}

function chromeStorageLocalGet(key) {
    return new Promise((resolve) =>
        chrome.storage.local.get([key], (result) => {
            resolve(result[key])
        })
    )
}

function chromeStorageLocalSet(object) {
    return new Promise((resolve) => chrome.storage.local.set(object, resolve))
}