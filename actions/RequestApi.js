import axios from 'axios';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';
import FetchRequest from './FetchRequest';

function RequestApi() {
  return (dispatch) => {
    //API request
    axios.get('https://api.twitch.tv/kraken/streams/featured?&client_id=ltdsif20e2sv2xuli23n3692ccab0a')
    .then(response => {console.log(response)
        const streams = response.data.featured.map(function(feat) {
          return feat.stream;
        });
       
        //dispatch FetchSuccess, order 2
    dispatch(FetchSuccess(streams))
      })
      .catch(error =>  dispatch(FetchFailure(e))) //dispatch FetchFailure, order 3

    //dispatch FetchRequest, order 1
    dispatch(FetchRequest())
  }
}

export default RequestApi

