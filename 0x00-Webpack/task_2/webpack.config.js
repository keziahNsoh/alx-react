const path = require('path');

module.exports = {
    mode: 'production', // Set to production mode
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex to match CSS files
                use: ['style-loader', 'css-loader'] // Loaders for CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Regex for image formats
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/' // Output path for images
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true // Enable minimization
    }
};

