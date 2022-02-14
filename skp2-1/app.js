var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

function findAllHobbyists(hobby, hobbies) {
  let answer;
  for (const person in hobbies) {
    hobbies[person].forEach((element) => {
      if (element == hobby) {
        answer = person;
      }
    });
  }
  return answer;
}

console.log(findAllHobbyists("Yoga", hobbies));
