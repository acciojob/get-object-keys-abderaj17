 const student = {
    name: 'John Doe'
};
student.prototype.getKeys = function() {
    return student.keys(this);
};