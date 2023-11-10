import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from '../Components/BackButton'
import Spinner from "../Components/Spinner"

const ShowBook = () => {
  const [book,setBooks] =useState({});
  const [loading,setLoading]=useState(false);
  const {id} =useParams();

useEffect(()=>{
  setLoading(true);
  axios.get(`http://localhost:3000/books/${id}`)
        .then((res)=>{
          console.log(res.data.book)
          setBooks(res.data.book)
          console.log(res.data.book)

          setLoading(false)
          console.log(res.data.book);
          console.log(loading)
        })
        .catch((E)=>{
          console.log(E);
          setLoading(false);
        })
},[])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-3">
        Show Books
      </h1>
      {loading ? (
        <Spinner/>
      ):
      (
        <div className="flex flex-col border-2 rounded-xl w-fit p-3">
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">ID</span>
          <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">Title</span>
          <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">Author</span>
          <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">Publish Year</span>
          <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">Created Time</span>
          <span>{new Date(book.createAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-red-300">Updated Time</span>
          <span>{new Date(book.updateAt).toString()}</span>
          </div>
        </div>

      )}
    </div>
  )
}

export default ShowBook
