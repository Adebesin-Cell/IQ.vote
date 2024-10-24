export const getShortenAddress = (
	account: string,
	firstTakeLength = 4,
	secondTakeLength = 4,
) => {
	if (!account) return;
	const firstChunk = account.substring(0, firstTakeLength);
	const secondChunk = account.substring(account.length - secondTakeLength);

	return `${firstChunk}...${secondChunk}`;
};
