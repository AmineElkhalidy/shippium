/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: "Raleway",
        },

        extend: {
            colors: {
                main: "#5fad56",

                dark: "#023436",
            },

            gridTemplateColumns: {
                parcels: "2fr 3fr 2fr 10rem",
                dashlet: "2fr 1fr 1fr 1fr",
            },
        },
    },
    plugins: [],
};
