import {combineReducers} from "redux"; // 자바에서의 Service와 같은 기능을 해줌
/*
    FoodReducer
    RecipeReducer
    NewsReducer
 */

import foodReducer from "./foodReducer";
export default combineReducers({
    foods:foodReducer
})