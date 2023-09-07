import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { type Watch } from './watchInterface'

interface WatchState {
    watches: Watch[]
    isLoading: boolean
    error: string | undefined
}

const initialState: WatchState = {
    watches: [],
    isLoading: true,
    error: undefined,
}

/* ---------------------------------- Fetch --------------------------------- */
const fetchDataGet = createAsyncThunk('fetchWatchs', async (url: string) => {
    const response = fetch(url)
        .then(async (response) => await response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
        })
    return await response
})

/* ---------------------------------- Slice --------------------------------- */
const WatchSlice = createSlice({
    name: 'Person',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDataGet.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchDataGet.fulfilled, (state, action: PayloadAction<Watch[]>) => {
            state.watches = action.payload
            state.isLoading = false
        })

        builder.addCase(fetchDataGet.rejected, (state, action) => {
            console.log('Error', action.error.message)
            state = {
                ...state,
                isLoading: true,
                error: action.error.message,
            }
        })
    },
})

export { fetchDataGet }
export default WatchSlice.reducer
