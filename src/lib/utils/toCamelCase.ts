export function toCamelCase(str: string | undefined | null) {
	if (!str) return undefined;
	return str
		.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase())
		.replace(/^(.)/, (match, chr) => chr.toLowerCase());
}
