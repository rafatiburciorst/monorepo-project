import fastify from "fastify";

const app = fastify();

app.get("/api/hello", async (request, reply) => {
	return { message: "Hello from Fastify!" };
});

const start = async () => {
	try {
		await app.listen({ port: 3001, host: "0.0.0.0" });
		console.log("Backend listening on http://localhost:3001");
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};

start();
