import { alovaInstance } from "../alova";

export const getData = () => {
	return alovaInstance.Get<{ message: string }>("/api/hello", {
		cacheFor: 60 * 10 * 1000,
	});
};
