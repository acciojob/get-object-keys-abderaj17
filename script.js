 const student = {
    name: 'John Doe'
};
Object.prototype.getKeys = function() {
    return Object.keys(this);
};