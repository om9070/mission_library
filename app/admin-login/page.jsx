// 'use client';
// import { useState } from 'react';


// export default function AdminLogin() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [records, setRecords] = useState([]);


//     const login = async () => {
//         const res = await fetch('/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         });


//         const data = await res.json();
//         if (data.success) {
//             setLoggedIn(true);
//             fetchRecords();
//         }
//     };


//     const fetchRecords = async () => {
//         const res = await fetch('/api/records');
//         const data = await res.json();
//         setRecords(data.records);
//     };


//     const assignDateTime = async (id, date, time) => {
//         await fetch('/api/assign', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ id, date, time }),
//         });
//         fetchRecords();
//     };


//     if (!loggedIn) {
//         return (
//             <div className="h-screen flex justify-center items-center bg-gray-100">
//     <div className="p-10 max-w-sm w-full bg-white shadow-lg rounded">
//         <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>

//         <input
//             className="border p-2 w-full mb-3 rounded"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//             className="border p-2 w-full mb-3 rounded"
//             placeholder="Password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//             className="p-2 bg-blue-600 text-white w-full rounded"
//             onClick={login}
//         >
//             Login
//         </button>
//     </div>
// </div>

//         );
//     }


//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">Records</h2>


//             {records.map((r) => (
//                 <div key={r._id} className="border p-3 mb-3 rounded">
//                     <p><b>Name:</b> {r.name}</p>
//                     <p><b>Email:</b> {r.email}</p>
//                     <p><b>Phone:</b> {r.phone}</p>


//                     <div className="mt-2">
//                         <input type="date" className="border p-1 mr-2" onChange={(e) => (r.date = e.target.value)} />
//                         <input type="time" className="border p-1 mr-2" onChange={(e) => (r.time = e.target.value)} />
//                         <button className="p-1 bg-green-600 text-white" onClick={() => assignDateTime(r._id, r.date, r.time)}>Assign</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }


"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loader, setloader] = useState(false)

  async function login() {
    try {
      setloader(true)
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/admin-panel");
      } else {
        toast.error("Invalid login");
      }
      setloader(false)
    } catch (e) {
      toast.error(e?.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 bg-white rounded-xl shadow max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="border p-2 w-full mb-3" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        {loader ? <div>Loding.....</div> : <button className="p-2 bg-blue-600 text-white w-full rounded" onClick={login}>
          Login
        </button>}
      </div>
    </div>
  );
}
