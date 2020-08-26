const {Engine, Render, Runner, World, Bodies} = Matter;

const width = 1200;
const height = 600;

const engine = Engine.create();
const {world} = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options:{
        wireframes: false,
        width: width,
        height: height
    }
});

Render.run(render);

Runner.run(Runner.create(), engine);



//walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40,{ isStatic: true}),
    Bodies.rectangle(width/2, height, width, 40,{ isStatic: true}),
    Bodies.rectangle(0, height/2, 40, height,{ isStatic: true}),
    Bodies.rectangle(width, height/2, 40, height,{ isStatic: true}),
];

World.add(world, walls);


const grid = Array(3).fill(null).map(() => Array(4).fill(false)); //map a new array to every element in the array. 
//This avoids a JS problem, where the array is not unique if you use a 2nd Array()
console.log(grid)