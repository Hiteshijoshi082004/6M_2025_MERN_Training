import { useState } from "react";

export default function Imagegame() {
    const Imagedata = ['1.webp', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    const [isGameStart, setIsGameStart] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [img1, setImg1] = useState(0);
    const [img2, setImg2] = useState(0);
    const [img3, setImg3] = useState(0);
    const [img4, setImg4] = useState(0);

    const getRandomImageIndex = () => {
        return Math.floor(Math.random() * Imagedata.length); 
    };

    const startGame = () => {
        setIsGameStart(true);

        const mainImgIndex = getRandomImageIndex();
        setCurrentImage(Imagedata[mainImgIndex]); 

        setImg1(getRandomImageIndex());
        setImg2(getRandomImageIndex());
        setImg3(getRandomImageIndex());
        setImg4(getRandomImageIndex());
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: "blue", minHeight: "100vh" }}>
            <div className="row">
                <div className="col">
                    <button className="btn btn-success d-block mx-auto mt-4" onClick={startGame}>
                        Start
                    </button>
                </div>
            </div>

            {isGameStart && (
                <>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center text-warning mt-3">Game starts now!!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <img
                                src={currentImage}
                                alt="Main game"
                                className="d-block mx-auto mt-4"
                                height="250px"
                                width="350px"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mt-5 d-flex justify-content-evenly flex-wrap">
                            <img src={Imagedata[img1]} alt="option1" width="300px" height="200px" />
                            <img src={Imagedata[img2]} alt="option2" width="300px" height="200px" />
                            <img src={Imagedata[img3]} alt="option3" width="300px" height="200px" />
                            <img src={Imagedata[img4]} alt="option4" width="300px" height="200px" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
