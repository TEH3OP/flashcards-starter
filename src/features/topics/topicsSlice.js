import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice(
    {
        name: 'topics',
        initialState: { topics: {} },
        reducers: {
            addTopic: (state, action) => {
                if (action.payload) {
                    console.log('addTopic');
                    // console.log(action.payload);   
                    console.log(state.topics);
                    state.topics[action.payload.id] = action.payload;
                    state.topics[action.payload.id].quizIds = [];
                }
            },
            addQuizsToTopic: (state, action) => {
                // console.log('addQuizsToTopic action');
                // console.log(action.payload);
                // console.log(state.topics);

                state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
            }

        }
    }
);

export const selectorTopics = (store) => store.topics.topics;

export const { addTopic, addQuizsToTopic } = topicsSlice.actions;

export default topicsSlice.reducer;