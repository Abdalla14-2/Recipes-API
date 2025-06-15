import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals[0]);
      });
  }, [id]);

  if (!meal) return <div className="text-center mt-10 text-xl">Loading...</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="recipe-content bg-stone-100 p-5 rounded-3xl shadow-md">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-xl w-full object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {meal.strMeal}
          </h3>
          <h4 className="text-lg text-gray-600">Home Land: {meal.strArea}</h4>
          <h4 className="text-lg text-gray-600">
            Category: {meal.strCategory}
          </h4>
        </div>

        <div className="recipe-ingredients bg-stone-100 p-5 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Ingredients
          </h3>
          <div className="ingredients flex flex-wrap gap-3 mb-6">
            {ingredients.map((ing, idx) => (
              <img
                key={idx}
                className="w-16 h-16 object-cover rounded-full border"
                src={`https://www.themealdb.com/images/ingredients/${ing}.png`}
                alt={ing}
                title={ing}
              />
            ))}
          </div>
          <div className="how-to">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Instructions
            </h3>
            <p className="text-gray-700 leading-7">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
