import MealsSummary from "./MealsSummary";
import Form from "../Form/Form";

const dummyMeals = [
  {
    name: "Chhena Poda",
    desc: "Delicious sweet",
    amount: 60,
  },
  {
    name: "Paneer Tikka",
    desc: "Spicy grilled cottage cheese",
    amount: 80,
  },
  {
    name: "Chicken Biryani",
    desc: "Fragrant rice dish with chicken",
    amount: 120,
  },
  {
    name: "Vegetable Pulao",
    desc: "Mixed vegetable rice",
    amount: 90,
  },
  {
    name: "Gulab Jamun",
    desc: "Sweet syrupy dessert",
    amount: 40,
  },
  {
    name: "Dahi Bara",
    desc: "Vada aalo and some spicy mixture",
    amount: 40,
  },
];

const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <div className="bg-white mt-24 w-8/12 ml-auto mr-auto rounded-lg pb-1">
        {dummyMeals.map((meals) => {
          return (
              <div
                className="px-5 py-4 mx-1 my-1 rounded-md flex items-center justify-between bg-gray-400 shadow-md shadow-gray-400"
                key={Math.random()}
                id={Math.random()}
              >
                <div>
                <h1 className="text-xl font-bold">{meals.name}</h1>
                <h1 className=" italic font-medium">{meals.desc}</h1>
                <h1 className="text-red-600 text-lg">${meals.amount}</h1>
                </div>
                <div>
                    <Form id={Math.random()} item={meals}/>
                </div>
              </div>

          );
        })}
      </div>
    </div>
  );
};
export default Meals;
