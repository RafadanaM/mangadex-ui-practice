function colorWithOpacity(variableName) {
    return ({ opacityValue }) => {
        if (!opacityValue) {
            return `rgb(var(${variableName}))`
        }
        return `rgba(var(${variableName}), ${opacityValue})`
    }
}

module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '2xs': ['0.625rem', '1rem'],
            },
            boxShadow: {
                'inner-md': 'inset -25px 0px 9px -25px rgba(0, 0, 0, 0.1)',
            },
            screens: {
                md: '832px',
                '3xl': '1904px',
            },
            colors: {
                primary: colorWithOpacity('--primary'),
                'primary-dark': colorWithOpacity('--primary-dark'),
                secondary: colorWithOpacity('--secondary'),
            },
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require('@tailwindcss/line-clamp')],
}
