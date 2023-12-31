import { configureStore } from '@reduxjs/toolkit'
import watchReducer from './watchSlice'
import searchReducer from './searchSlice'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        watch: watchReducer,
        search: searchReducer,
    },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
