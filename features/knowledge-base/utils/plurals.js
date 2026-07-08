export const getVoteWord = (count, lang) => {
    if (lang === 'en') {
        return count === 1 ? 'vote' : 'votes';
    }

    if (lang === 'pl') {
        if (count === 1) return 'głos';
        
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
            return 'głosy';
        }
        
        return 'głosów';
    }

    return '';
};
