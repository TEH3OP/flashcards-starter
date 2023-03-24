import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';
import quizzesSlice from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesSlice,
    cards: cardsReducer
  },
});
