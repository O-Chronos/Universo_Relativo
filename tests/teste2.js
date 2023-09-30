const { Engine, Render, Runner, Bodies, World, MouseConstraint, Mouse } = Matter;



const engine = Engine.create();
const world = engine.world;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 600,
        height: 600,
        wireframes: false,
    }
});


Render.run(render);
Runner.run(Runner.create(), engine);

// Criando objetos sólidos
const caixa1 = Bodies.rectangle(400, 200, 200, 80);
const caixa2 = Bodies.rectangle(450, 50, 80, 80);
const chao = Bodies.rectangle(50, 550, 1500, 100, { isStatic: true});



// Adicionando interação do mouse
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});
World.add(world, [caixa1, caixa2,chao]);
World.add(world, mouseConstraint);

render.mouse = mouse;