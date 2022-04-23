import { Theme } from './interface'

export const colorValue =
    (colorName: keyof Theme['colors']) =>
    ({ theme }: { theme: Theme }) =>
        theme.colors[colorName]
