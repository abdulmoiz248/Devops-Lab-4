document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    async function fetchQuote() {
        // Add loading state
        newQuoteBtn.disabled = true;
        quoteText.style.opacity = 0;
        quoteAuthor.style.opacity = 0;

        try {
            const response = await fetch('/quote');
            const data = await response.json();

            // Wait for fade out
            setTimeout(() => {
                quoteText.textContent = `"${data.text}"`;
                quoteAuthor.textContent = `- ${data.author}`;
                
                // Fade in
                quoteText.style.opacity = 1;
                quoteAuthor.style.opacity = 1;
                newQuoteBtn.disabled = false;
            }, 300);

        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = "Failed to fetch inspiration. Please try again.";
            quoteAuthor.textContent = "";
            newQuoteBtn.disabled = false;
            quoteText.style.opacity = 1;
        }
    }

    // Initial fetch
    fetchQuote();

    // Event listener
    newQuoteBtn.addEventListener('click', fetchQuote);
});
