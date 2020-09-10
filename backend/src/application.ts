import * as express from "express";
import { pingController } from "./controllers/ping";
import { eventController } from "./controllers/event";


var cors = require('cors');

const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(pingController);
app.use(eventController, createProxyMiddleware({
    target: 'http://localhost:8000/', //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes : any) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
export default app;