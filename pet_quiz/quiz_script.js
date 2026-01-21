function calculateResult() {

  let dog = 0;
  let cat = 0;
  let fish = 0;
  let hamster = 0;

  const activity = document.querySelector('input[name="activity"]:checked');
  const time = document.querySelector('input[name="time"]:checked');
  const home = document.querySelector('input[name="home"]:checked');
  const cleanliness = document.querySelector('input[name="cleanliness"]:checked');

  if (!activity || !time || !home || !cleanliness) {
    alert("Please answer all questions!");
    return;
  }

  // Activity
if (activity.value === "high") {
    dog += 2;       
    cat += 1;       
    hamster += 0;   
    fish += 0;
} else {  
    cat += 2;       
    hamster += 1;   
    fish += 1;      
    dog += 0;       
}

// Time
if (time.value === "lots") {
    dog += 2;       
    cat += 1;      
} else { 
    fish += 2;      
    hamster += 2;   
    dog += 0;       
    cat += 0;
}

// Home 
if (home.value === "yes") { 
    cat += 2;      
    fish += 2;      
    hamster += 2;   
    dog += 0;       
} else { 
    dog += 2;
    cat += 1;      
}

// Cleanliness
if (cleanliness.value === "yes") {
    fish += 2;      
    hamster += 2;
    cat += 1;      
    dog += 0;       
} else { 
    dog += 2;       
    cat += 0;
    fish += 0;
    hamster += 1;   
}


  // Find best pet
  let bestPet = "Dog";
  let maxScore = dog;

  if (cat > maxScore) {
    bestPet = "Cat";
    maxScore = cat;
  }

  if (fish > maxScore) {
    bestPet = "Fish";
    maxScore = fish;
  }

  if (hamster > maxScore) {
    bestPet = "Hamster";
  }

  // Summary
  let summary = "";

  if (bestPet === "Dog") {
    summary = "Dogs are loyal and energetic companions that require regular exercise and attention.";
  } else if (bestPet === "Cat") {
    summary = "Cats are independent and affectionate pets that enjoy a cozy home environment.";
  }
  else if (bestPet === "Fish") {
    summary = "Fish are low-maintenance pets that add tranquility and beauty to your home.";
  } else if (bestPet === "Hamster") {
    summary = "Hamsters are small, playful pets that are easy to care for and great for small living spaces.";
  }

  // Add image

  let img="";
  if (bestPet === "Dog")img = "quiz_dog.jpg";
  
  else if (bestPet === "Cat")img = "quiz_cat.jpg";
 
  else if (bestPet === "Fish")img = "quiz_fish.jpg";

  else if (bestPet === "Hamster")img = "quiz_hanster.jpg";

  // Display result

document.getElementById("result").innerHTML = `
  <strong>The best pet for you is: ${bestPet}</strong><br><br>
  ${summary}<br><br>
  <img src="${img}" alt="${bestPet}" class="animal-img">
`;

}
