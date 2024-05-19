function compareArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    const result = arr1.every((value, index) => value === arr2[index]);

    return result;
}

/*
function getUsersNamesInAgeRange(users, gender) {
    if(users.length === 0) {
        return 0;
    }
    const usersWithTargetGender = users.filter(user => user.gender === gender);

    if(usersWithTargetGender.length === 0) {
        return 0;
    }
    
    let numberOfPeople = 0;
    const result = usersWithTargetGender.map(user => user.age).reduce(function(sum, current) {
        numberOfPeople += 1;
        return sum + current;
    },0);

    return result / numberOfPeople;
}
*/

function getUsersNamesInAgeRange(users, gender) {
    if(users.length === 0) {
        return 0;
    }
    
    let numberOfPeople = 0;

    const result = users.reduce((acc, curr) => {
        if(curr.gender !== gender) return acc;

        numberOfPeople++;
        return acc + curr.age;
    }, 0)

    if(numberOfPeople === 0) return 0;

    return result / numberOfPeople;
}