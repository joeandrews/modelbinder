modelbinder
===========

A two way model binder for backbone. Binds dom elements to model attributes via the name and data attributes.

Usage :

This library extends backone.js and should be included after the main backbone.js source code as follows.
''
<script type="text/javascript" src ="../pathto/modelbinder.js"></script>
''
The library extends a backbone views render method and in order to function as intended each view definitition should include a function as the template key.

The library currently only has provides 4 different types of bindings to html elements :

• input value bindings.
• css width binding (for progress indicators)
• standard html value bindings (e.g h3)
• src attribute bindings.

I intend to extend this list as and when I need more functionality.


*Usage*

Usage is as follows :

'' <div id="someid" class="someclass" name="attribute" data-type ="value">{initial value}</div>
''
