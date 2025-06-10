$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();//


    // TODO 2 - Create Platforms
createPlatform(300, 400, 20, 210)
createPlatform(0, 400, 300, 20)
createPlatform(490, 500, 110, 20)
createPlatform(0, 650, 100, 20)
createPlatform(200, 550, 100, 20)
createPlatform(300, 610, 100, 20)
createPlatform(500, 0, 20, 400)
createPlatform(500, 390, 100, 20)
createPlatform(600, 500, 10, 20)
createPlatform(590, 280, 120, 20)
createPlatform(600, 190, 100, 20)
createPlatform(900, 300, 200, 10)
createPlatform(600, 80, 110, 20)
createPlatform(1100, 200, 300, 10)
createPlatform(1300, 100, 20, 100)
createPlatform(900, 100, 300, 20)
createPlatform(900, 300, 20, 440)
createPlatform(1000, 400, 400, 10)
createPlatform(900,500, 400, 10)
createPlatform(1000, 600, 400, 10)
createPlatform(1300, 740, 20, -140)
createPlatform(900, 700, 40, 10)
createPlatform(397, 300, 110, 10)
createPlatform(400, 190, 100, 10)
createPlatform(580, 500, 20, 440)
createPlatform(400, 100, 10, 100)
createPlatform(100, 200, 100, 10)
createPlatform(350, 100, 100, 10)
createPlatform(300, 500, 40, 20);

    // TODO 3 - Create Collectables
    createCollectable("screw", 450, 150, 0, 0);
    createCollectable("screw", 1350, 150, 0, 0);
    createCollectable("screw", 1350, 700, 0, 0);
    createCollectable("screw", 250, 500, 0, 0);



    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 2000);
    createCannon("right", 370, 2000);
    createCannon("top", 700, 3000);
    createCannon("top", 800, 3000);
    createCannon("top", 900, 3000);
    createCannon("top", 1400, 2000);
    createCannon("left", 0, 2000);
    createCannon("right", 500, 3000)
    createCannon("bottom", 100, 3000)
    createCannon("bottom", 0, 2000)
    createCannon("right", 600, 2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
