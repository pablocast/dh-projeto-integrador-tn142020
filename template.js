export default ({ html, css }) => {
  return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          >
          <title>BrainXpert</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        </head>
        <body style="margin:0">
          <div id="root">${html}</div>
          ${css}
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`;
};
