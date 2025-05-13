import { Hono } from "jsr:@hono/hono@4.6.5";

const app = new Hono();

// Respond with "Hi there!" for all requests
app.get("/", (c) => c.json({ message: "Hi again!" }));

export default app;
