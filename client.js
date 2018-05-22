$(document).ready(appendPics)
let randPerson;
let guess;
$(document).on(`click`, `img`, newGame)

function appendPics() {
  people.sort(function() {
    return 0.5 - Math.random()
  })
  for (let i = 0; i < people.length; i++) {
    outputString = `<div>
                      <img src="${people[i].profilePic}" alt="Profile pic for ${people[i].name}" style="width:250px;height:250px;" id="${people[i].name}">
                    </div>`;
    $(`#picsHere`).append(outputString);

  }
  randomNumber(0, people.length - 1);
};

function randomNumber(min, max) {
  randPerson = Math.floor(Math.random() * (1 + max - min) + min);
  alert(`Please pick the picture of ${people[randPerson].name}`);
  return randPerson;

};

function getImgId() {
  let imgId = $(this).attr(`id`);
}

function newGame() {
  if (this.id === people[randPerson].name) {
    alert(`You are correct!`);
    $(this).addClass(`greenBack`);
    guess = people[randPerson.name];

    timer();

    return guess;
  } else {
    alert(`You are incorrect :'( Please try again.`)
    return false;
  }
}


function timer() {
  window.setTimeout(wow, 2000);

}

function wow() {
  $(`img`).removeClass(`greenBack`);
  window.location.reload();

}
