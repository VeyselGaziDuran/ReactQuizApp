
const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data.results.map((dt) => ({
            ...dt,
            answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer]),
        }));
    } catch (error) {
        console.error('Fetch failed:', error);
    }
}

export default fetchQuizData