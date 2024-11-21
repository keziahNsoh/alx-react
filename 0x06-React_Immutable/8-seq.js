import { Seq } from 'immutable';

export function printBestStudents(grades) {
  // Create a lazy sequence from the grades object
  Seq(grades)
    // Filter students with a score >= 70
    .filter(student => student.score >= 70)
    // Map the filtered students to a formatted name
    .forEach(student => {
      const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`${firstName} ${lastName}`);
    });
}
