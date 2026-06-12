import { useParams } from "react-router";
import jobs from "./jobdata";

function JobPage() {
    const { id } = useParams();
    const job = jobs.find((job) => job.id === Number(id));

    if (!job) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h2 className="text-2xl font-bold">Job Not Found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-2">
                    {job.title}
                </h1>

                <h2 className="text-xl text-gray-600 mb-6">
                    {job.company}
                </h2>

                <div className="space-y-4">
                    <div>
                        <span className="font-semibold">Location:</span>{" "}
                        {job.location}
                    </div>

                    <div>
                        <span className="font-semibold">Salary:</span>{" "}
                        {job.salary}
                    </div>

                    <div>
                        <span className="font-semibold">Work Type:</span>{" "}
                        {job.type}
                    </div>
                </div>

                <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Job Description
                    </h3>

                    <p className="text-gray-700">
                        We are looking for a talented {job.title} to join{" "}
                        {job.company}. You will work with a team of engineers
                        to build scalable applications and deliver high-quality
                        software solutions.
                    </p>
                </div>

                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Apply Now
                </button>
            </div>
        </div>
    );
}

export default JobPage;