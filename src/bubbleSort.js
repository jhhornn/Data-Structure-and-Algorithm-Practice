export default function bubbleSort(array) {
    let unsorted_until_index = array.length
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < unsorted_until_index; i++) {
            if (array[i] > array[i + 1]) {
                array[i], array[i + 1] = array[i + 1], array[i]
                sorted = false
            }
        }
        unsorted_until_index -= 1
    }
    return array
}