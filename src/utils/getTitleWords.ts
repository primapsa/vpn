export const getTitleWords = (title: string): { first: string; rest: string } => {
    const words = title.split(' ');
    const first = words[0];
    const rest = words.slice(1).join(' ');

    return {first, rest};
}
