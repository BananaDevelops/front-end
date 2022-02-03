export default function GameText({ GameInfo, handleCommand }) {

  return (
      <div className="w-3/4 border-4 border-green bg-black rounded-2xl">
        <p className="text-green">{GameInfo}</p>
        <form className="mt-0 mb-8" onSubmit={handleCommand}>
            <label htmlFor="response" className="pl-4 text-green text-bold">Your Response</label>
            <div className="flex pl-4 mt-2 bg-black">
              <input name="response" type="text" className="w-3/4 border-2 border-white bg-black text-green"/>
              <button type="submit" className="border-2 border-white text-green">Enter</button>
            </div>
        </form>
      </div>
  )
}