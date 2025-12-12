"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminPanel() {
  const [students, setStudents] = useState([]);
  const [token, setToken] = useState("");
  const [loader, setloader] = useState(true);
  const [active,setActive]=useState(false)

  useEffect(() => {
    const stored = document.cookie
      .split("; ")
      .find((x) => x.startsWith("token="));
    if (stored) setToken(stored.split("=")[1]);

    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const res = await fetch("/api/records");
      const data = await res.json();

      // Add local editing fields (date/time)
      const updated = data.records.map((s) => ({
        ...s,
        editDate: s.assignedDate || "",
        editTime: s.assignedTime || "",
      }));

      setStudents(updated);
      setloader(false);
    } catch (e) {
      toast.error(e?.message);
    }
  }

  async function assign(id, date, time) {
    try {
      setActive(true)
      const res = await fetch("/api/assign", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, date, time }),
      });

      if (!res.ok) throw new Error("Failed to assign");

      toast("User details updated sucessfully.");
      fetchStudents();
      setActive(false)
    } catch (err) {
      toast.error(err.message);
      setActive(false)
    }
  }

  async function handledelete(id) {
    try {
      const res = await fetch("/api/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed to delete");

      toast("User deleted successfully!");
      fetchStudents();
    } catch (err) {
      toast.error(err.message);
    }
  }

  // Update local state while typing
  function updateLocalValue(id, field, value) {
    setStudents((prev) =>
      prev.map((s) => (s._id === id ? { ...s, [field]: value } : s))
    );
  }

  async function handleLogout() {
    try {
      const res = await fetch("/api/login");
      const data = await res.json();

      if (data.success) {
        toast("Logged out successfully!");
        // Redirect to login page
        window.location.href = "/";
      }
    } catch (err) {
      toast.error(err.message);
    }
  }


  return (
    <div className="p-20">
      <h1 className="text-2xl font-bold mb-5">Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="text-red-800 bg-red-200 p-2 m-3 cursor-pointer border-2"
      >
        logout
      </button>

      {loader ? (
        <div className="loader">
          <div data-glitch="Loading..." className="glitch text-5xl">
            Loading...
          </div>
        </div>
      ) : students.length > 0 ? (
        students.map((s) => (
          <div key={s._id} className="p-4 border rounded mb-3">
            <div className="flex gap-2">
              <p>
                <b>Name:</b> {s.name}
              </p>
              <p>
                <b>Email:</b> {s.email}
              </p>
              <p>
                <b>PaymentId:</b> {s.paymentId}
              </p>
               <p>
                <b>Amount:</b> {s.amount}
              </p>
               <p>
                <b>Phone:</b> {s.phone}
              </p>
               <p>
                <b>createdAt:</b> {s.createdAt.split("T")[0]}
              </p>

            </div>

            <div className="flex gap-2 mt-3">
              <input
                type="date"
                className="border p-2"
                value={s.editDate}
                onChange={(e) =>
                  updateLocalValue(s._id, "editDate", e.target.value)
                }
              />

              <input
                type="time"
                className="border p-2"
                value={s.editTime}
                onChange={(e) =>
                  updateLocalValue(s._id, "editTime", e.target.value)
                }
              />

              {active?"Loading....":<button
                className="bg-green-600 text-white px-3 py-2 rounded"
                onClick={() => assign(s._id, s.editDate, s.editTime)}
              >
                Assign
              </button>}

              <button
                className="bg-red-600 text-white px-3 py-2 rounded"
                onClick={() => handledelete(s._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>NO Student here...</div>
      )}
    </div>
  );
}
