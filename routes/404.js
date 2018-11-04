function notFound(res) {
    const tmpl = `<html>
                    <head></head>
                    <body>
                        <h1 style="text-align: center">404 (Not Found)!</h1>
                    </body>
                  </html>`;

    res.setHeader('Content-Type', 'text/html');
    res.write(tmpl);
    res.end();
}

module.exports = notFound;
