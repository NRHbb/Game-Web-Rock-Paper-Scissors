import React, { useEffect, useState } from 'react'
import { updateScore, incrementWin, incrementLose, incrementDraw, incrementRound } from '../../store/gameInfoSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Nav, Navbar, NavItem, Row, Col } from 'react-bootstrap'
import AudioPlayer2 from '../media/AudioPlayer2'

import Image from 'next/image'
import Link from 'next/link'

export default function GamePage () {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const score = useSelector((state) => state.gameInfo.score)
  const { round, win, lose, draw } = useSelector((state) => state.gameInfo)
  const [pick, setPick] = useState('')
  const [computerPicks, setCom] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.email)
      } else {
        alert('You are not Logged in')
      }
    })
  }, [])

  const handlePicks = (pick) => {
    const picks = ['batu', 'gunting', 'kertas']
    const computerPicks = picks[Math.floor(Math.random() * picks.length)]

    setPick(pick)
    setCom(computerPicks)

    if (computerPicks === 'batu') {
      document.getElementById('batu2').style.background =
      '#C4C4C4'
      document.getElementById('gunting2').style.background =
      '#9C835F'
      document.getElementById('kertas2').style.background =
      '#9C835F'
    } else if (computerPicks === 'gunting') {
      document.getElementById('gunting2').style.background =
      '#C4C4C4'
      document.getElementById('kertas2').style.background =
      '#9C835F'
      document.getElementById('batu2').style.background =
      '#9C835F'
    } else {
      document.getElementById('kertas2').style.background =
      '#C4C4C4'
      document.getElementById('gunting2').style.background =
      '#9C835F'
      document.getElementById('batu2').style.background =
      '#9C835F'
    }
  }

  useEffect(() => {
    if (pick && computerPicks) {
      dispatch(incrementRound())
      if (pick === computerPicks) {
        setResult('draw')
        dispatch(incrementDraw())
      } else if
      ((pick === 'batu' && computerPicks === 'gunting') ||
         (pick === 'kertas' && computerPicks === 'batu') ||
         (pick === 'gunting' && computerPicks === 'kertas')) {
        setResult('player win')
        dispatch(updateScore(10))
        dispatch(incrementWin())
      } else {
        setResult('com win')
        dispatch(incrementLose())
      }
    }
  }, [pick, computerPicks, dispatch])

  useEffect(() => {
    const replace = document.querySelector('.replace')
    if (result === 'draw') {
      replace.innerHTML = 'DRAW'
      replace.classList.add('result')
      replace.style.background = '#035B0C'
      if (replace.classList.contains('versus')) {
        replace.classList.remove('versus')
      }
    } else if (result === 'player win') {
      replace.innerHTML = 'PLAYER 1 <br> WIN'
      replace.classList.add('result')
      replace.style.background = '#4C9654'
      if (replace.classList.contains('versus')) {
        replace.classList.remove('versus')
      }
    } else {
      replace.innerHTML = 'COM <br> WIN'
      replace.classList.add('result')
      replace.style.background = '#4C9654'
      if (replace.classList.contains('versus')) {
        replace.classList.remove('versus')
      }
    }
  }, [result])

  const handleReload = (e) => {
    e.preventDefault()
    window.location.reload()
  }

  return (
        <>
          <div className="body">
            <Nav className="me-auto d-flex nav-content">
              <NavItem className="games p-4 ms-2 d-flex" id="back">
                <Link href="/profile">
                  <Image src={'/back.png'} width={50} height={50} alt="" />
                </Link>
              </NavItem>
              <NavItem className="logo p-2 ms-2 d-flex" id="logo">
                <Image src={'/logo1.png'} width={80} height={80} alt="" />
              </NavItem>
              <NavItem className="headers p-4 ms-2 d-flex">
                <h1>ROCK PAPER SCISSORS</h1>
              </NavItem>
              <NavItem className="users p-4 col-6">
                  <Navbar.Text
                    style={{ fontSize: '1rem', color: 'black' }}>User Id : {name}
                  </Navbar.Text>
              </NavItem>
              </Nav>
            <Container className="title">
              <Row className="round">
                <Col className="ronde P-1 d-flex justify-content-end"><h2>Round: {round}</h2></Col>
              </Row>
              <Row className="user">
                <Col className="score p-5 d-flex"><h2>Score: {score}</h2></Col>
                <Col className="hasil p-5 d-flex"><h2>Win: {win}</h2></Col>
                <Col className="hasil p-5 d-flex"><h2>Draw: {draw}</h2></Col>
                <Col className="hasil p-5 d-flex"><h2>Lose: {lose}</h2></Col>
              </Row>
              <Row className="user">
                <Col className="player p-4 d-flex">Player 1</Col>
                <Col className="com p-4 d-flex">COM</Col>
              </Row>
              <Row className="row batu">
                <Col className="col-4 d-flex">
                  <Image
                    onClick={() => handlePicks('batu')}
                    className="option d-flex"
                    id="batu"
                    src="/batu.png"
                    width={250}
                    height={186}
                    alt=""
                    />
                </Col>
              <Col className="col-4"></Col>
                <Col className="col-4 d-flex">
                  <Image
                    className="random d-flex"
                    id="batu2"
                    src="/batu.png"
                    width={188}
                    height={186}
                    alt=""
                    />
                </Col>
              </Row>
              <Row className="row kertas">
                <Col className="col-4 d-flex">
                  <Image
                    onClick={() => handlePicks('kertas')}
                    className="option d-flex"
                    id="kertas"
                    src="/kertas.png"
                    width={188}
                    height={229}
                    alt=""
                    />
                </Col>
                <Col className="d-flex versus">
                  <div className="replace d-flex">VS</div>
                </Col>
                <Col className="col-4 d-flex">
                  <Image
                    className="random d-flex"
                    id="kertas2"
                    src="/kertas.png"
                    width={188}
                    height={229}
                    alt=""
                    />
                </Col>
              </Row>
              <Row className="row gunting">
                <Col className="col-4 d-flex">
                  <Image
                    onClick={() => handlePicks('gunting')}
                    className="option d-flex"
                    id="gunting"
                    src="/gunting.png"
                    width={200}
                    height={231}
                    alt=""
                    />
                </Col>
                <Col className="col-4"></Col>
                <Col className="col-4 d-flex">
                    <Image
                    className="random d-flex"
                    id="gunting2"
                    src="/gunting.png"
                    width={200}
                    height={231}
                    alt=""
                    />
                </Col>
              </Row>

              <div className="refresh">
                <div className="col-md-6 offset-md-3">
                  <Image src={'/refresh.png'} width={70} height={70} alt="" className="refresh-img" onClick={handleReload} />
                </div>
              </div>
            </Container>
          </div>
          <AudioPlayer2 />
        </>
  )
}
