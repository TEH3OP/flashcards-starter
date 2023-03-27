import { createSlice } from "@reduxjs/toolkit";
import { addQuizsToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice(
    {
        name: 'quizzes',
        initialState: { quizzes: {} },
        reducers: {
            addQuiz: (state, action) => {
                // console.log('addQuiz');    
                // console.log(state.quizzes);    
                // console.log(state.topics);  
                state.quizzes[action.payload.id] = action.payload;
            },
        }
    }
);

const { addQuiz } = quizzesSlice.actions;

export const thunkAddQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        const quizId = payload.id;
        const topicId = payload.topicId;
        dispatch(addQuizsToTopic({quizId, topicId}));
    }
};

export const selectorQuizzes = (state) => state.quizzes.quizzes;

export default quizzesSlice.reducer;

