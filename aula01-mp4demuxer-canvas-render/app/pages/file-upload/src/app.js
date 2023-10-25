import Clock from './deps/clock.js';
import View from './view.js';
const view = new View()
const clock = new Clock()

let took = ''
view.configureOnFileChange(file => {
    clock.start((time) => {
        took = time;
        view.updateElapsedTime(`Process started ${time}`)
    })

    setTimeout(() => {
        clock.stop()
        view.updateElapsedTime(`Process took ${took.replace('ago', '')}`)
    }, 5000)
})

btnUploadVideo.addEventListener('click', () => {
    // trigger file input
    fileUpload.click()
})

async function fakeFetch() {
    const filePath = '/videos/frag_bunny.mp4'
    const reponse = await fetch(filePat)

    //const reponse = await fetch(filePath, {
    //   method: "HEAD"
    // })
    // traz o tamanho do arquivo!
    // response.headers.get('content-lenght')
    // debugger
    const file = new File ([await Response.blob()], filePath, {
        type: 'video/mp4',
        lastModified: Date.now()
    })
    const event = new Event('change')
    Reflect.defineProperty (
        event,
        'target',
        {value: {files: [file] } }
    )
    
    document.getElementById('fileUpload').dispatchEvent(event)

}

fakeFetch()



