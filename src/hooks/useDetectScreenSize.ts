import { createTheme, useMediaQuery } from '@mui/material'

const useDetectScreenSize = (direction: string, size: string): boolean => {
    const theme = createTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return isSmallScreen
}

export { useDetectScreenSize }
