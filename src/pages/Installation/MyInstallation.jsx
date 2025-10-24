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
    const sorted = [...installedApps];
    if (order === "high") sorted.sort((a, b) => b.downloads - a.downloads);
    else if (order === "low") sorted.sort((a, b) => a.downloads - b.downloads);
    setInstalledApps(sorted);
  };

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-extrabold mb-1 text-center text-gray-700">
        My Installed Apps
      </h1>
      <p className="text-lg text-center text-gray-500 mb-6">
        Manage all your installed applications here.
      </p>

      {installedApps.length > 0 && (
        <div className="flex justify-center mb-6">
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="select select-bordered p-2 border border-gray-300 rounded-md"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-6 justify-center">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="w-72 mx-auto bg-white rounded-lg shadow-md hover:shadow-2xl transition-transform hover:scale-[1.03] flex flex-col"
            >
              <div className="p-4">
                <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="object-contain w-full h-full rounded-lg"
                  />
                </div>
              </div>

              <h2 className="text-center text-base font-semibold mb-1 px-2 line-clamp-2">
                {app.title}
              </h2>

              <div className="flex justify-between items-center px-4 pb-4">
                <div>⬇ {app.downloads ? app.downloads / 1000000 + "M" : "N/A"}</div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg font-semibold hover:bg-red-600"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
