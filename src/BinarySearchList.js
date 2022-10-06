export default function binarySearchList(
	haystack,
	needle,
) {
	// Set your low and high values
	let low = 0
	let high = haystack.length

	do {
		// Set the middle point value
		const middle = Math.floor(low + ((high - low) / 2))
		const middleValue = haystack[middle]

		if (middleValue === needle) {
			return true
		} else if (middleValue < needle) {
			low = middle + 1
		} else {
			high = middle
		}
	} while (low < high)
	return false
}

