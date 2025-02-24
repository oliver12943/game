scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.setGameOverEffect(false, effects.none)
    music.play(music.tonePlayable(233, music.beat(BeatFraction.Double)), music.PlaybackMode.LoopingInBackground)
    game.gameOver(false)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(assets.image`main character`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setScale(0.3, ScaleAnchor.Middle)
