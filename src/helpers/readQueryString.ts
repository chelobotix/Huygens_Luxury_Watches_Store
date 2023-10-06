import { isValidKeyword } from './isValidKeyword'

const readQueryString = (searchParams: URLSearchParams): Record<string, string> | undefined => {
    let validParams: Record<string, string> | undefined
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidKeyword(param)) {
            if (validParams === undefined) {
                validParams = {}
            }
            validParams[param] = value
        }
    }
    if (validParams !== undefined) {
        return validParams
    }
    return undefined
}

export { readQueryString }
