import React from 'react';
//define action within an action creator
function FetchRequest(){
    const Request = 'FETCH_REQUEST';
    return {
        type: Request,
        status: 'loading'
    }
}
export default FetchRequest;
