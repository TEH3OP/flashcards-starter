import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice(
    {
        name: 'topics',
        initialState: { topics: {} },
        reducers: {
            addTopic: (state, action) => {
                if (action.payload) {
                    // console.log(action.payload);
                    state.topics = { ...state.topics, [action.payload.id]: action.payload };
                    state.topics[action.payload.id] = { ...state.topics[action.payload.id], quizIds: [] };
                    // console.log(state.topics.topics);               
                }
            }
        }
    }
);

export const selectTopics = (store) => store.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;