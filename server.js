import path from "path";
import helmet from "helmet";
import compression from "compression";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from "./tools/webpack.config.prod";

const app = express();
const compiler = webpack(config);
app.use(compression());
app.use(helmet());
app.use(helmet.hidePoweredBy({setTo: 'QGO (BETA)'}));
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.dnsPrefetchControl({allow: false}));

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, './dist/client/index.html'));
});

app.listen(process.env.PORT || 8080, '0.0.0.0', function (err) {
    if (err) {
        console.error(err);
        return;
    }
});