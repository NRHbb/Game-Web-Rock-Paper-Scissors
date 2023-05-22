import React, { useState, useEffect } from 'react'
// import arrow from '/scroll-down.svg'
import { Button } from 'react-bootstrap'
import NavigationBar from './Navbar'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function MainScreen () {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState('false')

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLoggedIn(true)
    }
  }, [])

  const handleClick = () => {
    if (!loggedIn) {
      router.push('/game-list')
    } else {
      alert('Please log in to play.')
      router.push('/login')
    }
  }

  return (
    <>
      <section id="home">
        <div className='main-screen'>
          {<NavigationBar />}
          <div className="main-text pt-5 mt-5 text-center text-white">
            <h1 className="text-uppercase fw-bold">play traditional game</h1>
            <h3>Experience new traditional games</h3>
            <Button
              variant="warning"
              className="btn btn-lg text-uppercase fw-bold mt-2 px-5"
              onClick={handleClick}
            >
              Play now
            </Button>
          </div>
          <div className="the-story text-center text-white">
            <div className="text-uppercase text-bold">the story <br />
              <Image src={'/scroll-down.svg'}
                width={20}
                height={8} alt="down-arrow" />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
