import MP4Demuxer from './mp4Demuxer.js'

export default class Videoprocessor {
    #mp4MP4Demuxer
    /**
     * 
     * @param {object} options
     * @param {import ('./mp4Demuxer.js').default} options.mp4MP4Demuxer 
     */
    constructor ({mp4MP4Demuxer}) {
        this.#mp4MP4Demuxer =MP4Demuxer
    }
    mp4Decoder(encoderConfig, stream) {

    }
    
    async start ({file, encoderConfig}) {
        const stream = file.stream()
    const fileName = file.name.split('/').pop().replace('.mp4','')
    }
}