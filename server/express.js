import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from './routes/api.routes'
import devBundle from './devBundle'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// mount routes
app.use('/', apiRoutes)

//bundle client
devBundle.compile(app)

export default app;
