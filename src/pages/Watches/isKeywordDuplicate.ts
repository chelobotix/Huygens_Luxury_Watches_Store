const isKeywordDuplicate = (currentURL: string, keyword: string, newValue: string): string => {
    const url = new URL(currentURL)
    const searchParams = url.searchParams

    if (searchParams.has(keyword)) {
        searchParams.set(keyword, newValue)
    } else {
        searchParams.append(keyword, newValue)
    }
    return `/watches?${searchParams.toString()}`
}

export { isKeywordDuplicate }
