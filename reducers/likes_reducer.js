import _ from 'lodash';
import { LIKE_JOB, CLEAR_LIKED_JOB } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');

    case CLEAR_LIKED_JOB:
      return [];

    default:
      return state;
  }
}