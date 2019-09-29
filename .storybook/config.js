import { addParameters, configure } from '@storybook/react'
addParameters({
    options: {
        storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    },
})
configure(require.context('../stories/', true, /\.stories\.(js|mdx)$/), module)
