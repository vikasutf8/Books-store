import { useState ,useEffect } from 'react'
import axios from 'axios';

import BackButton from '../Components/BackButton'   
import Spinner from '../Components/Spinner'
import { useNavigate ,useParams} from 'react-router-dom';

const EditBook = () => {

  const [title,setTitle] =useState('')
  const [author,setAuthor] =useState('')
  const [publishYear,setPublishYear] =useState('')
  const [loading,setLoading] =useState(false)
  const navigate =useNavigate();
  const {id} =useParams();

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`)
    .then((res)=>{
      console.log(res.data)
      setAuthor(res.data.book.author)
      setTitle(res.data.book.title)
      setPublishYear(res.data.book.publishYear)
      setLoading(false)
      console.log(loading)
    })
    .catch((e)=>{
      console.log(e)
      setLoading(false)
    })
  },[])



  const handleEditBook =()=>{
    const data ={
      title,
      author,
      publishYear,
    }
    setLoading(true)
    axios
      .put(`http://localhost:3000/books/${id}`,data)
      .then(()=>{
        
        setLoading(false)
        navigate('/')

      })
      .catch((e)=>{
        setLoading(false)
        alert('An error happended')
        console.log(e)
      })
  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {
        loading? <Spinner/> : ''
      }

      <div className='flex flex-col border-2 border-sky-600 rounded-lg w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Title</label>
          <input type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Author</label>
          <input type="text"
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input type="text"
            value={publishYear}
            onChange={(e)=> setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='border-2 border-gray-500 px-4 py-2 w-full'
        onClick={handleEditBook}>
          Save Book
        </button>
      </div>
    </div>
  )
}

export default EditBook

