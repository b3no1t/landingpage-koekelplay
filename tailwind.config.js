const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {

        extend: {
            fontSize: {
                'h6': ['1rem', { lineHeight: '1.5' }],        // 16px
                'h5': ['1.333rem', { lineHeight: '1.4' }],    // 21.33px
                'h4': ['1.777rem', { lineHeight: '1.4' }],    // 28.44px
                'h3': ['2.369rem', { lineHeight: '1.3' }],    // 37.93px
                'h2': ['3.157rem', { lineHeight: '1.2' }],    // 50.58px
                'h1': ['4.209rem', { lineHeight: '1.1' }],    // 67.44px
            },
            colors: {
                //add your own color
                //https://tailwindcss.com/docs/customizing-colors
            },
            container: {
                center: true,
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}