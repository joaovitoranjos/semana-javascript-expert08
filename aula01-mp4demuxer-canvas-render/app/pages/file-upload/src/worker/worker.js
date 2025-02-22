import Videoprocessor from "./videoProcessor.js"
import MP4Demuxer from "./mp4Demuxer.js"
import CanvasRenderer from "./canvasRender.js"

const qvgaConstraints = {
    with: 320,
    height: 240
}
const vgaConstraints = {
    with: 640,
    height: 480
}
const hdConstraints = {
    with: 1280,
    height: 720
}

const encoderConfig = {
    ...qvgaConstraints,
    bitrate: 10e6,
    // WebM
    codec: 'vp09.00.10.08',
    pt: 4,
    hardwareAcelleration: 'prefer-software',

    // MP4
    //codec: 'avc1.42002A',
    //pt: 1,
    //hardwareAcelleration: 'prefer-hardware',
    //avc: { format: 'annexb'}
}

const mp4Demuxer = new MP4Demuxer()
const videoProcessor = new Videoprocessor({
    mp4Demuxer
})


CanvasRenderer
onmessage = async ({ data }) => {
    const renderFrame = CanvasRenderer.getRenderer(data.canvas)
    await videoProcessor.start({
        file: data.file,
        renderFrame,
        encoderConfig,
        sendMessage(message) {
            self.postMessage(message)
        }
    }) 

        self.postMessage({
            status: 'done'
        })
    };
