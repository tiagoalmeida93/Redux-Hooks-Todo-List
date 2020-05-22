import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../sagas/index";
import reducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(composeWithDevTools(applyMiddleware(sagaMiddleware)));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
