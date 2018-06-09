import React,{Component} from "react"                 //core React library
import ReactDOM from "react-dom"                 // ReactDOM library
import YOUTUBE_API_KEY from './keys'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

import VideoList from './components/video_list'
import VideoDetail from'./components/video_detail'
import _ from 'lodash'
//functional component
//component is like class, you need to instantiate it before rendering
// const App = () => {
// return <div>
// Search Video :
//   <SearchBar/>
// </div>
// }

//class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = { videos : [] , selectedVideo: null};
    this.videoSearch('despacito');
  }

videoSearch(term){
  //setting confuguration and callback function
  YTSearch(
    { key:YOUTUBE_API_KEY, term:term},
    (videos) => {
      // this.setState({videos});
      //or,
      this.setState({
        videos: videos,
        selectedVideo : videos[0]
       });
    });
}

  render(){

    const videoSearchThrottle = _.debounce( (term) => this.videoSearch(term), 300);

    return (
      <div>
        Search Video :
        <SearchBar
          onSearchTermChanged = { videoSearchThrottle }
          />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={clickedVideo => this.setState({selectedVideo: clickedVideo})}
          videos={this.state.videos}
          />
      </div>
  );
  }
}

ReactDOM.render(<App />,  document.querySelector('.container'));
