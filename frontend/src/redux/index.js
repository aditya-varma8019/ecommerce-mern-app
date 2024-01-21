import {configureStore} from '@reduxjs/toolkit'
import userSlice, { loginRedux } from './userSlice'


export const store = configureStore({
    reducer: {
        user: userSlice
    },
})