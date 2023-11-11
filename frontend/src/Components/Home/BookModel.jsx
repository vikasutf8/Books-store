import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModel = ({ book, onClose }) => {
    console.log(book)
    console.log(onClose)
    return (
        <div className='fixed bg-black bg-opacity-80 top-0 bottom-0 left-0 right-0 z-50 justify-center items-center' onClick={onClose}>

            <div onClick={(e) => e.stopPropagation()}
                className='w-[450px] max-w-full h-[280px]  bg-gray-600 rounded-xl p-4 flex flex-col relative'>
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose} />
                <h2 className=' w-fit px-4 m-auto py-1 bg-gray-700 rounded-lg'>
                    {book.publishYear}</h2>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-200 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='p-6 text-gray-200'>Anything ....</p>
                <p className='my-4  text-gray-200'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam earum a maiores, quos reprehenderit, tempore vel beatae aut mollitia possimus aliquid. Ad cupiditate sint velit suscipit aspernatur at sed.
                </p>
            </div>

        </div>
    )
}

export default BookModel
