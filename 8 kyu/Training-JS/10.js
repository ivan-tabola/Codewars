const splitAndMerge = (string, separator) => string.split(" ").map(words => words.split("").join(separator)).join(" ");