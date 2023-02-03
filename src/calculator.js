let instruct = document.getElementById('instructions');
instruct.innerHTML =
  "Below is a sample of what a basic riemann sum looks like. To use this page click on the first expression and input a valid function with the format of 'f(x) = x'. You will be able to use the sliders to control the interval that you would want to simulate. Use the partitions to be able to increase of decrease the amount of partitions used to estimate the area under the curve. Use the method to choose between a left point, midpoint, or right point sum method.";

const elt = document.getElementById('calculator');

const calculator = Desmos.GraphingCalculator(elt, {
  zoomButtons: false,
  expressions: true,
  settingsMenu: false,
  expressionsCollapsed: false,
  notes: true,
  lockViewport: true,
});

calculator.setMathBounds({
  left: -10,
  right: 10,
  bottom: -10,
  top: 10,
});

calculator.setExpressions([
  {
    id: 'enter-command',
    type: 'folder',
  },
  {
    id: 'user-graph',
    latex: 'f(x)=x^2',
    color: Desmos.Colors.BLACK,
    label: 'Your function',
    showLabel: true,
  },
  {
    id: 'func-mirror',
    latex: 'y=f(x)',
    color: Desmos.Colors.BLACK,
    secret: true,
  },
  {
    id: 'left-slider',
    latex: 'x=a',
    secret: true,
    color: Desmos.Colors.BLUE,
    lineStyle: Desmos.Styles.DASHED,
  },
  {
    id: 'right-slider',
    latex: 'x=b',
    secret: true,
    color: Desmos.Colors.BLUE,
    lineStyle: Desmos.Styles.DASHED,
  },
  {
    id: 'leftpoint',
    latex: 'a=-2',
    slider: true,
    sliderBounds: { min: -10, max: 10, step: '' },
    label: '',
    showLabel: true,
  },
  {
    id: 'rightpoint',
    latex: 'b=2',
    slider: true,
    sliderBounds: { min: -10, max: 10, step: '' },
    label: '',
    showLabel: true,
  },
  {
    id: 'partitions',
    latex: 'n=20',
    slider: true,
    sliderBounds: { min: -10, max: 100, step: 0 },
  },
  {
    id: 'method',
    latex: 'c=0.5',
    slider: true,
    sliderBounds: { min: 0, max: 1, step: 0.5 },
  },
  {
    id: 'upper-bound',
    latex: String.raw`0\le y\le f\left(g_{x}\left(x\right)\right)\left\{a\le x\le b\right\}`,
    lineStyle: Desmos.Styles.DASHED,
    color: Desmos.Colors.GREEN,
    secret: true,
  },
  {
    id: 'lower-bound',
    latex: String.raw`f\left(g_{x}\left(x\right)\right)\le y\le0\left\{a\le x\le b\right\}`,
    lineStyle: Desmos.Styles.DASHED,
    color: Desmos.Colors.RED,
    secret: true,
  },
  {
    id: 'summation',
    latex: String.raw`I\ =\ \sum_{i=0}^{n\ -\ 1}f\left(g\left(i\right)\right)\cdot w`,
  },
  {
    id: 'midpoint-calc',
    latex: String.raw`w\ =\ \frac{b\ -a}{n}`,
    hidden: true,
    secret: true,
  },
  {
    id: 'g-func',
    latex: String.raw`g\left(m\right)=a+w\left(m+c\right)`,
    hidden: true,
    secret: true,
  },
  {
    id: 'n_x-func',
    latex: String.raw`n_{x}\left(x\right)=\operatorname{floor}\left(\frac{x-a}{w}\right)`,
    hidden: true,
    secret: true,
  },
  {
    id: 'g_x-func',
    latex: String.raw`g_{x}\left(x\right)=\left\{a\le x\le b:\ g\left(n_{x}\left(x\right)\right)\right\}`,
    hidden: true,
    secret: true,
  },
]);

// console.log(calculator.getExpressions()[11].latex);
const sumBox = document.querySelector('#sum');

console.log(num);
// sumBox.value = num;

const newDefaultState = calculator.getState();
calculator.setDefaultState(newDefaultState);
