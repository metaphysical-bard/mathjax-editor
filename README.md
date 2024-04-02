# mathjax-editor_ver1.0
This is a simple editor app. You can write LaTeX code. This works in both online and local environments.    

[Demo page](https://metaphysical-bard.github.io/mathjax-editor/src/main.html)
![img](/img.png)  

## Simple design
This editor consists of a display, a text box, and a shortcut buttons. You type in the text box when it is instantly reflected on the display. When you press the shortcut button, The text is inserted at the caret position. The other way is to insert a matrix by `"number" + "x" + "number" + "Enter"`.  

## file output
You can output to txt, bmp, svg, png, jpeg, and so on.  
How to:
1. Enter the file name and file type in the "File Output" button.
2. Click "Download".  

## Original buttons
I've prepared a lot of shortcut buttons. However, not all LaTeX commands are covered.  

If you want your original shortcut button, you can create one.  
How to:
1. Enter the json text in the "org cmd" button.
2. Click "add".  

Here is examples of json text:
```json
["name", "cmd"]
```
```json
["\\(\\frac{1}{2}\\)", "\\frac{1}{2}"]
```
```json
["Trump Symbol", "\\clubsuit\n\\diamondsuit\n\\heartsuit\n\\spadesuit"]
```
The first element is the HTML code that will be pasted into the button.  
The second element is the text that is inserted when the button is pressed.  

## MathJax command
```TeX
\begin{align}
  e^{i\theta}
    &= \cos{\theta} + i\sin{\theta} \\
  e^{i\pi}
    &= -1 + 0 \\
    &= -1
\end{align}
```
```TeX
\bbox[#dddddd, 30pt]{
  \begin{array}{l}
    {\color{#ff0000}red} \\
    {\color{#00ff00}green}
  \end{array}
}
```
For more information about MathJax, see the following documents:  
https://github.com/mathjax  
https://docs.mathjax.org/en/latest/web/hosting.html  
https://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm    

## Welecome to issues
Please create an issue on github.  
  
  
[bsky](https://bsky.app/profile/drywaterfall.bsky.social)
  
  