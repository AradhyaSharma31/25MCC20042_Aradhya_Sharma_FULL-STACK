import { useEffect } from "react";
import jobs from "./jobdata";
import { useState } from "react";
import { useNavigate } from "react-router";

function JobCard() {

    const [data, setData] = useState([]);
    const [jobName, setJobName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setData(jobs);
    }, [])

    useEffect(() => {
        handleSearch();
    }, [jobName])

    function handleSearch(e) {
        setData(jobs.filter(i => i.title.toLowerCase()
    .includes(jobName.toLowerCase())))
    }

    return (
        <div className="max-w-5xl mx-auto p-6">

            {/* search */}
            <div className="my-5">
                <span className="text-xl font-bold">Filter: </span>
                <input className="border rounded-lg"
                        type="text"
                        value={jobName}
                        onChange={(e) => setJobName(e.target.value)}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <div
                        onClick={() => navigate(`job/${item.id}`)}
                        key={index}
                        className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {item.title}
                        </h3>

                        <h4 className="text-lg font-medium text-blue-600 mb-3">
                            {item.company}
                        </h4>

                        <div className="space-y-2 text-gray-600">
                            <p>
                                <span className="font-semibold">Location:</span>{" "}
                                {item.location}
                            </p>

                            <p>
                                <span className="font-semibold">Salary:</span>{" "}
                                {item.salary}
                            </p>

                            <p>
                                <span className="font-semibold">Type:</span>{" "}
                                {item.type}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobCard;