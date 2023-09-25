import { isValidIWatchKey } from './isValidIWatchKey'

const readQueryString = (searchParams: URLSearchParams): string[][] | undefined => {
    const validParams: string[][] = []
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        if (isValidIWatchKey(param)) {
            validParams.push([param, value])
        }
    }
    if (validParams !== undefined) {
        return validParams
    }
    return undefined
}

export { readQueryString }
