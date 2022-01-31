export default function Login({handleSubmit}) { 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" >User Name</label>
      <input name="username" />
      <button type="submit">Submit</button>

    </form>
  )    
}

