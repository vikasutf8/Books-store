import { useState,useEffect } from "react"
import axios from "axios"
import { useParams,useNavigate } from "react-router-dom"
import BackButton from '../Components/BackButton'
import Spinner from "../Components/Spinner"

const DeleteBook = () => {
  const [loading ,setLoading]=useState(false)
  const navigate =useNavigate();
  const {id} =useParams();

  const handleDeleteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`)
        .then(()=>{
          setLoading(false);
          navigate('/');
        })
        .catch((e)=>{
          console.log(e);
          setLoading(false);
        })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">
            Delete Book
      </h1>
      {loading?<Spinner/>: ''}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-3xl">Are U Sure to Delete</h3>
          <button className="p-4 bg-red-500 text-white m-8 w-full"
          onClick={handleDeleteBook}>
Yap !! DEL it..
          </button>
    
    
     </div>

    </div>
  )
}

export default DeleteBook
