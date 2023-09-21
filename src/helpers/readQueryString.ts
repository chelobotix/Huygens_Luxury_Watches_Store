type IKeywords = Record<string, string>

const readQuearyString = (searchParams: URLSearchParams): IKeywords => {
    const keywords: IKeywords = {}
    for (const entry of searchParams.entries()) {
        const [param, value] = entry
        keywords[param] = value
    }
    return keywords
}

export { readQuearyString }
