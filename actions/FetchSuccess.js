import React from 'react';
//define action within an action creator
function FetchSuccess(streams){
    
    const Success = 'FETCH_SUCCESS';
    return {
        type:Success,
        status: 'successful',
        streams
    }
}
export default FetchSuccess;
