import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

// store를 만들어주는 함수
const create = () => {
  // sagaMiddleware 생성
  const sagaMiddleware = createSagaMiddleware();

  // store 생성하고 devtools과 sagaMiddleware 적용
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // sagaMiddleware에 rootSaga를 연결
  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
