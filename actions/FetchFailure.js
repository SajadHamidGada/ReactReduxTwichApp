import React from 'react';
//define action within an action creator
function FetchFailure(error){
    const Failure = 'FETCH_FAILURE';
    return {
        type: Failure,
        status:'error',
        error
    }
}
export default FetchFailure;

