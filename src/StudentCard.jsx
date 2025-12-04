import { useEffect, useState } from "react";

export default function StudentCard() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/3") // Your API link here
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!student) {
    return <p className="text-center text-lg mt-10">Loading...</p>;
  }

  return (
    <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl border p-6">
      
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`}
          alt="Profile"
          className="w-28 h-28 rounded-full border shadow-md"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center mt-4">
        {student.name}
      </h2>

      {/* Username */}
      <p className="text-gray-500 text-center">@{student.username}</p>

      {/* Divider */}
      <div className="border-b my-4"></div>

      {/* Details */}
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
  );
}
