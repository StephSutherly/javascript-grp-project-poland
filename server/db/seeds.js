use polish_words;
db.dropDatabase();

db.basicwords.insertMany([
{
  Polish: "Cześć",
  English: "Hi",
  emoji: "\u{1F44B}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Proszę",
  English: "Please",
  emoji: "\u{1F64F}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Dziękuję",
  English: "Thank you",
  emoji: "\u{1F919}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 3,
  wordKnown: false
},
{
  Polish: "Dzień dobry!",
  English: "Good morning",
  emoji: "\u{23F0}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 4,
  wordKnown: false

},
{
  Polish: "Dobranoc!",
  English: "Good night!",
  emoji: "\u{1F319}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 5,
  wordKnown: true
},
{
  Polish: "Tak",
  English: "Yes",
  emoji: "\u{1F44D}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 6,
  wordKnown: false
},
{
  Polish: "Nie",
  English: "No",
  emoji: "\u{1F44E}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 7,
  wordKnown: false
},
{
  Polish: "Może",
  English: "Maybe",
  emoji: "\u{1F914}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 8,
  wordKnown: true
},
{
  Polish: "Nazywam się...",
  English: "My name is...",
  emoji: "\u{1F449}\u{1F601}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 9,
  wordKnown: false
},
{
  Polish: "Dobrze",
  English: "Ok",
  emoji: "\u{1F44C}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 10,
  wordKnown: true
},
{
  Polish: "Do widzenia!",
  English: "Good bye!",
  emoji: "\u{270C}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 11,
  wordKnown: false
},
{
  Polish: "Przepraszam",
  English: "Excuse me",
  emoji: "\u{1F97A}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 12,
  wordKnown: true
},
{
  Polish: "Pomoc",
  English: "Help",
  emoji: "\u{1F691}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 13,
  wordKnown: false
},
{
  Polish: "Dzisiaj",
  English: "Today",
  emoji: "\u{1F31E}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 14,
  wordKnown: true
},
{
  Polish: "Jutro",
  English: "Tomorrow",
  emoji: "\u{1F31E} \u{1F449}",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 15,
  wordKnown: true
}
]);

db.foodwords.insertMany([
	{
		Polish: "Jabłko",
		English: "Apple",
    emoji: "\u{1F34E}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 1,
		wordKnown: false
	},
	{
		Polish: "Banan",
		English: "Banana",
    emoji: "\u{1F34C}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 2,
		wordKnown: true
	},
	{
		Polish: "Truskawka",
		English: "Strawberry",
    emoji: "\u{1F353}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 3,
		wordKnown: false
	},
	{
		Polish: "Berger",
		English: "Burger",
    emoji: "\u{1F354}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 4,
		wordKnown: false

	},
	{
		Polish: "Pizza",
		English: "Pizza",
    emoji: "\u{1F355}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 5,
		wordKnown: true
	},
	{
		Polish: "Ciastko",
		English: "Cake",
    emoji: "\u{1F382}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 6,
		wordKnown: false
	},
	{
		Polish: "Arbuz",
		English: "Watermelon",
    emoji: "\u{1F349}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 7,
		wordKnown: false
	},
	{
		Polish: "Piwo",
		English: "Beer",
    emoji: "\u{1F37A}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 8,
		wordKnown: true
	},
	{
		Polish: "Wino",
		English: "Wine",
    emoji: "\u{1F377}",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 9,
		wordKnown: false
	}
	]);
