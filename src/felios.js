(function () {

    "user strict";

    const NAME = "FELIOS.JS";
    const VERSION = "v0.0.0.1";
    const DESCRIPTION = "Simplified Singular UI - State Management";
    const AUTHOR = "Humphrey Pietersen";
    const CONTRIBUTORS = {};
    const UI = "Default"
    const LICENSE = "MIT";
    const COPYRIGHT = "(c) 2021 Humphrey Pietersen";

    function felios(id, component) {

        this.objectCopy = component;

        // this.wrapper = new createElement("div");
        // 
        // this.element = this.wrapper.innerHTML += `<div id="${id}"></div>`;

        this.rootElement = document;

        (this.rootElement.head.querySelector("#style") === null) ?
            (this.rootElement.head.innerHTML += "<style id=\"style\" type=\"text/css\"></style>")
            : (this.rootElement.head.querySelector("#style"));

        this.root = document.getElementById(id);


        var cssTarget = "";

        for (var i = 0; i < component[0].style[0].length; i++) {
            if (component[0].style.match("#")) {
                cssTarget = component[0].style
            }

        }

        this.rootElement.getElementById("style").innerHTML += cssTarget;

        this.template = component[0].template;
        this.root.innerHTML = this.template;


        this.fInput = (this.root.querySelector("#Input") !== null) ? this.root.querySelector("#Input") : "";

        this.fAction = (this.root.querySelector("#Action") !== null) ? this.root.querySelector("#Action") : "";

        this.fkillAction = (this.root.querySelector("#killAction") !== null) ? this.root.querySelector("#killAction") : "";

        if (this.fInput) {
            this.fTID = this.fInput.name;
        }


        this.fTarget = (this.root.querySelector("#Label") !== null) ? this.root.querySelector("#Label") : "";


        if (this.fTarget) {
            this.fTarget.innerHTML =
                component[0].state.title[0].toUpperCase() + component[0].state.title.slice(1, component[0].state.title.length);
        }


        this.state = component[0].state;

        component[0].method;


        return this.init();
    }



    felios.prototype.init = function () {

        //# On Change event on Input

        var that = this;

        this.render(function (that) {

            if (that.fInput) {
                that.fInput.addEventListener("keyup", function () {

                    return that.buildUI();
                })
            }


        });
    }

    felios.prototype.root = function (id) {
        return document.getElementById(id);
    }

    felios.prototype.buildUI = function () {
        if (this.fTarget.textContent === ("{% " + this.fTID + " %}")) {
            //

        } else {
            this.fTarget.innerHTML = this.fInput.null;

        }
        this.setState({ title: this.fInput.value });
        return this.update();
    }
    felios.prototype.update = function () {
        this.fTarget.innerHTML = this.state.title;
        return this.buildUI;
    }
    felios.prototype.storage = function (state) {
        this.store = Object.assign({}, state);
        return this.store;
    }
    felios.prototype.toggleState = function (component, option) {
        return;
    }
    felios.prototype.isPrevious = function (state) {
        if (state !== this.storage(state)) {
            return true
        } else {
            return false
        }
    }
    felios.prototype.previousState = function (state) {
        if (this.isPrevious(state)) {
            return state;
        } else {
            return false
        }
    }
    felios.prototype.props = function (props) {

        return props;
    }
    felios.prototype.setState = function (state) {
        this.state = Object.assign(this.storage(this.state), state);

        return this.state;
    }
    felios.prototype.render = function (component) {

        return component(this);
    }

    window.felios = felios;

})(window);

let Component = new Object();

window.Component = Component;

let stream = async () => {
    try {

        const response = await fetch("/json={\"name:\"Marvin Tripps\"\"}");
        const data = await response.json()

        console.log(data);

    } catch (e) {
        console.log(e)

    }
}


function doComponentAction(Component, forwards, backwards) {
    if (Component) {
        Component.fAction.addEventListener("click", function (e) {
            e.preventDefault();
            if (Component.state.toggle === true) {
                Component.fAction.classList.add("active");
                e.stopPropagation();
                return forwards(Component);


            } else {

                Component.fAction.classList.remove("active");
                return backwards(Component);
            }

        })
    }

    toggleState(Component,
        {
            on: true,
            off: false
        }
    );
}

//Toggle State
function toggleState(Component, option) {
    Component.fAction.addEventListener("click", function (e) {
        e.preventDefault();
        if (Component.state.toggle === option.off) {
            Component.setState({ toggle: option.on })
            Component.update()
            return Component.state;
        } else {
            Component.setState({ toggle: option.off });
            Component.update()

            return Component.state;
        }
    })
};


