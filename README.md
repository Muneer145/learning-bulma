# learning-bulma
learning the basics of bulma
- Bulma is a css framework just like how bootstrap is a css framework.It gives us alot of utilities to style our website but unlike bootstrap whih has js files controlling stuff, bulma just focuses on the css
- it utilises a mobiel first approach
- bulma layout is based on flexbox 

# setting up bulma
- we are using liveserver a vscode enxtension which allows us to launch a local server with live reload for static and dynamic pages.
just right click anbd select live server to start usiing it.
- to setup bulma you can either use "npm bulma" or Attach the cdn to your html code "<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">"


# Fonts and colours 
- bulma strips out all of the default styles, allowing us to the elements how we want(this is why regardless of the h1/h2/h3 or p  tag we use, the style and font size remain the same)
- To change font size we use "class="is-size-no"" with the no ranging from 1-7(1 being the largest).
- To change font weight, we use "class="has-text-weight""( with weight being either bold or light),
- To change font style(lowercase,uppercase or italic), we use we use  "class="is-uppercase or italic"".
- Using "title" makes text like a title same with "subtitle" which makes text subtitles
- To center text: "has-text-centered"
- To move text left or right: "has-text-left or right"
- To change colors: "has-text-color" (has primary,danger,success,info)
- To change the background color:"has-background-color"



# spacing and containers