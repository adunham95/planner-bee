export function hexToRgb(hex: string) {
	// Convert hex to RGB
	let r = 0,
		g = 0,
		b = 0;
	if (hex.length === 4) {
		r = parseInt(hex[1] + hex[1], 16);
		g = parseInt(hex[2] + hex[2], 16);
		b = parseInt(hex[3] + hex[3], 16);
	} else if (hex.length === 7) {
		r = parseInt(hex[1] + hex[2], 16);
		g = parseInt(hex[3] + hex[4], 16);
		b = parseInt(hex[5] + hex[6], 16);
	}
	return { r, g, b };
}

export function rgbToTailwindPalette(r: number, g: number, b: number, includeColorSpace = false) {
	const palette: { [key: string]: string } = {};
	// Tailwind shades (values from 50 to 900)
	const shades = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

	shades.forEach((shade, index) => {
		const factor = shade * 255;
		const newR = Math.round(r + (factor - r) * shade);
		const newG = Math.round(g + (factor - g) * shade);
		const newB = Math.round(b + (factor - b) * shade);

		palette[`${(index + 1) * 100}`] = includeColorSpace
			? `rgb(${newR}, ${newG}, ${newB})`
			: `${newR}, ${newG}, ${newB}`;
	});

	return palette;
}

export function hexToTailwindPallette(hex: string, includeColorSpace = false) {
	if (hex.length < 7) {
		return;
	}
	const { r, g, b } = hexToRgb(hex);
	return rgbToTailwindPalette(r, g, b, includeColorSpace);
}
