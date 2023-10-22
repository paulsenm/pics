import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({images}) {
    console.log("The images are: ", images);
    const renderedImages = images.map((image, index) => {
        return <ImageShow image={image} key={image.id} />
    })
    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList;