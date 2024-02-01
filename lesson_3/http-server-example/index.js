const http = require("http");
// request - об'єкт, який описує весь запит
// response - об'єкти, який описує всі відповіді

const server = http.createServer((request, response) => {
    const {url} = request;
    if (url === "/") {
        response.write("<h2>Home page</h2>");
    } else if (url === "/contacts") {
        response.write("<h2>Contacts page</h2>");
    } else {
        response.write("<h2>Page not found</h2>");
    }
    response.end();
});

server.listen(3000, () => {
    console.log("Сервер працює!");
});
