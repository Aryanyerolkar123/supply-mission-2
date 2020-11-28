class Box {
    constructor(x, y, width, height) {
        var options = {
            friction:10,
            density:10
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height)
        this.width = width
        this.height = height
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x = pos.y)
        rotate()
        rect(x, y, this.width, this.height)
    }
}