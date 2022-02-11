var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

function findAllHobbyists(hobby, hobbies) {
  let a;
  for (const person in hobbies) {
    hobbies[person].forEach((element) => {
      if (element == hobby) {
        a = person;
      }
    });
  }
  return a;
}

console.log(findAllHobbyists("Yoga", hobbies));
