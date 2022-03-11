import { useCallback, useState } from "react";

export default (initValue = NormalModule) => {
	const [value, setter] = useState(initValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	},[]);
	return [value, handler]
};