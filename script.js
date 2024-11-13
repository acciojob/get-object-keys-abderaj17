 const student = {
    name: 'John Doe'
};
student.prototype.getKeys = function() {
    return Object.keys(this);
};