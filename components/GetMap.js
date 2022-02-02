import axios from "axios"

export default async function getMap(){
  // const url= "https://stick-figure-backend.herokuapp.com/game_logic/test_map/"
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/game_logic/test_map/`
  try{
    const response = await axios.get(url);
    console.log(response.data.Data);
    return response.data.Data;
  }
  catch(error){
    
    console.log("You lose", error.message);
    return [[]]

  }
}