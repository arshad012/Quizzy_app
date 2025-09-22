
export const getMarksStyling = (marks, total) => {
    const percentage = (marks / total) * 100;

    if(percentage >= 50) {
        return 'text-green-600'
    } else if(percentage >= 35) {
        return 'text-yellow-600'
    } else {
        return 'text-red-600'
    }
}
