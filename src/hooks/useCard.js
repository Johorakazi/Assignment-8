import { useEffect, useState } from "react"

const useCard = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

  useEffect( () => {
      axios('./appssData.json') .then(data => console.log(data))
  }, [])

  return { products, loading, error }
  
}

export default useCard