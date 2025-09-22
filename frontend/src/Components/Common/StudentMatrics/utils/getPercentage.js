
export const calculatePercentage = (scored, total) => {
    if (total === 0) return 0; // Avoid division by zero

    return ((scored / total) * 100).toPrecision(2);
}