import ImageShow from "./ImageShow";

function ImageList({images}) {
    console.log("The images are: ", images);
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} />
    })
    return (
        <div>
            {renderedImages}
        </div>
    )
}

export default ImageList;