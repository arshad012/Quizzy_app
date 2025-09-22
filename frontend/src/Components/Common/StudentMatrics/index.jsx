import { getSubmissionMatrics } from "./utils"


function StudentMatrics({data}) {
    return (
        <div>
            <div className="border p-2 rounded grid grid-cols-2 lg:grid-cols-4"> {/* lg:gap-0 sm:gap-5 md:gap-5 */}
                {
                    getSubmissionMatrics(data).map(({ label, value, valueClassName }) => (
                        <div key={value} className="flex flex-col justify-between items-center">
                            <p className={`${valueClassName} text-2xl font-bold`}>{value}</p>
                            <p className="text-sm text-gray-600 text-center">{label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StudentMatrics
