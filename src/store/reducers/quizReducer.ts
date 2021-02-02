import {
    QuizActionsTypes
} from '../actions/quizActions';

export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface QuizState {
    loading_fetch_questions: boolean;
    error_fetch_questions: string;
    questions: Question[];
}

const INITIAL_STATE: QuizState = {
    loading_fetch_questions: false,
    error_fetch_questions: '',
    questions: []
};

export interface QuizReducerAction {
    type: QuizActionsTypes,
    payload?: Partial<QuizState>
}

export default (state = INITIAL_STATE, action: QuizReducerAction): QuizState => {
  switch (action.type) {
    case QuizActionsTypes.FETCH_QUESTIONS:
        return {
            ...state,
            loading_fetch_questions: true,
        }
    case QuizActionsTypes.FETCH_QUESTIONS_SUCCESS:
        return {
            ...state,
            loading_fetch_questions: false,
            questions: action.payload?.questions || []
        }
    case QuizActionsTypes.FETCH_QUESTIONS_ERROR:
        return {
            ...state,
            loading_fetch_questions: false,
            error_fetch_questions: action.payload?.error_fetch_questions || ""
        }
    default:
        return state;
  }
};
