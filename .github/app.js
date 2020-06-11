//app.init('myCanvas')
// app.drawFilledSquares()
// app.drawLinearSquares()
// app.drawLines()
// app.drawManyLines()
// app.drawArc()
// app.drawText('¡Merluzo!')
// app.drawImage('football-ball.png')


// movingApp.init('myCanvas')

controlsApp.init('myCanvas')


const App = {
    name: 'RaceCar App',
    description: 'Basic animated RaceCar app',
    version: '1.0.0',
    author: 'Miriam y Alvaro',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,
    frames: 0,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },



    //drawFilledSquares() {
    //this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    //this.ctx.fillStyle = '#fff'
    //this.ctx.fillRect(100, 100, this.canvasSize.w - 200, this.canvasSize.h - 200)

    //this.ctx.fillStyle = 'red'
    //this.ctx.fillRect(this.canvasSize.w / 2 - 25, 10, 50, this.canvasSize.h - 20)

    drawLines() {
        this.ctx.beginPath()
        this.ctx.srokeStyle = 'blue'
        this.ctx.lineWidth = 15
        this.ctx.moveTo(100, 100) /
            this.ctx.lineTo(200, 200)
        this.ctx.lineTo(300, 50)
        this.ctx.stroke()
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 20])
        this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 8
        this.ctx.moveTo(this.canvasSize.w / 2 - 4, 100)
        this.ctx.lineTo(this.canvasSize.w / 2 - 4, this.canvasSize.h - 100)
        this.ctx.stroke()




    }
}




document.querySelector('canvas').setAttribute('width', ) = window.innerWidth
document.querySelector('canvas').height = window.innerHeight