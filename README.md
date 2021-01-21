# learning-bulma
learning the basics of bulma
- Bulma is a css framework just like how bootstrap is a css framework.It gives us alot of utilities to style our website but unlike bootstrap whih has js files controlling stuff, bulma just focuses on the css
- it utilises a mobile first approach
- bulma layout is based on flexbox 

# setting up bulma
- we are using liveserver a vscode enxtension which allows us to launch a local server with live reload for static and dynamic pages.
just right click anbd select live server to start using it.
- to setup bulma you can either use "npm bulma" or Attach the cdn to your html code "<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">"


# Fonts and colours 
- bulma strips out all of the default styles, allowing us to use  the elements how we want(this is why regardless of the h1/h2/h3 or p  tag we use, the style and font size remain the same)
- To change font size we use "class="is-size-no"" with the no ranging from 1-7(1 being the largest).
- To change font weight, we use "class="has-text-weight""( with weight being either bold or light),
- To change font style(lowercase,uppercase or italic), we use we use  "class="is-uppercase or italic"".
- Using "title" makes text like a title same with "subtitle" which makes text subtitles
- To center text: "has-text-centered"
- To move text left or right: "has-text-left or right"
- To change colors: "has-text-color" (has primary,danger,success,info)
- To change the background color:"has-background-color"



# spacing and containers
- for padding we use p(which reprsensts padding),y(the y direction   which us how up/down it is)a hyphen and a number ranging from 1-6 so py-4 for example
- for margin it will be my-1-6
- you can also affect spacing using "x" which represents the x direction
- Yoy can also apply margin and padding in both directions
- if we just want to alter a particular direction, we use t(top) and b(bottom),l(left),r(right). it can be used with padding or margin
- There are a couple of other ways to apply spacing to an element
- One is using the the section class which automatically adds some margin and padding to a new section 
- with the container class we can put elements in a container


# Creating a Navbar and styling
- to create a navbar, we use the navbar class
- "navbar-brand":is used to stlye navbar
- "navbar-item":  each single item of the navbar, which can either be an a or a div
- "navbar-menu": the right side of the navbar 
- "navbar-link": a link as the sibling of a dropdown 
- "has-shadow": adds a small shadow to show the end of the navbar 

# Creating a Navbar mobile
- when creating navbar burger, we use add an anchor tag with the "navbar-burger" class and it has to be the last child of the navbar-brand
- since bulma is css only we have to use js ourselves to make the burger icon work
-  in our js file, we select the burger icon and the navbar menu and store in a variable
- we then use js to toggle the menu when we click the burger icon on mobile
# breadcrumbs
- bread crumbs are kind of like a navigation so we can use  a nav tag
- to use breadcrumbs, we use "breadcrumb" as a class
- other separator types can be used woth classes "has-arrow-separator","has-dot-separator","has-bullet-separator"
- it is also compatible with font awesome icons

# Grid columns
- to use grid in bulma, we create div with class "columns" and then add teh class "column" on its child elements. since it's a 12 based system, we can use that to divide each element according o to the spacing we want(is-5 for example).
- note that "has-text-centered" also works fro images
- we can use "is-v-centered" to center elements stored in "columns"
# Responsive Classes
- with bulma, we can easily adjust column widths at diferent screen sizes using responsive class suffixes.(-mobile,-tablet,-desktop)
- for example class="is-size-1" will apply font size 1 to all screen sizes while class="is-size-1-tablet" will only apply it to tablets and sizes up 
- class="is-size-3-mobile is-size-1-desktop : means it will be size 3 up until it reaches a desktop 
- these can be used or column width
- we can use "is-multiline"(in our example on the columns wrapper) which tells bulma that if we dont have enough space in the single row for the column width, the remaining elements should go to the next line
- to increase the gap between columns, we need to use "is-variable" and "is-no(1-8)"
# Tabbed content
- we can created tabbed content with the templates bulma offers, but we will have to use js manually since bulma does not offer js.
- we ue the "tabs" for it to work
- it has different styles like "is-boxed","is-toggled", "is-medium", "is-large" etc
# Message boxes
- as the name implies, we can create a message box in bulma using class "message". 
- for the message box header and body we use "message-header" and "message-body" respectively
- you can change the theme of the box e.g using "is-dark", "is-primary"
# Buttons
- "button"
- we use color schems(is-dark,is-primary), size(is-medium), is-rounded, is-loading(which can be used when doing asychronous task)
# cards 
# Creating Modals
# Form fields
# Adding a footer 
