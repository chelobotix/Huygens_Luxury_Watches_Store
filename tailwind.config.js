/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            colors: {
                darkBlue: '#153452',
                lightBlue: '#235789',
                softYellow: '#F3F1F0',
                ligthRed: '#CF2C5C',
                softGray: '#EAEAEA',
            },
        },
    },
    plugins: [],
}
