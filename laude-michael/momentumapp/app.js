// Load functions on window start


//CLOCK
class DigitalClock {
    constructor(element) {
        this.element = element;
    }
    
    start () {
        this.update ();

        setInterval(() => {
            this.update();
        }, 500)
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;

    }

    getTimeParts(){
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock (clockElement);

clockObject.start();

///// QUOTE
const quotes = [
    {
        id: 0,
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        id: 1,
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing."
      },
      {
        id: 2,
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
      },
      {
        id: 3,
        author: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor."
      },
      {
        id: 4,
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
      },
      {
        id: 5,
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
      },
      {
        id: 6,
        author: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
      },
      {
        id: 7,
        author: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
      }
  ];

const btnQuotes = document.getElementById('new-quote');

const quoteDisplay = document.getElementById('quote')

const authorDisplay = document.getElementById('author')

const addNewQuotes = document.getElementById('add-quotes-button')

btnQuotes.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    quoteDisplay.innerText = quotes[random].quote
    authorDisplay.innerText = quotes[random].author;
}) 

addNewQuotes.addEventListener('click', function (){
  let author = document.getElementById('addauthor').value;
  let quote = document.getElementById('addquote').value;
  // you can add any validations - like both items should be non empty before you push
  quotes.push({
    id: quotes.length,
    author,
    quote
  });
  console.log(quotes);
})



// To Do Container
// When user clicks on div, open the popup
const toDo = document.querySelector("#ToDo");
const popup = document.querySelector(".popup-menu-container");

toDo.addEventListener('click', () => {
    popup.classList.toggle("show");
});

// Add item on ToDo input submit
const toDoInput = document.querySelector('#toDo-input');
const toDoList = document.querySelector('.list-container');
toDoInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) { // Execute only on Enter
        // validation 
        if (this.value == "") {
            alert("Input cannot be empty");
            return false;
            } else addItem();
    }
});

// addItem functionality
function addItem() {
    var txt = toDoInput.value;
    txt = txt.replace(/(<([^>]+)>)/gi, ""); // strip tags
    toDoInput.value = "";

    const newItem = document.createElement('div');
    newItem.classList.add('item-wrapper');
    newItem.innerHTML = `
    <input type="checkbox" class="item-checkbox">
    <span class="item-title" contenteditable="true">`+ txt +`</span>
    <img class="item-remove-icon" title="Remove item" src="assets/feather icons/plus.svg">
    `
    toDoList.append(newItem);

    // Add remove functionality to 'x' icon
    var removeIcon = document.getElementsByClassName("item-remove-icon");
    var i;
    for (i = 0; i < removeIcon.length; i++) {
        removeIcon[i].onclick = function() {
        var div = this.parentElement;
        div.parentElement.removeChild(div);
        }
    }

    // Add strikethrough text when checkbox is checked
    var checkboxIcon = document.getElementsByClassName("item-checkbox");
    var j;
    for (j = 0; j < checkboxIcon.length; j++) {
        checkboxIcon[j].onclick = function() {
            var sib = this.nextElementSibling;
            sib.classList.toggle('checked');
        };
    }
};

// First Modal
const questionInput = document.querySelector('#question-input');
const questionContainer = document.querySelector('#question-container');
const mainContainer = document.querySelector('#main-container');

questionInput.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) { // Execute only on Enter
        // validation 
        if (this.value == "") {
            alert("Input cannot be empty");
            return false;
            } else {
                docName.textContent = questionInput.value;
                
                questionContainer.style.display = "none";
                mainContainer.classList.toggle('none');
            };
    }
});
