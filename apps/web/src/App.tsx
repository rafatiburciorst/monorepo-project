import { useRequest } from "alova/client";
import { getData } from "./network/methods/get";

function App() {
	const { data, loading } = useRequest(getData);

	return (
		<div>
			<h1>Monorepo React + Fastify</h1>
			<p>API says: {loading ? "loading..." : data?.message}</p>
		</div>
	);
}

export default App;
