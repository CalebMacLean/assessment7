/** Problem: 
 * Turn a string of 24h time into words.
    You can trust that you’ll be given a valid string 
    (it will always have a two-digit hour 00-23, and a 
    two-digit minute 00-59). Hours 0-11 are am, and 
    hours 12-23 are pm. 
*/

// Solution:
function timeWord(time) {
    // Check if time is a string
    if (typeof time !== 'string') return 'Invalid entry. Please enter a string';
    // Check if time is in the correct format
    if (time.length !== 5) return 'Invalid entry. Please enter a string in the format hh:mm';

    // Create objects to store words for each digit
    const hourWords = {
        '00': 'twelve',
        '01': 'one',
        '02': 'two',
        '03': 'three',
        '04': 'four',
        '05': 'five',
        '06': 'six',
        '07': 'seven',
        '08': 'eight',
        '09': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'one',
        '14': 'two',
        '15': 'three',
        '16': 'four',
        '17': 'five',
        '18': 'six',
        '19': 'seven',
        '20': 'eight',
        '21': 'nine',
        '22': 'ten',
        '23': 'eleven'
    };

    const minuteWords = {
        'tensPlace': {
            '0': 'oh',
            '1': 'ten',
            '2': 'twenty',
            '3': 'thirty',
            '4': 'forty',
            '5': 'fifty'
        },
        'onesPlace': {
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine'
        },
        'exceptions': {
            '00': 'o\'clock',
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen'
        },
    };

    const timeArray = time.split(':');
    console.log('timeArray', timeArray);
    const hour = timeArray[0];
    const minute = timeArray[1];
    const amPm = parseInt(hour) < 12 ? 'am' : 'pm';

    let timeWord = '';

    // Check for midnight
    if (time === '00:00') return 'midnight';

    // Check for noon
    if (time === '12:00') return 'noon';

    // Convert hour to word
    if (hourWords[hour]) {
        timeWord += hourWords[hour] + ' ';
    } else {
        return 'Invalid entry in the hours place';
    };

    //Convert minute to word
    if (minuteWords['exceptions'][minute]) {
        timeWord += minuteWords['exceptions'][minute] + ' ';
    } else if ( minuteWords['tensPlace'][minute[0]] && minuteWords['onesPlace'][minute[1]]) {
        timeWord += minuteWords['tensPlace'][minute[0]] + ' ' + minuteWords['onesPlace'][minute[1]] + ' ';
    } else {
        return 'Invalid entry in the minutes place';
    };

    timeWord += amPm;

    return timeWord;
}

module.exports = timeWord;