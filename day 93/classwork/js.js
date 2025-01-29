//Codewars 1
//Grasshopper - Grade book

function getGrade(s1, s2, s3) {
    const averageGrade = (s1 + s2 + s3) / 3;

    switch (getGrade) {
        case averageGrade >= 90:
            return 'A';
        case averageGrade >= 80:
            return 'B';
        case averageGrade >= 70:
            return 'C';
        case averageGrade >= 60:
            return 'D';
        default:
            return 'F';
    }
}
