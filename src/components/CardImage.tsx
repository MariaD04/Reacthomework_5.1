export const CardImage = ({src, alt}: ICardImage) => {
  return (
    <img src={src} className="card-img-top" alt={alt} />
  )
}

export default CardImage