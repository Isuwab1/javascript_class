let hubAttendee = [
    { username: "solomoni", daysAttended: 18 },
    { username: "man2", daysAttended: 15 },
    { username: "joseph", daysAttended: 10 },
    { username: "abukausar", daysAttended: 15 },
    { username: "wali1", daysAttended: 16 }
];

// Filter
const higherAttendees = hubAttendee.filter(
    attendee => attendee.daysAttended > 15
);

// Add status
const eliteMembers = higherAttendees.map(attendee => {
    return {
       ...attendee,
        status: "Elite"
    };
});

// Step 3: Print
console.log(eliteMembers);