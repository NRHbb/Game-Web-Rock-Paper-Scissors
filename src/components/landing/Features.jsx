import React from 'react'
import { Row } from 'react-bootstrap'
// import bulet from "../../public/ellipse.svg"
// import bulet from '/ellipse.svg'
// import bulet2 from '/Ellipse transparant.png'
// import Head from "next/head"
import Image from 'next/image'

export default function Features () {
  return (
        <>
            {/* <Head>
                <link rel="stylesheet" href="/landing.css" />
            </Head> */}
            <section id="features">
                <div className='features text-white'>
                    <Row className='justify-content-end features-contents'>
                        <div className='col-lg-5 features-info mb-2'>
                            <h3 className="features-head pt-4">What`s so special?</h3>
                            <h1 className="features-child pt-4 pb-5 text-uppercase">features</h1>
                        </div>
                    </Row>
                    <Row className='justify-content-end features-timeline'>
                        <div className='col-lg-5 features-timeline-content'>
                            <Row className="timeline">
                                <div className="col-2 dot-1 mt-1">
                                    <Image src={'/ellipse.svg'} width={14} height={14} alt="" />
                                </div>
                                <div className="col-6 timeline-info ">
                                    <h3 className="text-uppercase timeline-head fw-bold">Traditional Games</h3>
                                    <h3 className="timeline-child">If you miss your childhood, we provide many traditional games here</h3>
                                </div>
                            </Row>
                            <Row className="timeline">
                                <div className="col-2 dot-1 mt-1">
                                    <Image src={'/Ellipse transparant.png'} width={14} height={14} alt="" />
                                </div>
                                <div className="col-6 timeline-info ">
                                    <h3 className="text-uppercase timeline-head fw-bold">game suit</h3>
                                </div>
                            </Row>
                            <Row className="timeline">
                                <div className="col-2 dot-1 mt-1">
                                    <Image src={'/Ellipse transparant.png'} width={14} height={14} alt="" />
                                </div>
                                <div className="col-6 timeline-info ">
                                    <h3 className="text-uppercase timeline-head fw-bold">tbd</h3>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </div>
            </section>
        </>

  )
}
