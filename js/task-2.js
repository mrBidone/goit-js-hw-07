console.log("TASK-2 ========================================");

class Storage {
    #items;

    constructor(params) {
        this.#items = params;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        if(this.#items.includes(itemToRemove) === true) {
            return this.#items.splice(this.#items.indexOf(itemToRemove), 1);
        };

    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scanner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


