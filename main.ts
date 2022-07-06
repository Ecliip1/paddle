namespace SpriteKind {
    export const leftpaddle = SpriteKind.create()
    export const rightpaddle = SpriteKind.create()
}
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . d . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . d 1 . . . . . . . . . . . . . 
        . . d . . . . . . . . . . . . . 
        `, SpriteKind.rightpaddle)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        . . . . . . . . . . . . . d . . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . 1 d . 
        . . . . . . . . . . . . . d . . 
        `, SpriteKind.leftpaddle)
    controller.moveSprite(left_paddle, 0, 100)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
