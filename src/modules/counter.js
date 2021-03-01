import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// getState를 쓰지 않는다면 굳이 파라미터롤 받아올 필요가 없다.
export const increaseAsync = () => (dispatch, getState) => {
  setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: state => ({
      number: state.number + 1,
    }),
    [DECREASE]: state => ({
      number: state.number - 1,
    }),
  },
  initialState
);

export default counter;
