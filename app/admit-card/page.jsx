'use client'
import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";

const AdmitCardSearch = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        try {
            if (!search) return toast.error("Please enter mobile number");
            setError("");
            setLoading(true);

            try {
                const res = await axios.post("api/records/", {
                    phone: search,
                });


                const data = res.data.records;
                if (data === null) {
                    setLoading(false);
                    return toast.error("Admit card not found !")

                }

                generatePDF(data);

            } catch (err) {
                setError("No record found!");
            }

            setLoading(false);
        } catch (e) {
            toast.error(e?.message)
        }
    };

    const generatePDF = async (data) => {
        const doc = new jsPDF();

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(22);
        doc.text("ADMIT CARD", 105, 30, { align: "center" });


        // Border Box
        doc.setLineWidth(0.6);
        doc.rect(10, 10, 190, 270);

        // Table
        autoTable(doc, {
            startY: 40,
            margin: { left: 35 }, // Center table
            styles: {
                fontSize: 13,
                cellPadding: 5,
                halign: "center",      // center text inside cells
                valign: "middle"
            },
            headStyles: {
                fillColor: [0, 102, 204], // optional blue header
                textColor: "#fff",
                halign: "center"
            },
            tableWidth: 140, // makes table centered
            head: [["Field", "Details"]],
            body: [
                ["Name", data.name],
                ["Father's Name", data.fatherName],
                ["Mobile Number", data.phone],
                ["Roll Class", data.className],
                ["Exam Date", data.assignedDate],
                ["Exam Time", data.assignedTime],
            ],
        });


        doc.setFontSize(11);
        doc.text("NOTE:", 15, doc.lastAutoTable.finalY + 12);
        doc.text(
            "Bring this admit card along with a valid ID proof. Late entry strictly not allowed.",
            15,
            doc.lastAutoTable.finalY + 18
        );

        doc.save(`${data.name}_AdmitCard.pdf`);
        toast("Admit card downloaded sucessfully.")
    };

    // Convert image url to Base64
    const getBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            };
            img.onerror = reject;
            img.src = url;
        });
    };

    return (
        <div style={{ width: 400, margin: "0 auto", marginTop: 100 }} className="h-150">
            <h2>Download Admit Card</h2>
            <input
                type="number"
                placeholder="Enter Mobile No"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "100%", padding: 10, marginTop: 10 }}
                className="border rounded-xl"
            />
            <button
                onClick={handleSearch}
                disabled={loading}
                style={{
                    width: "100%",
                    marginTop: 10,
                    padding: 10,
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                }}
            >
                {loading ? "Searching..." : "Download Admit Card"}
            </button>

            {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
        </div>
    );
};

export default AdmitCardSearch;
