export function generateOrderNumber() {
	// Get the current timestamp in milliseconds
	const timestamp = Date.now();

	// Convert the timestamp to a base-36 string (numbers + letters)
	const base36Timestamp = timestamp.toString(36).toUpperCase();

	// Optionally, add a random alphanumeric suffix for extra uniqueness
	const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();

	// Combine the base-36 timestamp with the random suffix
	const orderNumber = `ORD-${base36Timestamp}-${randomSuffix}`;

	return orderNumber;
}
