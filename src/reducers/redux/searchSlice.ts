import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ISearch } from '../../types/SearchInterface'

interface PropertyAction {
    key: keyof ISearch
    value: any
}

const initialState: ISearch = {
    name: [],
    brand: [],
    minPrice: [],
    maxPrice: [],
    gender: [],
    caseMaterial: [],
    movement: [],
    dialColor: [],
    caseBack: [],
    strapMaterial: [],
    strapColor: [],
}

/* ---------------------------------- Slice --------------------------------- */
const SearchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        includeInSearch: (state, action: PayloadAction<PropertyAction>) => {
            const { key, value } = action.payload

            state[key] = [...state[key], value]
        },
    },
})

export const { includeInSearch } = SearchSlice.actions
export default SearchSlice.reducer
