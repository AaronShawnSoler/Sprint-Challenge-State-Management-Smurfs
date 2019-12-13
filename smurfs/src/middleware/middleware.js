import Axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const SEND_SMURF_START = 'SEND_SMURF_START';
export const SEND_SMURF_SUCCESS = 'SEND_SMURF_SUCCESS';
export const SEND_SMURF_FAILURE = 'SEND_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    Axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('Axios GET', res.data);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
}

export const postSmurfs = smurf => dispatch => {
    Axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            Axios.get('http://localhost:3333/smurfs')
                .then(res => {
                    console.log('Axios GET', res.data);
                    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
                })
        })
}

export const deleteSmurf = id => dispatch => {
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            Axios.get('http://localhost:3333/smurfs')
                .then(res => {
                    console.log('Axios GET', res.data);
                    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
                })
        })
}
