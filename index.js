const http = require("http");
const qs = require("querystring");
const calculator = require("./calculator");

const server = http.createServer(function (request, response) {
	if (request.method == "POST") {
		var body = "";
		request.on("data", function (data) {
			body += data;
		});

		request.on("end", function () {
			const post = qs.parse(body);
			const numbers = post.numbers;
			const result = calculator.add(numbers);
			response.writeHead(200, { "Content-Type": "text/html" });
			response.end("Result: " + result);
		});
	} else {
		var html = `
           <html>
                <body>
                    <form method="post" action="http://localhost:3000">Numbers
                        <input type="text" name="numbers" />
                        <input type="submit" value="Add" />
                    </form>
                </body>
            <html>
        `;
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(html);
	}
});

const port = 3000;
server.listen(port);
console.log(`Listening at 0.0.0.0:${port}`);
