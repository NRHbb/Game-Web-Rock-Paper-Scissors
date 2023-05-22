import Link from 'next/link'
import Image from 'next/image'

export default function ItemCard ({
  played,
  to,
  image,
  title,
  status,
  width,
  height
}) {
  return (
    <div className='item-card-wrapper'>
      <Link href={to} className='card-box-wrapper'>
        <div className='card-box'>
          <Image src={image} alt='' width={width} height={height} />
          {played && (
            <div className='card-box-overlay'>You Played This Game</div>
          )}
        </div>
      </Link>
      <Link href='/' className='card-title-wrapper'>
        <p className={`card-title ${status}`}>{title}</p>
      </Link>
    </div>
  )
}
