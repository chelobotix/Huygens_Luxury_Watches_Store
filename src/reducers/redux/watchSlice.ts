import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { type IWatches } from './WatchesInterface'

interface WatchState {
    data: IWatches | null
    isLoading: boolean
    error: string | undefined
}

const initialState: WatchState = {
    data: null,
    isLoading: true,
    error: undefined,
}

/* ---------------------------------- Fetch --------------------------------- */
const fetchDataGet = createAsyncThunk('fetchWatchs', async (url: string) => {
    const response = fetch(url)
        .then(async (res) => await res.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log(error)
            throw error
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

        builder.addCase(fetchDataGet.fulfilled, (state, action: PayloadAction<IWatches>) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(fetchDataGet.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export { fetchDataGet, type WatchState }
export default WatchSlice.reducer
