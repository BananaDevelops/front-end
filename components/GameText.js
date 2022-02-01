import CSRFTOKEN from "./CSRFToken"

export default function GameText({ GameInfo, handleCommand }) {

  return (
      <div className="w-3/4 border-4 border-black">
        <p>{GameInfo}</p>
        <form className="" onSubmit={handleCommand}>
            {/* <CSRFTOKEN/> */}
            <label htmlFor="response" className="pl-4">Your Response</label>
            <div className="flex pl-4">
              <input name="response" type="text" className="w-3/4 border-2 border-black"/>
              <button type="submit" className="border-2 border-black">Enter</button>
            </div>
        </form>
      </div>
  )
}