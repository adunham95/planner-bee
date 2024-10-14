export function formatCurrency(value: number) {
	if (value === 0) {
		return 'Free';
	}
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(value / 100);
}
