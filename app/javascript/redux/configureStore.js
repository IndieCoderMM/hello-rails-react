import { configureStore } from '@reduxjs/toolkit';
import GreetingReducer from './greeting';

export default configureStore({ reducer: GreetingReducer });
