import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice(
    {
        name: 'quizzes',
        initialState: { quizzes: {} },
        reducers: {
            addQuiz: (state, action) => {
                state.quizzes[action.payload.id] = action.payload;
                // state
            }
        }
    }
);

export const selectorSlises = (state) => state.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

