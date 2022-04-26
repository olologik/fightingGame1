const canvas = document.querySelector ('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

// рисуем залитый прямоугольник - границу блока canvas
c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2

// создаём класс со методами 1позиционирование 2рисование 3обновление
class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }
}

// создаём блок "игрок" с ранее заданными свойствами
const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

// создаём блок "враг" с ранее заданными свойствами
const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})

console.log(player)

// создаем фунцию анимация, которая циклична и вызывает саму себя
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0,0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()
