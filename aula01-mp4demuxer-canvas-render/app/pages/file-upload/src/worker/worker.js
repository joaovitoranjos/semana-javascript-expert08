import Videoprocessor from "./videoProcessor.js"
import MP4Demuxer from "./mp4Demuxer.js"

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

const mp4Demuxer = new mp4Demuxer()
const videoProcessor = new Videoprocessor({
    mp4Demuxer
})



onmessage = async ({ data }) => {
    
    await videoProcessor.start({
        file: data.file,
        encoderConfig,
        sendMessage(message) {
            self.postMessage(message)
        }
    }) 

        self.postMessage({
            status: 'done'
        })
    };
