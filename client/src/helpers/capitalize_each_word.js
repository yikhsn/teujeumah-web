const capitalize_each_word = (word) => {
    const capitalize_word = word.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    
    return capitalize_word;
}

export default capitalize_each_word;