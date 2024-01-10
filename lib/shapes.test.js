const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle color', () => {
    test('renders correctly with blue color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        const expectedRender = '<polygon points="150, 18 244, 182 56, 182" fill = "blue" /><text x="50%" y="75%"';  
        expect(shape.render()).toEqual(expectedRender);
    });
});

describe('Square color', () => {
    test('renders correctly with red color', () => {
        const shape = new Square();
        shape.setColor("red");
        const expectedRender = '<rect width=\"300\" height=\"200\" fill = \"red\" /><text x=\"50%\" y=\"50%\"';  
        expect(shape.render()).toEqual(expectedRender);
    });
});

describe('Circle color', () => {
    test('renders correctly with gray color', () => {
        const shape = new Circle();
        shape.setColor("gray");
        const expectedRender = '<circle cx="150" cy="100" r="80" fill="gray" /><text x="50%" y="55%"';  
        expect(shape.render()).toEqual(expectedRender);
    });
});