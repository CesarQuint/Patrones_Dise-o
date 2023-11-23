var SingletonTS = /** @class */ (function () {
    function SingletonTS() {
        this.random = Math.random();
    }
    SingletonTS.getInstance = function () {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }
        return this.instance;
    };
    return SingletonTS;
}());
var singletonEx = SingletonTS.getInstance();
var singletonEx2 = SingletonTS.getInstance();
console.log(singletonEx.random);
console.log(singletonEx2.random);
