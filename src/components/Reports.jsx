import React from "react";

const Reports = () => {
  const downloadPdf = async () => {
    const response = await fetch("/api/reports/pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expense_report.pdf";
    a.click();
  };

  const downloadCsv = async () => {
    const response = await fetch("/api/reports/csv");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "expense_report.csv";
    a.click();
  };

  return (
    <div className="space-x-4">
      <button onClick={downloadPdf} className="bg-blue-500 text-white p-2 rounded">
        Download PDF
      </button>
      <button onClick={downloadCsv} className="bg-blue-500 text-white p-2 rounded">
        Download CSV
      </button>
    </div>
  );
};

export default Reports;