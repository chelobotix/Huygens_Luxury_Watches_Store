import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ISearch } from '../../types/SearchInterface'

type PropertyAction = Record<string, string>

const initialState: ISearch = {
    name: null,
    brand: null,
    minPrice: null,
    maxPrice: null,
    gender: null,
    caseMaterial: null,
    movement: null,
    dialColor: null,
    caseBack: null,
    strapMaterial: null,
    strapColor: null,
}

/* ---------------------------------- Slice --------------------------------- */
const SearchSlice = createSlice({
    name: 'Search',
    initialState,
    reducers: {
        includeInSearch: (state, action: PayloadAction<PropertyAction>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { includeInSearch } = SearchSlice.actions
export default SearchSlice.reducer
