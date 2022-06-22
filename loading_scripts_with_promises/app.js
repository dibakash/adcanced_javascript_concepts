"user strict";

(function () {
    // Dev mode
    console.log(`%c Developer Mode`, 'background-color: red; padding: 0 1em;')

    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            console.log(`%c Using DOMContentLoaded`, 'background-color: blue; padding: 0 1em;')
            const app = new App();
            app.init();
        });
    } else {
        //Promise four different ways
        console.log(`%c Using Promise`, 'background-color: green; padding: 0 1em;')

        // ########____promise version 1____########
        // const promisedApp = new Promise(resolve => resolve());
        // promisedApp
        //     .then(() => new App())
        //     .then(app => app.init())

        // ########____promise version 2____########
        // const promisedApp = new Promise(resolve => resolve(() => new App()));
        // promisedApp
        //     .then(result => result())
        //     .then(app => app.init())

        //########____promise version 2 (short)____########
        // const promisedApp = new Promise(resolve => resolve(() => new App()));
        // promisedApp.then(app => app().init());

        //########____promisify 1____########
        // (returning a promise from function call)
        // const promisifiedApp = function () {
        //     return new Promise(resolve => resolve());
        // }
        // promisifiedApp()
        //     .then(() => new App())
        //     .then(app => app.init())

        //########____promisify 1 (with arrow)____########
        // const promisifiedApp = () => new Promise(resolve => resolve())
        // promisifiedApp()
        //     .then(() => new App())
        //     .then(app => app.init());

        //########____promisify 2____########
        // (returning a promise from function call)
        // const promisifiedApp = function () {
        //     return new Promise(resolve => resolve(() => new App()));
        // }
        // promisifiedApp()
        //     .then(result => result())
        //     .then(app => app.init())

        //########____promisify 2 (with arrow)____########
        // const promisifiedApp = () => new Promise(resolve => resolve(() => new App()));
        // promisifiedApp()
        //     .then(result => result())
        //     .then(app => app.init())


        //########____Promise shorthand 1____######## ❤ My Favorite ❤
        // Promise.resolve().then(() => new App()).then(app => app.init());
        // or
        Promise.resolve().then(() => new App().init());

        //########____Promise shorthand 2____########
        // Promise.resolve(() => new App()).then(app => app().init());


        //########____Async Await 1____######## ❤ Favorite Async Await promise form ❤
        // const asyncApp = async () => {
        //     await Promise.resolve().then(() => new App().init());
        // }
        // asyncApp();

        //########____Async Await 2____########
        // const asyncApp = async () => {
        //     const awaitedApp = await Promise.resolve(() => new App());
        //     awaitedApp().init();
        // }
        // asyncApp();

        //########____Async Await 3 ____######## ❤ clever utilization of Job-que in Event-loop❤
        // const asyncApp = async () => {
        //     await Promise.resolve();
        //     new App().init();
        // }
        // asyncApp();

    }

    class App {
        #input;
        #submit;
        constructor(a, b) {
            this.a = a;
            this.b = b;
            this.#input = document.querySelector("input[type = text]");
            this.#submit = document.querySelector("button[type = submit]");
        }

        init() {
            this.#submit_input();
            return this;
        }

        #get_input() {
            return this.#input.value;
        }
        #reset_input() {
            this.#input.focus();
            return this.#input.value = "";
        }
        #submit_input() {
            this.#submit.addEventListener("click", (e) => {
                e.preventDefault();
                try {
                    if (this.#input.value) {
                        console.log(this.#get_input());
                    } else {
                        throw Error("missing input");
                    }
                } catch (err) {
                    console.log(`%c ${err.stack}`, `background-color: red;`);
                };

                this.#reset_input();
            });
        }
    }

}());
