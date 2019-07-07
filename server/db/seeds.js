use polish_words;
db.dropDatabase();

db.words.insertMany([
{
  Polish: "Cześć",
  English: "Hi",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Proszę",
  English: "Please",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Dziękuję",
  English: "Thank you",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 3,
  wordKnown: false
},
{
  Polish: "Dzień dobry!",
  English: "Good morning",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 4,
  wordKnown: false

},
{
  Polish: "Dobranoc!",
  English: "Good night!",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 5,
  wordKnown: true
},
{
  Polish: "Tak",
  English: "Yes",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 6,
  wordKnown: false
},
{
  Polish: "Nie",
  English: "No",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 7,
  wordKnown: false
},
{
  Polish: "Może",
  English: "Maybe",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 8,
  wordKnown: true
},
{
  Polish: "Nazywam się...",
  English: "My name is...",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 9,
  wordKnown: false
},
{
  Polish: "Dobrze",
  English: "Ok",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 10,
  wordKnown: true
},
{
  Polish: "Do widzenia!",
  English: "Good bye!",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 11,
  wordKnown: false
},
{
  Polish: "Przepraszam",
  English: "Excuse me",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 12,
  wordKnown: true
},
{
  Polish: "Pomoc",
  English: "Help",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 13,
  wordKnown: false
},
{
  Polish: "Dzisiaj",
  English: "Today",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 14,
  wordKnown: true
},
{
  Polish: "Jutro",
  English: "Tomorrow",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 15,
  wordKnown: true
}
]);
