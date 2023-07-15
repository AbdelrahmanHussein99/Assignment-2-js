var quoteList = [
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "― Winston S. Churchill"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        quote: "Never memorize something that you can look up.",
        author: "― Albert Einstein"
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "― Roy T. Bennett"
    },
    {
        quote: "Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.",
        author: "― Paulo Coelho"
    },
    {
        quote: "Don't waste your time with explanations: people only hear what they want to hear.",
        author: "― Paulo Coelho"
    },
    {
        quote: "How did it get so late so soon?",
        author: "― Dr. Seuss"
    }
];

var siz = quoteList.length;

function displayQuote() {
    var box = ``;
    var rnd = Math.floor(Math.random() * siz - 1);
    if (rnd == -1) {
        rnd = 0;
    }
    // console.log(rnd);
    box += `
    <p class=" fs-3  fw-bold">"${quoteList[rnd].quote}"</p>
    <p class="fs-3 fw-bold">${quoteList[rnd].author}</p>
    `;

    var lastItem = quoteList[rnd];
    quoteList.splice(rnd, 1);
    quoteList.push(lastItem);

    document.getElementById("quoteBox").innerHTML = box;
}
