function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a, b) => a - b); 
}
