var modelbinder = (function () {
    "use strict";
    if (Backbone) {
        Backbone.View.prototype.modelbinder = function (node, func) {
            func(node, this);
            node = node.firstChild;
            while (node) {
                this.modelbinder(node, func);
                node = node.nextSibling;
            }
        };
        Backbone.View.prototype.render = function () {

            dust.render(this.template, this.model.attributes, function (err, out) {

                this.$el.html(out);
                this.modelbinder(this.$el[0], this.linkattribute);
                this.bindtoview();

            }.bind(this));


            return this;
        };
        Backbone.View.prototype.boundelements = {};
        Backbone.View.prototype.bindtoview = function () {
            this.model.bind("change", function (evt) {

                for (var key in evt.changed) {
                    if (evt.changed.hasOwnProperty(key) && this.boundelements[key]) {
                        $(this.boundelements[key]).off('click');

                        switch (this.boundelements[key].getAttribute("data-type")) {
                        case "style":
                            {
                                $(this.boundelements[key]).css({
                                    "width": this.model.get(key)
                                });
                                break;
                            }
                        case "input":
                            {
                                this.boundelements[key].value = this.model.get(key);
                                break;
                            }
                        case "src":
                            {
                                $(this.boundelements[key]).attr("src", this.model.get(key));
                                break;
                            }
                        default:
                            {
                                $(this.boundelements[key]).html(this.model.get(key));
                                break;
                            }
                        }


                        $(this.boundelements[key]).change(_.bind(function (e) {

                            for (var i = 0; i < e.target.attributes.length; i++) {
                                if (e.target.attributes[i].nodeName == "name") {
                                    var update = {};
                                    update[e.target.attributes[i].nodeValue] = e.target.value;
                                    this.model.set(update, {
                                        silent: true
                                    });

                                }
                            }

                        }, this));

                    }
                };
            }, this);
            return this;
        };
        Backbone.View.prototype.linkattribute = function (node, self) {

            if (node.attributes) {
                for (var i = 0; i < node.attributes.length; i++) {

                    if (node.attributes[i].nodeName == "name") {

                        self.boundelements[node.attributes[i].nodeValue] = node;
                        $(node).change(_.bind(function (e) {

                            for (var i = 0; i < e.target.attributes.length; i++) {
                                if (e.target.attributes[i].nodeName == "name") {

                                    var update = {};
                                    update[e.target.attributes[i].nodeValue] = e.target.value;
                                    this.model.set(update, {
                                        silent: true
                                    });
                                }
                            }

                        }, self));

                    }
                };
            }
            return this;
        };

    } else {

        console.log("Model Binder error : backbone is not included in the page \n Please ensure that this library is included after the backbone source");

    }
})()