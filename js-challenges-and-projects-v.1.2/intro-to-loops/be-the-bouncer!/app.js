const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (var i = 0; i < nightClubRegister.length; i++ ) {
    if (nightClubRegister[i].age < 18) {
        if (nightClubRegister[i].gender === "male") {
            console.log("Hi Mr. " + nightClubRegister[i].name + " you cannot come in.")
        }
        else {
        console.log("Hi Mrs. " + nightClubRegister[i].name + " you cannot come in.")
        }
    }
    if (nightClubRegister[i].age >= 18) {
        if (nightClubRegister[i].gender === "male") {
            console.log("Hi Mr. " + nightClubRegister[i].name + " you can come in.")
        }
        else {
            console.log("Hi Mrs. " + nightClubRegister[i].name + " you can come in.")
        }
    }
}

