import { useNavigate } from "react-router"

const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Looks like you lost!</h1>
      <button onClick={()=>navigate(-1)}>Go back! &larr;</button>
    </div>
  )
}

export default PageNotFound
