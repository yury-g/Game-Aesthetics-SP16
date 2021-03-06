function Player() {
  this.x;
  this.y;
  this.player_sprite;
  this.onGround;

  this.setupPlayer = function(x, y, hbx, hby, hbw, hbh) {
    this.x = x;
    this.y = y;
    this.player_sprite = createSprite(this.x, this.y);
    this.player_sprite.setCollider("rectangle", hbx, hby, hbw, hbh);
    this.player_sprite.addAnimation('walk', player_walk);
    this.player_sprite.addAnimation('stand', player_stand);
    this.player_sprite.debug = true;
    this.player_sprite.maxSpeed = 20;
    this.onGround = false;
  };

  this.update = function() {
    // if (this.player_sprite.touching.bottom) console.log("bottom");
    // if (this.player_sprite.touching.top) console.log("top");
    // if (this.player_sprite.touching.right) console.log("right");
    // if (this.player_sprite.touching.left) console.log("left");

    
    
    if (this.onGround === false) {
      this.player_sprite.velocity.y += 1;
      for (var i = 0; i < solidSprites.length; i++) {
        if (this.player_sprite.collide(solidSprites[i]) === true) {
          if (this.player_sprite.touching.bottom === true) {
            this.onGround = true;
            this.player_sprite.velocity.y = 0;
          }
          if (this.player_sprite.touching.top === true) {
            if (this.player_sprite.velocity.y < 0) {
              this.player_sprite.velocity.y = 0;
            }
          }
        }
      }
    } else {
      var stayOnGround = false;
      for (i = 0; i < solidSprites.length; i++) {
        
        if (solidSprites[i].overlapPoint(player.player_sprite.position.x, player.player_sprite.position.y + 40 + 1)) {
          stayOnGround = true;
        } 
      }
      if (stayOnGround === false) {
        this.onGround = false;
      } 
    }
    

    // console.log(this.onGround);

    camera.position = this.player_sprite.position;

    if (keyDown("a")) {
      this.player_sprite.velocity.x = -4;
      // camera.zoom = 0.9;
    }

    if (keyDown("d")) {
      this.player_sprite.velocity.x = 4;
      // camera.zoom = 0.9;
    }

    if (keyWentDown("w")){// && this.onGround === true) {
      this.player_sprite.velocity.y = -18;
      // camera.zoom = 0.9;
    }

    if (!keyDown("a") && !keyDown("d")) {
      this.player_sprite.velocity.x = 0;
      // camera.zoom = 1.0
    } else {
      // camera.zoom = 0.5;
    }
  };

}