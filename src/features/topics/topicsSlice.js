import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice(
    {
        name: 'topics',
        initialState: { topics: {} },
        reducers: {
            addTopic: (state, action) => {
                if (action.payload) {
                    state.topics[action.payload.id] = action.payload ;
                    state.topics[action.payload.id].quizIds = [];
                }
            }
        }
    }
);

export const selectTopics = (store) => store.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;