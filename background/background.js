const DEFAULT_DIRECTORY = "C:/Users/User/Downloads"

onExtensionInstalled(setInitial)

function setInitial(){
    setInitialActive()
    setInitialDirectory()
}

async function setInitialActive() {
    const active = await getActive()
    if (active == null) await setActive(true)
}
async function setInitialDirectory() {
    const directory = await getDirectory()
    if (directory == null) await setDirectory(DEFAULT_DIRECTORY)
}