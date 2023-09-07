import { removeWhiteSpace } from './removeWhiteSpace'

const imgPath = (brand: string, model: string, file: string): string => {
    const modelFolder = removeWhiteSpace(model)
    const brandFolder = removeWhiteSpace(brand)
    return `./images/${brandFolder}/${modelFolder}/${file}`
}

export { imgPath }
