const quotes = [
  "“You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar",
  "“Inspiration does exist, but it must find you working.” —Pablo Picasso",
  "“Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.” —Angela Bassett",
  "“Show up, show up, show up, and after a while the muse shows up, too.” —Isabel Allende",
  "“Don't bunt. Aim out of the ballpark. Aim for the company of immortals.” ―David Ogilvy",
  "“I have stood on a mountain of no’s for one yes.” —Barbara Elaine Smith",
  "“If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.” —Tobias Lütke",
  "“First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.” ―Octavia Butler",
  "“The best way out is always through.” ―Robert Frost",
  "“If there is no struggle, there is no progress.” —Frederick Douglass",
];

const generateBtn = document.querySelector(".generate-btn");
const quote = document.querySelector(".quote");

generateBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});

window.addEventListener("load", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});
