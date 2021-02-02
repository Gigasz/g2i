import axios from 'axios'
import {Dispatch} from 'redux'
import {QuizReducerAction} from '../reducers/quizReducer'

export enum QuizActionsTypes {
    FETCH_QUESTIONS = 'FETCH_QUESTIONS',
    FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS',
    FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR',
}

export const fetchQuestions = () => async (dispatch: Dispatch<QuizReducerAction>) => {
    dispatch({
        type: QuizActionsTypes.FETCH_QUESTIONS,
    })
    try {
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')

        dispatch({
            type: QuizActionsTypes.FETCH_QUESTIONS,
            payload: {
                questions: data?.results
            }
        })
    } catch (error) {
        dispatch({
            type: QuizActionsTypes.FETCH_QUESTIONS,
            payload: {
                error_fetch_questions: 'Failed to fetch questions'
            }
        })
    }
}