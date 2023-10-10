const getBadgeNumber = (str: string): number => {
    const badgeStr = str.split(',')
    if (badgeStr[0] === '') {
        return 0
    } else {
        return badgeStr.length
    }
    return 0
}

export { getBadgeNumber }
