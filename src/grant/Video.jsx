import React from 'react';
const VideoEmbed = ({ videoId }) => {
    return (
        <div>

            <iframe className="video-embed-iframe "

                src={"https://youtu.be/nKyvYnzIDgI"}
                allowFullScreen
                title="YouTube Video"
            />

             />;
        </div>
    );
};

export default VideoEmbed;
