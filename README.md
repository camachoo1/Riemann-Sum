# Riemann-Sums

## Background

The Fundemental Theorem of Calculus consists of 2 key parts, differentiation and integration (anti-derivitive). This application will be focusing on using the Riemann Sum to calculate the integration part to find the area under a curve given an interval. The Riemann Sum is calculated by partitioning the interval into equally sized rectangles what when summed together gives an approximation of the actual area under the curve. As the number of partitions grows to infinity the approximate sum appraoches the true sum.

## Features

With this data visualization tool, users will be able to:

1. Input their own functions and have them graphed on the display.
2. Have access to a slider that will allow users to move the left and right endpoints.
3. Have access to a slider that will allow users to increase or decrease the amount of partitions (rectangles).
4. Be able to utilize a left point, right point, or midpoint sum.
5. Have a pop-up with instructions of how to use the tool.

- Will give access to the Github repo and LinkedIn profile
- Left hand side will display the expressions list that will allow users to input their function.
- Will keep computational formulas hidden from the user so that the formulas cannot be manipulated.
- Right side of page will display the interactive graph which will allow users to move left/right endpoints, zoom in/out, and drag around the graph.
- Top bar will include the instructions of how to use the model and Bottom bar will have links to GitHub and LinkedIn.

## Technologies

- Desmos API to render/create the graphs.
- KaTeX API to compile LaTeX into usable JavaScript for inputting functions/expressions.
- Webpack to bundle and transpile the JavaScript code.

## Interface

Used CSS to style the home page with animations, nav bar, and hover effects.
![Home Page](https://github.com/camachoo1/Riemann-Sum/blob/main/assets/homepage.png)

Used JavaScript/CSS to add pop ups for instructions and background information tabs
![Instructions](https://github.com/camachoo1/Riemann-Sum/blob/main/assets/instructions.png)
![Background Info](https://github.com/camachoo1/Riemann-Sum/blob/main/assets/backgroundinfo.png)

Used Desmos API to render a graph and used latex to write in expressions while assigning them hidden class properties so they arent able to be edited by the user.
![Graph UI](https://github.com/camachoo1/Riemann-Sum/blob/main/assets/graph.png)
