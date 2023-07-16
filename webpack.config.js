const path = require('path');
console.log(path.join(__dirname,'src'))
module.exports = {
    entry: './src/app.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.join(__dirname,'src'),
            path.join(__dirname,'node_modules'),
        ],
    },
};
