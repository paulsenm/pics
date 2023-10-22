import ImageShow from "./ImageShow";

function ImageList({images}) {
    console.log("The images are: ", images);
    const renderedImages = images.map((image, index) => {
        return <ImageShow image={image} key={image.id} />
    })
    return (
        <div>
            {renderedImages}
        </div>
    )
}

export default ImageList;