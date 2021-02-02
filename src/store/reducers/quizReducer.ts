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

interface QuizReducerAction {
    type: QuizActionsTypes,
    payload: Partial<QuizState>
}

export default (state = INITIAL_STATE, action: QuizReducerAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
