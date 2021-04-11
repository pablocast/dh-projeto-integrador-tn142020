import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from "./routes/api.routes";
import devBundle from "./devBundle";
import path from "path";
import template from "../template";
import { renderToString } from "react-dom/server";
import MainRouter from "./../src/router/";
import { StaticRouter } from "react-router";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// modules for server side rendering
import React from "react";
const CURRENT_WORKING_DIR = process.cwd();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//bundle client
devBundle.compile(app);

// mount routes
app.use("/", apiRoutes);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("*", (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <MainRouter />
        </StyleSheetManager>
      </StaticRouter>
    )
  );

  const css = sheet.sheet.getStyleTags();

  console.log("Static stylesheet:\n", styleTags);

  res.status(200).send(template({ html: html, css: css }));
});

export default app;
