import {configureStore} from '@reduxjs/toolkit'
import userSlice, { loginRedux } from './userSlice'
import productSlice from './productSlice'


export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice
    },
})