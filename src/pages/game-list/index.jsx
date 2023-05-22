import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'
import ItemCard from '../../components/ui/ItemCard'
import { useSelector, useDispatch } from 'react-redux'

export default function GameList () {
  const isGame1Played = useSelector((state) => state.game.playedGame1)
  const isGame2Played = useSelector((state) => state.game.playedGame2)
  const isGame3Played = useSelector((state) => state.game.playedGame3)

  return (
    <div className='gl-wrapper'>
      <div className='container gl-container'>
        <header>
          <Link href='/home' className='gl-header'>
            <FaChevronLeft /> Back
          </Link>
        </header>
        <main>
          <div className='gl-page-title'>
            <h1>GAME LIST.</h1>
          </div>
          <div className='gl-content-wrapper'>
            <div className='gl-content-header'>
              <p>Current Trending Games</p>
              <button>View All</button>
            </div>
            <div className='gl-content-list'>
              <ItemCard
                played={isGame1Played}
                to='/game-detail'
                image='/game-list-1.png'
                title='Rock Paper Scissors'
                width={600}
                height={500}
              />
              <ItemCard
                played={isGame2Played}
                to='#'
                image='/game-list-2.jpeg'
                title='Coming Soon'
                status='coming-soon'
                width={600}
                height={500}
              />
              <ItemCard
                played={isGame3Played}
                to='#'
                image='/game-list-3.jpg'
                title='Coming Soon'
                status='coming-soon'
                width={600}
                height={500}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
