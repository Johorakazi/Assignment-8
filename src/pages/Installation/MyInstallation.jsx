import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast.error("App uninstalled successfully!");
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sortedApps = [...installedApps];
    if (order === "high") sortedApps.sort((a, b) => b.downloads - a.downloads);
    else if (order === "low") sortedApps.sort((a, b) => a.downloads - b.downloads);
    setInstalledApps(sortedApps);
  };

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-extrabold mb-1 text-center text-gray-700">
        Your Installed Apps
      </h1>
      <p className="text-lg text-center text-gray-500 mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="text-xl font-medium text-gray-800 mb-8">
        {installedApps.length} Apps Found
      </div>
      {installedApps.length > 0 && (
        <div className="flex justify-end mb-4">
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered p-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="none">Sort by Downloads</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
      )}
      {installedApps.length === 0 ? (
        <p className="text-center text-lg text-gray-500 mt-10">
          No apps installed yet.
        </p>
      ) : (
        // Use a wide wrapper for long cards
        <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center gap-6 bg-[#F7F7F7] rounded-xl py-4 px-4 w-full"
            >
              <div className="w-16 h-16 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="object-contain w-full h-full rounded"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-800 text-base truncate">
                  {app.title}
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center bg-[#e7efe4] px-2 py-0.5 rounded-md text-green-700 text-sm font-medium gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                    {app.downloads ? Math.round(app.downloads / 1e6) + "M" : "N/A"}
                  </div>
                  <div className="flex items-center bg-[#f7e3d3] px-2 py-0.5 rounded-md text-orange-500 text-sm font-medium gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.243 3.822a1 1 0 00.95.69h4.012c.969 0 1.371 1.24.588 1.81l-3.245 2.356a1 1 0 00-.364 1.118l1.243 3.821c.3.922-.755 1.688-1.54 1.118l-3.245-2.356a1 1 0 00-1.176 0l-3.245 2.356c-.785.57-1.84-.196-1.54-1.118l1.243-3.82a1 1 0 00-.364-1.119L2.217 9.25c-.783-.57-.38-1.81.588-1.81h4.012a1 1 0 00.95-.69l1.243-3.822z"/>
                    </svg>
                    {app.ratingAvg || "N/A"}
                  </div>
                  <span className="text-gray-500 text-sm font-medium">{app.size} MB</span>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 text-white py-1.5 px-6 rounded-md font-semibold hover:bg-green-600 transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
