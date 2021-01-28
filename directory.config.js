module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px2rem": {
            remUnit: 37.5, // 50px = 1rem
            remPrecision: 2 // The number of decimal places after rem
        }
    }
};