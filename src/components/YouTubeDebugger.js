// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    //1. set initialState
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    // Attempting to complete without hard coding - mutating state
    bitrateClick = () => {
        console.log("This should be the bitrate value")
        console.log({ ...this.state.settings.bitrate })
        this.setState(() => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        })
    }



    resolutionClick = () => {
        //having issues with my environment. WIll be console logging to ensure data is accurate
        console.log("This should be the resolution value")
        console.log({ ...this.state.settings.video })
        this.setState(() => {
            return {
                //All i've done is make a copy of settings and within settings, make
                //a copy of video because the spread operator kept appending the resolution key at the bottom of the 
                //object. See https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: "720p"
                    }
                }

            }
        }

        )
    }


    render() {
        return (
            <div>
                {/* 2. should update the bitrate when the `.bitrate` button is clicked */}
                <button className="bitrate" onClick={this.bitrateClick}>
                    {this.state.settings.bitrate}
                </button>
                {/* 3. should update the video resolution when the `.resolution` button is clicked */}
                <button className="resolution" onClick={this.resolutionClick}>
                    {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger;