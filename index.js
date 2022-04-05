// Write your solution in this file!
let employee = {
    name: 'Joe',
    streetAdress: 'Big Apple',
}
function updateEmployeeWithKeyAndValue(empObj,key, value){
    let helper = {...empObj};
    helper[key] = value;
    return helper;
}
function destructivelyUpdateEmployeeWithKeyAndValue(empObj, key, value){
    empObj[key] = value;
    return empObj;
}
function destructivelyDeleteFromEmployeeByKey(empObj, key){
    delete empObj[key];
    return empObj
}
function deleteFromEmployeeByKey(empObj, key){
    let helper = {...empObj};
    delete helper[key];
    return helper
}