export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Marvel',
                ['Getting started', 'Principles', 'Contributing'],
                'Foundations',
                'Objects',
                'Components',
                'Form',
            ],
        },
    },
}