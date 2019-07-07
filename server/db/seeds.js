use polish_words;
db.dropDatabase();

db.words.insertMany([
{
  Polish: "Cześć",
  English: "Hi",
  timesRight: 2,
  timesWrong: 5,
  studyOrder: 2,
  wordKnown: false
},
{
  Polish: "Proszę",
  English: "Please",
  timesRight: 4,
  timesWrong: 2,
  studyOrder: 3,
  wordKnown: true
},
{
  Polish: "Dziękuję",
  English: "Thank you",
  timesRight: 3,
  timesWrong: 1,
  studyOrder: 2,
  wordKnown: false
},
{
  Polish: "Dzień dobry!",
  English: "Good morning",
  timesRight: 2,
  timesWrong: 1,
  studyOrder: 3,
  wordKnown: false

},
{
  Polish: "Dobranoc!",
  English: "Good night!",
  timesRight: 1,
  timesWrong: 3,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Tak",
  English: "Yes",
  timesRight: 4,
  timesWrong: 2,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Nie",
  English: "No",
  timesRight: 1,
  timesWrong: 4,
  studyOrder: 1,
  wordKnown: true
},
{
  Polish: "Nie",
  English: "No",
  timesRight: 5,
  timesWrong: 1,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Może",
  English: "Maybe",
  timesRight: 4,
  timesWrong: 1,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Nazywam się...",
  English: "My name is...",
  timesRight: 3,
  timesWrong: 1,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Dobrze",
  English: "Ok",
  timesRight: 3,
  timesWrong: 1,
  studyOrder: 3,
  wordKnown: true
},
{
  Polish: "Do widzenia!",
  English: "Good bye!",
  timesRight: 2,
  timesWrong: 1,
  studyOrder: 4,
  wordKnown: false
},

// 12
{
  Polish: "Przepraszam",
  English: "Excuse me",
  timesRight: 1,
  timesWrong: 3,
  studyOrder: 4,
  wordKnown: true
},
{
  Polish: "Pomoc",
  English: "Help",
  timesRight: 4,
  timesWrong: 4,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Dzisiaj",
  English: "Today",
  timesRight: 4,
  timesWrong: 1,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Jutro",
  English: "Tomorrow",
  timesRight: 4,
  timesWrong: 1
}

]);
