// Interface for Major Credits
interface MajorCredits {
    credits: number;
    brand: 'Major'; // unique identifier
}

// Interface for Minor Credits
interface MinorCredits {
    credits: number;
    brand: 'Minor'; // unique identifier
}

// Function to sum Major Credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major' // maintain the brand property
    };
}

// Function to sum Minor Credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor' // maintain the brand property
    };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'Major' };
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log(`Total Major Credits: ${totalMajorCredits.credits}`);

const minorSubject1: MinorCredits = { credits: 2, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 3, brand: 'Minor' };
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);
