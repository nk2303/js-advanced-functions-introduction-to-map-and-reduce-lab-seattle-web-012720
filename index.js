// Your code here
function mapToNegativize(array){
    return array.map(x => -x);
}

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){
    return array.map(x => x*2);;
}

function mapToSquare(array){
    return array.map(x => x*x);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(function(e,int){
        return e + int;
    }, startingPoint);
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
            return false;
        }
    }
    return true;
    // sourceArray.reduce()
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            return true;
        }
    }
    return false;
    // sourceArray.reduce()
}