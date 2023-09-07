import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { type Watch } from './watchInterface'

interface WatchesState {
    watches: Watch[]
    isLoading: boolean
    error: string | undefined
}

const initialState: WatchesState = {
    watches: [],
    isLoading: false,
    error: undefined,
}

/* ---------------------------------- Fetch --------------------------------- */
const fetchDataGet = createAsyncThunk('fetchPosts', async (url: string) => {
    const response = fetch(url)
        .then(async (response) => await response.json())
        .then((data) => {
            return data
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
                isLoading: false,
                error: action.error.message,
            }
        })
    },
})

export { fetchDataGet }
export default WatchSlice.reducer
