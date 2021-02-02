import {combineReducers, applyMiddleware, createStore, Store} from 'redux';
import ReduxThunk from 'redux-thunk';

import quizReducer, { QuizState } from './reducers/quizReducer';

const rootReducer = combineReducers({
    quizReducer,
});

export interface ApplicationState {
    quizReducer: QuizState;
}

const store: Store<ApplicationState> = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store
