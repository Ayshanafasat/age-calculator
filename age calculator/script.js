const button = document.getElementById('btn');
const birthday = document.getElementById('birthday');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    let birthdayValue = birthday.value;
    if (birthdayValue === '') {
        alert("Please enter your birthday");
    } else {
        let r = getAge(birthdayValue);
        if (r === -1) {
            alert("Please enter a valid date of birth.");
        } else {
            result.innerHTML = `Your age is ${r} ${r > 1 ? "years" : "year"} old`;
        }
    }
});

function getAge(birthdayValue) {
    let currentDate = new Date();
    let Birthdate = new Date(birthdayValue);

    if (Birthdate > currentDate) {
        return -1;
    }

    let age = currentDate.getFullYear() - Birthdate.getFullYear();
    const months = currentDate.getMonth() - Birthdate.getMonth();

    if (months < 0 || (months === 0 && currentDate.getDate() < Birthdate.getDate())) {
        age--;
    }

    return age;
}
