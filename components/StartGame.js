export default function StartGame(){
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.InitialUserName.value)
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <label>What is your name?</label>
            <input type="text" name="InitialUserName"></input>
            <button type="Submit">Enter</button>
        </form>
    )
}