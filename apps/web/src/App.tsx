import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [message, setMessage] = useState("");
	useEffect(() => {
		fetch("/api/hello")
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	return (
		<div>
			<h1>Monorepo React + Fastify</h1>
			<p>API says: {message}</p>
		</div>
	);
}

export default App;
