import Card from "./Card";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMeals = (term) => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => {
        setMeals(res.data.meals || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMeals("");
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMeals(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <>
      <SearchInput onSearchChange={setSearchTerm} />

      {isLoading ? (
        <div className="text-center text-xl font-semibold mt-10 text-amber-500 animate-pulse">
          Loading...
        </div>
      ) : meals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-4 container m-auto">
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
              description={meal.strInstructions}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-red-500 text-lg">
          No meals found.
        </div>
      )}
    </>
  );
}
