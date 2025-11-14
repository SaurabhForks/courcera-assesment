
import { useState } from 'react';
import './App.css'
import Form from './components/form/Form'
import Header from './components/header/header'
import ViewIngredients from './components/viewIngredients/ViewIngredients';
import ShowReciepie from './components/showReciepie/ShowReciepie';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState("");
  const hideRecipe = () => {
    setShowRecipe(false);
  };
  return (
    <>
      <div className=" w-full min-h-screen bg-gray-50 py-8 px-4">
        <div className="w-full mx-auto bg-white rounded-xl shadow-md p-6">
          <Header />
          <Form ingredients={ingredients} setIngredients={setIngredients} />
          <ViewIngredients ingredients={ingredients} setIngredients={setIngredients} setShowRecipe={setShowRecipe} setRecipe={setRecipe} />
          {showRecipe && <ShowReciepie hideRecipe={hideRecipe} recipe={recipe} />}
        </div>
      </div>
    </>
  )
}

export default App
