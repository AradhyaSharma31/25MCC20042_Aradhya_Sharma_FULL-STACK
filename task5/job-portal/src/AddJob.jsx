import { useState } from "react";
import jobs from "./jobdata";

function AddJob() {
    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        type: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setJob(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newJob = {
            id: jobs.length + 1,
            ...job
        };

        jobs.push(newJob);

        setJob({
            title: "",
            company: "",
            location: "",
            salary: "",
            type: ""
        });
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add Job</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={job.title}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={job.company}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={job.location}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    value={job.salary}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={job.type}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddJob;