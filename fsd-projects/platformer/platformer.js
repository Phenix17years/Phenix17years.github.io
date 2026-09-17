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
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(0, 0, 0)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(400, 650, 50, 50, "black");

    createPlatform(300, 0, 20, 190);
    createPlatform(850, 400, 50, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(500, 550, 50, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(650, 450, 50, 50, "black");

    createPlatform(500, 0, 20, 290);
    createPlatform(1050, 400, 50, 50, "black");

        createPlatform(500, 0, 20, 650);
       createPlatform(650, 675, 50, 50, "black");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1000, 350);
    createCollectable("diamond", 200, 170, 0.5, 0.7);

    createCollectable("steve", 500, 500);
    createCollectable("diamond", 200, 170, 0.5, 0.7);

    createCollectable("steve", 1350, 500);
    createCollectable("diamond", 1050, 170, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("right", 300, 1300);
    createCannon("right", 600, 1800);
    createCannon("top", 700, 1300);
    createCannon("top", 1000, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
