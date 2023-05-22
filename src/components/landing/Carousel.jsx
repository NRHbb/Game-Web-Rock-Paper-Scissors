/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Carousel, Container, Row } from 'react-bootstrap'
// import image1 from '/rockpaperstrategy-1600.jpg'
// import image2 from '/congkak.jpg'
// import image3 from '/gasing.jpg'
import Image from 'next/image'

export default function Gallery () {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
        <>
            {/* <Head>
                <link rel="stylesheet" href="/landing.css" />
            </Head> */}

            <section id="about">
                <div className='gallery'>
                    <Container>
                        <Row>
                            <div className="col-sm-5 gallery-text pt-5 mt-5 text-white">
                                <h3>What's so special?</h3>
                                <h1 className="fw-bold text-uppercase">the games</h1>
                            </div>
                            <div className="col-sm-7 d-flex pt-5 mt-5">
                                <Carousel className="carousel-container " activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <Image
                                            className="d-block w-100 "
                                            src={'/rockpaperstrategy-1600.jpg'}
                                            width={858}
                                            height={477}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Rock, Paper, Scissors</h3>
                                            <div>Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            className="d-block w-100"
                                            src={'/congkak.jpg'}
                                            width={858}
                                            height={477}
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Congklak</h3>
                                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image
                                            className="d-block w-100"
                                            src={'/gasing.jpg'}
                                            width={858}
                                            height={477}
                                            alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Gasing</h3>
                                            <div>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>

                        </Row>

                    </Container>
                </div>
            </section>
        </>

  )
}

// render(<ControlledCarousel />);
