export function formatNumber(value: number) {
	return value.toLocaleString();
}

export function formatCurrency(value: number) {
	return `€${value.toLocaleString()}`;
}

export function formatPercentage(value: number) {
	return `${value.toFixed(1)}%`;
}
