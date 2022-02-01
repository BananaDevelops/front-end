import axios from "axios";

export default function StartGame(){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.InitialUserName.value)
    }

    async function handleCommand(event) {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/player/"
        let name = JSON.stringify({"name":event.target.InitialUserName.value})
        try {
          const response = await axios.post(url, name)
          console.log(response)
        } catch (error) {
          console.log(name)
          console.log("You lose", error.message)
        }
      }
    
    return(
        <form onSubmit={handleCommand}>
            <label>What is your name?</label>
            <input type="text" name="InitialUserName"></input>
            <button type="Submit">Enter</button>
        </form>
    )
}