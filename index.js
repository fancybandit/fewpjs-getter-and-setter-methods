class Circle {

    constructor(radius) {
        this.radius = radius;
    };


    // Diameter
    get diameter() {
        return this.radius * 2;
    };

    set diameter(diameter) {
        this.radius = diameter / 2;
    };


    // Circumference
    get circumference() {
        return Math.PI * this.diameter;
    };

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI);
    };


    // Area
    get area() {
        return Math.PI * (this.radius ** 2);
    };

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    };
};