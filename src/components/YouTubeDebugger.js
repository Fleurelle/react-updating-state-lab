// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
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

    bitrateClick = () => {
        this.setState(() => {
            return {
                errors: [],
                user: null,
                settings: {
                    bitrate: 12,
                    video: {
                        resolution: '1080p'
                    }
                }
            }
        }

        )
    }

    resolutionClick = () => {
        this.setState(() => {
            return {
                errors: [],
                user: null,
                settings: {
                    bitrate: 8,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        }

        )
    }


    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateClick}>
                    {this.state.settings.bitrate}
                </button>

                <button class="resolution" onClick = {this.resolutionClick}>
                {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger;