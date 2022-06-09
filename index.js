// Code your solution in this file!
const returnFirstTwoDrivers = function (d) {
    const newArray = [d[0], d[1]]
    return newArray
}


const returnLastTwoDrivers = function (lastdrivers) {
    return [lastdrivers[lastdrivers.length - 2], lastdrivers[lastdrivers.length - 1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
        
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
}

