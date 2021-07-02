import {fetchGameData, fetchGameDetail} from '../../api/gameAPI';
import {changeLoading} from './loadingAction';

export const FETCH_GAME_DATA_SUCCESS = 'FETCH_GAME_DATA_SUCCESS';
export const FETCH_GAME_DATA_FAILED = 'FETCH_GAME_DATA_FAILED';

export const FETCH_GAME_DETAIL_SUCCESS = 'FETCH_GAME_DETAIL_SUCCESS';

export const fetchGameDataSuccess = payload => ({
  type: FETCH_GAME_DATA_SUCCESS,
  payload,
});

export const fetchGameDataFailed = () => ({type: FETCH_GAME_DATA_FAILED});

export const fetchGameDetailSuccess = payload => ({
  type: FETCH_GAME_DETAIL_SUCCESS,
  payload,
});

export const fetchGameDataAction = () => {
  return async dispatch => {
    try {
      const result = await fetchGameData();
      setTimeout(() => {
        console.log(result.data);
        dispatch(fetchGameDataSuccess(result.data));
        dispatch(changeLoading(false));
      }, 5000);
    } catch (error) {
      dispatch(fetchGameDataFailed());
      dispatch(changeLoading(false));
      console.log('fetchGameDataAction', error);
    }
  };
};

export const fetchGameDetailAction = id => {
  return dispatch => {
    fetchGameDetail(id)
      .then(res => {
        // console.log('res:', res);
        dispatch(fetchGameDetailSuccess(res.data));
        console.log('res.data: ', res.data);
        dispatch(changeLoading(false));
      })
      .catch(err => {
        dispatch(changeLoading(false));
        console.log('fetchGameDetailAction', err);
      });
  };
};
