import { createTheme } from '@mui/material'

const lightMui = createTheme({
    palette: {
        primary: {
            main: '#153452',
            light: '#235789',
        },
        secondary: {
            main: '#EAEAEA',
        },
        info: {
            main: '#CF2C5C',
        },
    },
    typography: {
        fontFamily: ['Playfair Display', 'serif'].join(','),
    },
})

export { lightMui }
