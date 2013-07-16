ModelBinder
===========

A two way model binder for backbone.It binds dom elements to model attributes via the name and data attributes.

## Edit: 

This library currently uses dust.js templates to render the view. I will change this to make the render function template agnostic. It also uses some `JQuery`, i will remove this dependancy in due course.

Please leave comments etc add issues + pull requests, it would be cool to make a polished version of this.

Usage
=====

This library extends backone.js and should be included after the main backbone.js source code as follows:

  ```
    <script type="text/javascript" src ="../pathto/modelbinder.js"></script>
  
  ```

The library extends  a normal backbone view render method, to use `dust.js`, which must be included onthe page and the template key, set to the compiled templates name.

The library currently only has provides 4 different types of bindings to html elements:

1. Input value bindings. e.g `data-type = "input".`

2. Css width binding (for progress indicators) e.g `data-type = "style".`

3. Standard html value bindings (e.g h3) e.g `data-type = "value".`

4. Src attribute bindings. e.g `data-type = "src".`

I intend to extend this list as and when I need more functionality.

### Binding to a model attribute

  ```
    <div id="someid" class="someclass" name="attribute" data-type ="value">{initial value}</div>
  
  ```
  
### TO DO :

1.  Sort out event propogation on re-render.

