import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox } from 'react-icons/md'
import BooksTable from '../Components/Home/BooksTable'
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

      <div className='flex justify-center items-center gap-x-10 m-auto'>
        <button className='bg-gray-700 hover:bg-sky-500 px-6 py-2 rounded-lg' onClick={() => setShowType('table')}>
          TABLE
        </button>
        <button className='bg-gray-700 hover:bg-sky-500 px-6 py-2 rounded-lg ' onClick={() => setShowType('card')}>
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
          (<BooksTable books={books} />) :(<BooksCard books={books} />)
      }

    </div>
  )
}

export default Home
