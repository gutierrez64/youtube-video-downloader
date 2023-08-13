const directoryI = document.getElementById('directory');
const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', async () => {
    try {
        let url = await getCurrentTabUrl();
        const directory = directoryI.value && directoryI.value.includes("C:/") ? directoryI.value : await getDirectory();
        requestApi(url, directory);
    } catch (error) {
        console.error(error);
    }
});

function getCurrentTabUrl() {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            resolve(tabs[0].url);
        });
    });
}

function requestApi(url, directory) {
    alert(`URL: ${url} DIRECTORY: ${directory}`)
    const result = true
    if(result){
        setDirectory(directory)
    }
}