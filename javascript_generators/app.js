"use strict";

(function () {

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            new App.init();
        })
    } else {
        Promise.resolve().then(() => new App().init())

        // (async function () {
        //     await Promise.resolve();
        //     new App().init()
        // })();
    }





    class App {
        #header
        constructor() {
            this.#header = document.querySelector("header");
        }

        init() {
            this.#change_header();
            let g1 = this.generator_1();
            console.log(g1.next());
            console.log(g1.next());

        }

        #change_header() {
            console.log("hi")
            this.#header.style.backgroundColor = "blue";
        }

        // Generators:
        // A generator is a type of iterator
        // has a .next() method returning {value, done=bool}
        // calling a generator functions return generator objects that have the .next() method

        *generator_1() {
            for (let i = 0; i < 5; i++) {
                yield i;
            }
        }

    }

}());
