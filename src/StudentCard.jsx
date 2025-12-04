import { useEffect, useState } from "react";

export default function StudentCard() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchStudents();
    },[])

  if (!student) {
    return <p className="text-center text-lg mt-10">Loading...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {student.map((student) => (
        <div
          key={student.id}
          className="bg-white rounded-2xl shadow-lg border p-6 max-w-sm"
        >

         
          <h2 className="text-xl font-bold text-center mt-4">
            {student.name}
          </h2>

          
          <p className="text-gray-500 text-center">@{student.username}</p>

          <div className="border-b my-4"></div>

          
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <span className="text-blue-600 underline">{student.email}</span>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {student.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href={`https://${student.website}`}
                target="_blank"
                className="text-blue-500 underline"
              >
                {student.website}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
