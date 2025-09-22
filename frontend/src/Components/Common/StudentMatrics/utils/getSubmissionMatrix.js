import { getTimeTaken, calculatePercentage } from "./index";

export const getSubmissionMatrics = (submission) => {
    const percentage = calculatePercentage(submission.totalMarks, submission.maxMarks);

    const matrix = [
        {
            label: 'Overall Percentage',
            value:  `${percentage}%`,
            valueClassName: percentage >= 50 ? 'bg-green-300 px-4 rounded-lg' : percentage >= 35 ? 'bg-yellow-300 px-4 rounded-lg' : 'bg-red-300 px-4 rounded-lg'
        },
        {
            label: 'Overall Score',
            value: `${submission.totalMarks} / ${submission.maxMarks}`,
            valueClassName: ''
        },
        {
            label: 'Time Taken',
            value: getTimeTaken(new Date(submission.submittedAt) - new Date(submission.startedAt)),
            valueClassName: ''
        },
        {
            label: 'Date Attempted',
            value: submission?.submittedAt ? new Date(submission.submittedAt).toDateString() : 'N/A',
            valueClassName: 'text-sm'
        }
    ]

    return matrix;
}

