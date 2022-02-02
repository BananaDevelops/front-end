import axios from "axios";

export default function StartGame({player}){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.InitialUserName.value)
    }

    async function handleCommand(event) {
        event.preventDefault();
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/player/`
        let name = {"name":event.target.InitialUserName.value}
        try {
          const response = await axios.post(url, name)
          player(response.data);
          console.log(response)
        } catch (error) {
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