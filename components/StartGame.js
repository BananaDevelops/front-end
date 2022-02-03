import axios from "axios";

export default function StartGame({player, setMap}){

  // function handleSubmit(event){
  //   event.preventDefault();
  //   console.log(event.target.InitialUserName.value)
  // }
  
  // while server post is down
  async function handleCommand(event) {
    player({"name":"CURRENT_TEST","health":50,"left_hand":{},"inventory":[], "right_hand":{}, "combat":true})
    event.preventDefault()
    getMap()
  }  
  
  async function getMap(){
    //const url= "https://stick-figure-backend.herokuapp.com/game_logic/test_map/"
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/game_logic/test_map/`
    try{
      const response = await axios.get(url);
      console.log("success", response.data.Data);
      setMap(response.data.Data)
    }
    catch(error){
      
      console.log("You lose", error.message);
      return [[]]
  
    }
  }

    // ** while server allows posts **  
    // async function handleCommand(event) {
    //     event.preventDefault();
    //     const url = "https://stick-figure-backend.herokuapp.com/player/"
    //     //const url = `${process.env.NEXT_PUBLIC_BASE_URL}/player/`
    //     let name = {"name":event.target.InitialUserName.value}
    //     try {
    //       const response = await axios.post(url, name)
    //       player(response.data);
    //       getMap()
    //       console.log(response)
    //     } catch (error) {
    //       console.log("You lose", error.message)
    //     }
    // }
    
    return(
        <div className="bg-black flex justify-center mt-90 w-screen h-screen">
          <form className="bg-black p-4 my-auto border-2 rounded-md border-green h-1/6 min-h-min" onSubmit={handleCommand}>
              <label className="text-green">What is your Character Name?</label>
              <div className="">
                <input type="text" name="InitialUserName" className="text-green rounded mt-2"></input>
                <button type="Submit" className="text-green pl-4">Enter</button>
              </div>
          </form>
        </div>
    )
}