import { Theme } from './interface'
import { themeGet } from './system'

export const colorValue = (colorName: keyof Theme['colors']) => {
    return ({ theme }: { theme: Theme }) => {
        return themeGet(`colors.${colorName}`)({ theme })
    }
}

export const typographyValue = (typographyName: keyof Theme['typography']) => {
    return ({ theme }: { theme: Theme }) => {
        return themeGet(`typography.${typographyName}`)({ theme })
    }
}
