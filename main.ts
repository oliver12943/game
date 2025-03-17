namespace SpriteKind {
    export const Artefact = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
    mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Artefact)
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile14`)
    info.changeScoreBy(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.setGameOverEffect(false, effects.none)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Double)), music.PlaybackMode.LoopingInBackground)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Artefact, function (sprite, otherSprite) {
    game.gameOver(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`main character`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setScale(0.3, ScaleAnchor.Middle)
info.setScore(1000)
game.onUpdate(function () {
    info.changeScoreBy(-1)
    if (info.score() <= 0) {
        game.gameOver(false)
    }
})
