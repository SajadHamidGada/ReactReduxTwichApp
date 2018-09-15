import React from 'react';
import {getState} from 'redux';
import Loader from '../presentationals/Loader';
import RequestApi from '../../actions/RequestApi';

import StreamCard from '../presentationals/StreamCard';
import Alert from  '../presentationals/Alert';

class Streams extends React.Component{
    componentWillMount(){
        this.props.store.subscribe(this.forceUpdate.bind(this));
        this.props.store.dispatch(RequestApi());
    }
   
    render(){
        const storeProps = this.props.store.getState();
        const status = storeProps.status;
        const error = storeProps.error;
        const streamCardItems = storeProps.streams.map((stream) =>
  <StreamCard
    key = { stream._id }
    streamCover = { stream.preview.medium }
    streamLink = { stream.channel.url }
  />
);
        
return (
    <div>
    {status === "loading" ? (
       <Loader />
     ) : (
        status === "successful" ? (
          <div className="stream-cards">
          {streamCardItems}
          </div>
        ) : (
            status === "error" ? (
                <div>
                  <Alert error = { error } />
                </div>
              ) : (
            <div></div>
          )
        )
      )
    }
    </div>
  )
    }
}

export default Streams;
