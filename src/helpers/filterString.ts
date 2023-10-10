const filterString = (str: string, target: string): string => {
    const strArray = str.split(',')
    return strArray.filter((item) => item !== target).join(',')
}

export { filterString }
