import './ImageShow.css';


function ImageShow({ image }) {
    return (
        <div>
            <img src={image.urls.thumb}/>
        </div>
    )
}

export default ImageShow;