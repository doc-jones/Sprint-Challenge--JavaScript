// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume() {
        return this.lenght * this.width * this.height;
    }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume(4, 5, 5)); // 100
// console.log(cuboid.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cubeMakerprops) {
        super(cubeMakerprops);
    }
}