import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookTable from '../Components/Home/BookTable'
import BooksCard from '../Components/Home/BooksCard'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table')
  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/books/")
      .then((res) => {
        // console.log(res.data)
        setBooks(res.data.data)
        setLoading(false)
        // console.log(res.data)

      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })
  }, [])
  return (
    <div className='p-3'>

      <div className='flex justify-center items-center gap-x-5'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('table')}>
          TABLE
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setShowType('card')}>
          CARD
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-500 text-4xl' />
        </Link>
      </div>
      {
        loading ? (<Spinner />) : showType === 'table' ?
          (
            <BookTable books={books} />
          ) :
          (<BooksCard books={books} />)
      }

    </div>
  )
}

export default Home
