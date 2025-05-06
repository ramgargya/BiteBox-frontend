import axios from "axios";

const API_URL = "http://localhost:8080/api/foods";

// This function is used to add food to the database
export const addFood = async (foodData, image) => {
  const formData = new FormData();
  // the FoodRequest accepts two parameters, one is the food object and the other is the file(image)
  formData.append("food", JSON.stringify(foodData)); // name should be same as in backend (backend name -> food)
  formData.append("file", image); // name should be same as in backend (backend name -> file)

  try {
    await axios.post(API_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// This function is used to fetch the food list from the database
export const getFoodList = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data; // return the data from the response
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// This function is used to remove food from the database
export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(`${API_URL}/${foodId}`);
    return response.status == 204;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
