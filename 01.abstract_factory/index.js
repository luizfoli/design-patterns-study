class Factory {

    constructor(factoryType) {
        switch(factoryType) {

            case "sneaker":
                return new SneakerFactory;

            case "videogame":
                return new VideoGameFactory;

            default:
                return null;
        }
    }

    createProduct = () => {};
};

class SneakerFactory extends Factory {

    createProduct = () => {
        console.log('Creating the sneaker');
    }
}

class VideoGameFactory extends Factory {
    
    createProduct = () => {
        console.log('Creating the video-game');
    }
}

const nike = new Factory("sneaker");
const playstation = new Factory("videogame");

nike.createProduct();
playstation.createProduct();
