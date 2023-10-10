const getBadgeNumber = (str: string): number => {
    const badgeStr = str.split(',')

    if (badgeStr.length === 1 && badgeStr[0] !== '') {
        return 1
    } else if (badgeStr.length > 1) {
        return badgeStr.length
    } else {
        return 0
    }
}

export { getBadgeNumber }
