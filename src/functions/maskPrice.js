export const maskPrice = (price) => {
	return price
		.replace(/\D/g, '')
		.replace(/(\d{1,2})$/, ',$1')
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};
