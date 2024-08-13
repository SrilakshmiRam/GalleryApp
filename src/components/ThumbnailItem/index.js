import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setISActiveThumbnail, isActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const OnClickThumbnailImage = () => {
    setISActiveThumbnail(id)
  }

  const ThumbnailClassname = isActiveThumbnail
    ? `thumbnailimage active`
    : `thumbnailimage`

  return (
    <li className="Thumbnail-Item">
      <button className="button" type="button" onClick={OnClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={ThumbnailClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem