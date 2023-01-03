import { createActions, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";

// state 구상
interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

// prefix란 action 타입 앞에 붙이는 접두사
const prefix = "my-books/auth";

// action 타입
export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

// 기존 state와 action을 받아서 새로운 state를 반환
// 제너릭으로 state와 action의 타입을 지정
const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload, // action.payload는 action을 dispatch할 때 넣어준 값
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload, // action.payload는 action을 dispatch할 때 넣어준 값
    }),
  },
  initialState, // 초기 state
  { prefix } // prefix를 넣어줘야 action 타입이 중복되지 않는다.
);

export default reducer;

// saga
export function* authSaga() {}
