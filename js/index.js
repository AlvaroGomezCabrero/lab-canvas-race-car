window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    app.init('canvas');
  }


  const app = {
    name: 'Island Racer',
    description: 'Basic animated RaceCar app',
    version: '1.0.0',
    authors: 'Miriam y Alvaro',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,
    frames: 0,
    canvasSize: {
      w: window.innerWidth = 500, 
      h: window.innerHeight = 700, 
    },

    init(id) {
      this.canvasDom = document.getElementById(id)
      this.canvasDom.w = this.canvasSize.w
      this.canvasDom.h = this.canvasSize.h
      // this.canvasDom.setAttribute('width', this.canvasSize.w * .5),
      //   this.canvasDom.setAttribute('height', this.canvasSize.h),
        this.ctx = this.canvasDom.getContext('2d')
        this.car = new Car(this.ctx, 50, 250, 50, 100, this.canvasSize)
        this.drawRoad()
        this.drawCar('car.png')
        this.drawRoadLine()
        this.setEventListeners()
    
      //console.log('Este es el contexto 2d de Canvas:', this.ctx) 
    },

    drawRoad() { // PINTAR CARRETERA

      //this.ctx.beginPath()

      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      
      this.ctx.fillStyle = '#828282'
      this.ctx.fillRect(50, 0, this.canvasSize.w -100, this.canvasSize.h) // 1. 2. 3.left 4.bottom

      // this.ctx.fillStyle = 'white',
      // this.ctx.fillRect(70, 0, 12, this.canvasSize.h),
      // this.ctx.ffillRect(this.this.canvasSize.w-82, 0, 12, thistory.this.canvasSize.h)


      //this.ctx.fillStyle = 'grey'
     //this.ctx.fillRect(45, 0, 340, 600)

      //this.ctx.fillStyle = 'white'
      //this.ctx.fillRect(535, 315, 190, 600)

       },

    drawRoadLine() { // PINTAR LINEA DE LA CARRETERA
      
      //right cont line
      this.ctx.beginPath(),
      this.ctx.strokeStyle = 'white',
      this.ctx.lineWidth = 10,
      this.ctx.moveTo(435, this.canvasSize),
      this.ctx.lineTo(197, 600),
      this.ctx.stroke()
      
      
      //discontinous
      this.ctx.beginPath(),
      this.ctx.setLineDash([30, 50]) 
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 5
      this.ctx.moveTo(this.canvasSize.w/2, this.canvasSize.h)
      this.ctx.lineTo(this.canvasSize.w / 2, 0)
      this.ctx.stroke()
  
    },

    drawCar(car) { // ESTA PARTE DA FALLO EN CONSOLA
      this.car = new Car(this.ctx, name, 150, 500, 60, 80, 5, this.canvasSize)
      this.car.init()
    //   setInterval(() => {
        
    //     clearScreen() {
    //       this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    //     }
    //     car.draw(), 20)}
    // },
     
    // move(dir) {
    //    dir === 'left' ? this.posX -- : null
    //    dir === 'right' ? this.posX ++ : null
    //    }
  
    // },

    // setEventListeners() { // MOVIMIENTOS DEL COCHE
    //    document.onkeydown = e => {
    //       e.keyCode === 37 ? this.car.move('left') : null
    //       e.keyCode === 39 ? this.car.move('right') : null
    //   }
    },


  // CREAMOS CLASE PARA EL COCHE Y AÑADIMOS SU FOTO Y SUS FUNCIONES ASOCIADAS (VELOCIDAD Y MOVIMIENTO)
  class Car { 
    constructor (ctx, name, posX, posY, carW, carH, vel, canvasSize) {
      this.ctx = ctx
      this.name = name
      this.posX = posX
      this.posY = posY
      this.carW = carW
      this.carH = carH
      this.vel = vel
      this.canvasSize = canvasSize
      this.car = undefined
    }

    init() {
      this.car = new Image()
      this.car.src = '../images/car.png'
      console.log(this.car.src)
      this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)
    }

    move(dir) {
      dir === 'left' ? this.posX -- : null
      dir === 'right' ? this.posX ++ : null
   }
  
    draw() {
      console.log('draw')
      this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH) // pinta la nueva posicion
    }
  
}
}