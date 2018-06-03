module.exports = class ObjectPool {
    
    constructor() {
        this.myPool = {};
        this.counter = 0;
    }

    add(obj) {
        if (obj.__exsits) {
            return;
        }
        else {
            obj.__exsits = true;
            this.myPool[this.counter] = obj;
            this.counter++;
        }
    }

    contains(obj) {
        if (obj.__exsits) {
            return true;
        } else {
            return false;
        }
    }
}