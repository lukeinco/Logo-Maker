class Shapes {
    constructor(){
        this.color = ''
        this.textColor = ''
        this.letters= ''
    }
    setColor(color){
        this.color= color;
    }
    setTextColor(textColor){
        this.textColor= textColor;
    }
    setLetters(letters){
        this.letters= letters;
    }
};



class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill = "${this.color}" /><text x="50%" y="75%"`
    }
};

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="50%" y="55%"`
    }
};

class Square extends Shapes {
    render(){
        return `<rect width="300" height="200" fill = "${this.color}" /><text x="50%" y="50%"`
    }
};

export { Triangle, Circle, Square };