import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import { type IWatches } from './WatchesInterface'
import { type IBrands } from './BrandsInterface'

interface GlobalState {
    watchesData: IWatches | null
    brandsData: IBrands | null
    isLoading: boolean
    error: string | undefined
}

const initialState: GlobalState = {
    watchesData: null,
    brandsData: null,
    isLoading: true,
    error: undefined,
}

/* ---------------------------------- Fetch --------------------------------- */
// Fetch Watches Data
const fetchWatchesGet = createAsyncThunk('fetchWatchesGet', async (url: string) => {
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

// Fetch Brands Data
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
        builder.addCase(fetchWatchesGet.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchWatchesGet.fulfilled, (state, action: PayloadAction<IWatches>) => {
            state.isLoading = false
            state.watchesData = action.payload
        })

        builder.addCase(fetchWatchesGet.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export { fetchWatchesGet, type GlobalState }
export default WatchSlice.reducer
