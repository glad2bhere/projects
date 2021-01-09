const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');
  

// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    //Clear single meal
    single_mealEl.innerHTML = '';

    //Get search term
    const term = search.value;

    //Check for empy input
    if(term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            resultHeading.innerHTML = `<h2>Search results for "${term}": </h2>`;

            if(data.meals === null) {
                resultHeading.innerHTML = `<p>There are no search results for ${term}, try again!</p>`;
            } else {
                mealsEl.innerHTML = data.meals
                .map(
                    meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                                <p class="meal-type">${meal.strArea}</p>
                            </div>
                        </div> 
                    </div>
                `
                )
                .join(''); //Displays it as a string
            }
        });
        //Clear Search Text
        search.value = '';

    } else {
        alert('Please enter a search value');
    }
}

//Fetch Meal by id
function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0];

        addMealToDOM(meal); //Add meak to DOM
    })
}

//Add meal to DOM
function addMealToDOM(meal) {
    const ingredients = []; //initialize array

    for(let i = 0; i <= 20; i++) {
        if(meal[`strIngredient${i}`]) { //Need to use bracket [] syntax because we are using a variable in statement
            ingredients.push(`${meail[`strIngredient${i}`]}- ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="single-meal-info">
        ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}


// Event listeners
submit.addEventListener('submit', searchMeal);

mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
      if (item.classList) {
        return item.classList.contains('meal-info');
      } else {
        return false;
      }
    });

    //Check for meal info
    if(mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid'); //Gets meal id when user clicks on 
        getMealById(mealID);
    }
});
//Things I can do:
//1. Add icons to take a user to different parts, such as a video icon to take to a video of how to make
//2. Add an ingredients icon that you hover over to show ingredients