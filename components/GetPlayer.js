import axios from 'axios'

export default async function playerRetriever(id) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/player/${id}`
  try{
    const response = await axios.get(url)
    return response
  }
  catch(error){
    console.log(error.message)
  }
}