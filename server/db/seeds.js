use polish_words;
db.dropDatabase();

db.basicwords.insertMany([
{
  Polish: "Cześć \u{1F44B}",
  English: "Hi",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 1,
  wordKnown: false
},
{
  Polish: "Proszę \u{1F64F}",
  English: "Please",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 2,
  wordKnown: true
},
{
  Polish: "Dziękuję \u{1F919}",
  English: "Thank you",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 3,
  wordKnown: false
},
{
  Polish: "Dzień dobry! \u{23F0}",
  English: "Good morning",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 4,
  wordKnown: false

},
{
  Polish: "Dobranoc! \u{1F319}",
  English: "Good night!",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 5,
  wordKnown: true
},
{
  Polish: "Tak \u{1F44D}",
  English: "Yes",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 6,
  wordKnown: false
},
{
  Polish: "Nie \u{1F44E}",
  English: "No",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 7,
  wordKnown: false
},
{
  Polish: "Może \u{1F914}",
  English: "Maybe",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 8,
  wordKnown: true
},
{
  Polish: "Nazywam się... \u{1F449}\u{1F601}",
  English: "My name is...",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 9,
  wordKnown: false
},
{
  Polish: "Dobrze \u{1F44C}",
  English: "Ok",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 10,
  wordKnown: true
},
{
  Polish: "Do widzenia! \u{270C}",
  English: "Good bye!",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 11,
  wordKnown: false
},
{
  Polish: "Przepraszam \u{1F97A}",
  English: "Excuse me",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 12,
  wordKnown: true
},
{
  Polish: "Pomoc \u{1F691}",
  English: "Help",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 13,
  wordKnown: false
},
{
  Polish: "Dzisiaj \u{1F31E}",
  English: "Today",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 14,
  wordKnown: true
},
{
  Polish: "Jutro \u{1F31E} \u{1F449}",
  English: "Tomorrow",
  timesRight: 0,
  timesWrong: 0,
  studyOrder: 15,
  wordKnown: true
}
]);

db.foodwords.insertMany([
	{
		Polish: "Jabłko \u{1F34E}",
		English: "Apple",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 1,
		wordKnown: false
	},
	{
		Polish: "Banan \u{1F34C}",
		English: "Banana",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 2,
		wordKnown: true
	},
	{
		Polish: "Truskawka \u{1F353}",
		English: "Strawberry",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 3,
		wordKnown: false
	},
	{
		Polish: "Berger \u{1F354}",
		English: "Burger",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 4,
		wordKnown: false

	},
	{
		Polish: "Pizza \u{1F355}",
		English: "Pizza",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 5,
		wordKnown: true
	},
	{
		Polish: "Ciastko \u{1F382}",
		English: "Cake",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 6,
		wordKnown: false
	},
	{
		Polish: "Arbuz \u{1F349}",
		English: "Watermelon",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 7,
		wordKnown: false
	},
	{
		Polish: "Piwo \u{1F37A}",
		English: "Beer",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 8,
		wordKnown: true
	},
	{
		Polish: "Wino \u{1F377}",
		English: "Wine",
		timesRight: 0,
		timesWrong: 0,
		studyOrder: 9,
		wordKnown: false
	}
	]);
