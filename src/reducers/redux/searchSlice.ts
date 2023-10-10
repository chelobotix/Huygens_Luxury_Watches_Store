import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ISearch } from '../../types/SearchInterface'

type PropertyAction = Record<string, string>

const initialState: ISearch = {
    name: '',
    brand: '',
    minPrice: '',
    maxPrice: '',
    gender: '',
    caseMaterial: '',
    movement: '',
    dialColor: '',
    caseBack: '',
    strapMaterial: '',
    strapColor: '',
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
