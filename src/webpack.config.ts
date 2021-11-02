import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
// import CopyWebpackPlugin from "copy-webpack-plugin";

module.exports = {
    entry: ["react-hot-loader/patch", path.resolve(__dirname, "./index.tsx")],
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        modules: ["node_modules"],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        },
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            },
        ]
    },
    devServer: {
        host: "localhost",
        // contentBase: path.resolve(__dirname, "dist/"),
        port: 3000,
        // inline: true,
        open: true,
        hot: true,
        https: false,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: "./image", to: "image/" },
        //         { from: "./html", to: "html/" }
        //     ]
        // }),
        new HtmlWebpackPlugin({ template: "./index.html" }),
    ]
};