// import from assets
import StandardBoard801 from '../../assets/img/standard_board_801.png';

const Index = () => {
  return (
    <>
        <div className='grid md:grid-cols-2 grid-cols-1 bg-red-400 mt-6'>
            <div className='col-span-1'>
                <img src={StandardBoard801} alt="Standard board for playing chess"
                className='object-cover h-img_bigsize w-img_bigsize rounded' />
            </div>
            <div className='col-span-1 bg-green-400'>
                <h1 className='text-center text-4xl'>Play chess online on the #1 site!</h1>
            </div>
        </div>
    </>
  )
}

export default Index