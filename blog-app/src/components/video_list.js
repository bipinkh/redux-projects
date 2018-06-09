import React from 'react';
import VideoListItem from "./video_list_item"

const VideoList = (props) => {

  const videoitems = props.videos.map((video) => {
    return (
      < VideoListItem
       onVideoSelect={props.onVideoSelect}
       video={video}
       key={video.etag} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      found {props.videos.length} results
      {videoitems}
    </ul>
  )
}

export default VideoList;
