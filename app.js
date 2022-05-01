"use strict";

(function () {
    console.log(document.readyState);
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            console.log(document.readyState);

            console.log("%c This script ran  synchronously and used DOMContentLoaded event listener", "background-color: green; color: white");
            let app = new dom;
            app.init();
        })
    } else {
        console.log(document.readyState);

        // promisify

        const app1 = function () {
            // return new Promise(resolve => resolve()); //or
            return Promise.resolve();
        }
        app1().then(function () {
            console.log("promisify");
            console.log("%c this script ran with defer or async tag method with Promise", "background-color: purple; color: white");
            let app = new dom;
            app.init()
        })

        // ////////////////////////////////
        // Promise.resolve() technique (best method)

        Promise.resolve().then(() => {
            console.log("Promise.resolve");
            console.log("%c this script ran with defer or async tag method with Promise", "background-color: purple; color: white");
            let app = new dom;
            app.init();
        })

        // /////////////////////////

        // async await technique

        const app = async function () {
            await Promise.resolve();
            console.log("Async Await");
            console.log("%c this script ran with defer or async tag method with Promise", "background-color: purple; color: white");
            let application = new dom;
            application.init();
        }
        app();

        // /////////////////////////


    }

    class dom {
        #deep;
        _shallow = "hello";
        constructor() {
            this.#deep = document.querySelector(".deep");
        }

        init() {
            this.get_prop(this.#deep);
        }

        get_prop(el) {
            console.log(el.classList)
        }
        say_hi() {
            console.log("%c Hi!", "background-color:blue;color:white");
        }

    }

})();
