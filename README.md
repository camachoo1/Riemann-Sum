# Riemann-Sums

## Background

The Fundemental Theorem of Calculus consists of 2 key parts, differentiation and integration (anti-derivitive). This application will be focusing on using the Riemann Sum to calculate the integration part to find the area under a curve given an interval. The Riemann Sum is calculated by partitioning the interval into equally sized rectangles what when summed together gives an approximation of the actual area under the curve. As the number of partitions grows to infinity the approximate sum appraoches the true sum.

## Functionality

With this data visualization tool, users will be able to:

1. Input their own functions and have them graphed on the display.
2. Have access to a slider that will allow users to move the left and right endpoints.
3. Have access to a slider that will allow users to increase or decrease the amount of partitions (rectangles).
4. Be able to utilize a left point, right point, or midpoint sum.
5. Have a pop-up with instructions of how to use the tool.

## Wireframe

![wireframe](https://user-images.githubusercontent.com/116383442/216483777-75ae0826-36a8-4d26-bffe-fbb4a69fb446.png)

- Will give access to the Github repo and LinkedIn profile
- Left hand side will display the expressions list that will allow users to input their functions.
- Will keep hidden computational formulas hidden from the user so that the formulas cannot be manipulated (will cause app to break if the formulas are changed)
- Right side of page will display the interactive graph which will allow users to move left/right endpoints, zoom in/out, and drag around the graph.
- Top bar will include the instructions of how to use the model and Bottom bar will have linked to GitHub and LinkedIn.

## Technologies

- Desmos API to render/create the graphs.
- KaTeX API to compile LaTeX into usable JavaScript for inputting functions/expressions.
- Webpack to bundle and transpile the JavaScript code.

## Implementation

- Friday: Setup project, get webpack up and running, continue to get familiar with both Desmos and KaTeX API's to ensure smooth implementation.
- Saturday/Sunday: Will work on creating the expressions/functions that will generate the Riemann Sums given a function and ensure that state is maintained throughout.
- Monday: Getting graphs to render on HTML page and sums are calculated given user inputted graphs.
- Tuesday: Work on styling, formatting, adding pop-up with instructions/background info, adding respective links to GitHub/LinkedIn.
- Wednesday: If not finished, work on styling and continue to test functionality of the page and look for instances of failure/edge cases to fix. After everything is done deploy to GitHub pages.
