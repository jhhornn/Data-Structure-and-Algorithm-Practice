export default function linearSearchList(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true
        }
    }
    return false
}