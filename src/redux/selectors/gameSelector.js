import {mapIP} from '../../utils/common';

export const getGamesState = state => {
  const result = mapIP(state.gameReducer.arrayGames);
  return result;
};

export const getGameDetailState = state => {
  // console.log(state.gameReducer.gameDetail);
  const result = mapIP(state.gameReducer.gameDetail);
  return result;
};
