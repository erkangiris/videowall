/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useLayoutEffect, useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const posterRef = useRef(null);
  const containerRef = useRef(null);
  const pieceRef = useRef(null);

  const [poster, setposter] = useState(0);
  const [container, setcontainer] = useState(0);
  const [piece, setpiece] = useState(0);

  useLayoutEffect(() => {
    setposter(posterRef.current.offsetWidth);
    setcontainer(containerRef.current.offsetWidth);
    setpiece(pieceRef.current.childElementCount);
  }, []);


  console.log(piece)

  // const lg = document.querySelectorAll('[className=area_container]')
  // console.log(lg)


  /*
  
  
  */

  return (

    <div>
      <Head>
        <title>VideoWall</title>
      </Head>
      <div className='w-full h-full fixed top-0 left- right-0 bottom-0 grid bg-gray-900 grid-cols-2' ref={pieceRef}>
        <div className='text-white bg-gray-800 flex items-center justify-center area_container' ref={containerRef}>
          <div className={`area`}>
            <figure className='area_poster' ref={posterRef}>
              <img src='/img/af1.jpg' alt='alt' />
            </figure>
            <div className='area_content'>
              <span className='area_content__title' style={{ maxWidth: poster > container ? poster : container, fontSize: (container > poster && piece >= 2) ? '1.7vw' : '4vw' }}>The Matrix Resurrections The Matrix Resurrections</span>
              <ul className='area_content__genre'>
                <li>Aksiyon</li>
                <li>Macera</li>
                <li>Bilim Kurgu</li>
              </ul>
              <div className='area_content__info'>
                <time>150 Dakika</time>
                <span>3D</span>
                <figure>
                  <img src='/img/yas.svg' alt='alt' />
                  <img src='/img/siddet.svg' alt='alt' />
                  <img src='/img/cinsellik.svg' alt='alt' />
                  <img src='/img/olumsuzornek.svg' alt='alt' />
                </figure>
              </div>
              <div className='area_content_seances'>
                <strong className='area_content_seances__title'>SALON 4</strong>
                <div className='area_content_seances__seances'>
                  {
                    [0, 1, 2, 3, 4].map((item, index) => {
                      return (
                        <div key={index}>
                          <strong>11:45</strong>
                          <span>ALTYAZILI</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white bg-gray-700 flex items-center justify-center area_container'>
          <div >Portrait</div>
        </div>
        {/* <div className='text-white bg-gray-600 flex items-center justify-center area_container'>
          <div >Portrait</div>
        </div>
        <div className='text-white bg-gray-500 flex items-center justify-center area_container'>
          <div >Portrait</div>
        </div> */}
      </div>
    </div>
  )
}


