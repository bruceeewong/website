import { FC, useEffect, useRef } from 'react';
import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
import debounce from 'lodash-es/debounce.js';

class Bubble {
  maxHeight: number;
  maxWidth: number;
  posX: number;
  posY: number;
  movementX: number;
  movementY: number;
  size: number;
  colour: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.maxHeight = canvasHeight;
    this.maxWidth = canvasWidth;
    this.posX = 0;
    this.posY = 0;
    this.movementX = 0;
    this.movementY = 0;
    this.size = 0;
    this.colour = 0;
    this.randomise();
  }

  generateDecimalBetween(min: number, max: number) {
    return Number((Math.random() * (min - max) + max).toFixed(2));
  }

  update() {
    this.posX = this.posX - this.movementX;
    this.posY = this.posY - this.movementY;

    if (this.posY < 0 || this.posX < 0 || this.posX > this.maxWidth) {
      this.randomise();
      this.posY = this.maxHeight;
    }
  }

  randomise() {
    this.colour = Math.random() * 255;
    this.size = this.generateDecimalBetween(2, 10);
    this.movementX = this.generateDecimalBetween(-0.4, 0.4);
    this.movementY = this.generateDecimalBetween(0.7, 2);
    this.posX = this.generateDecimalBetween(0, this.maxWidth);
    this.posY = this.generateDecimalBetween(0, this.maxHeight);
  }
}

class background {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private bubblesList: Bubble[];

  constructor(canvasRef: HTMLCanvasElement) {
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.bubblesList = [];
    this.generateBubbles();
    this.animate();
  }

  animate() {
    let self = this;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.bubblesList.forEach(function (bubble) {
      bubble.update();
      self.ctx.beginPath();
      self.ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
      self.ctx.fillStyle = 'hsl(' + bubble.colour + ', 40%, 39%)';
      self.ctx.fill();
      self.ctx.strokeStyle = 'hsl(' + bubble.colour + ', 40%, 39%)';
      self.ctx.stroke();
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  addBubble(bubble: Bubble) {
    return this.bubblesList.push(bubble);
  }

  generateBubbles() {
    let self = this;
    for (let i = 0; i < self.bubbleDensity(); i++) {
      self.addBubble(new Bubble(self.canvas.width, self.canvas.height));
    }
  }

  bubbleDensity() {
    return Math.sqrt((this.canvas.height, this.canvas.width) * 5);
  }
}

const FloatingBubbles: FC<StyleProps> = ({ className, children }) => {
  const bgRef = useRef(null);
  useEffect(() => {
    const animate = debounce(() => {
      if (!bgRef.current) return;
      new background(bgRef.current);
    }, 500);
    animate();
    window.addEventListener('resize', animate);
    return () => {
      window.removeEventListener('resize', animate);
    };
  }, []);
  return (
    <div className={classnames('relative', className)}>
      <canvas
        ref={bgRef}
        className={classnames('absolute z-[-1] h-full w-full')}
      ></canvas>
      {children}
    </div>
  );
};

export default FloatingBubbles;
