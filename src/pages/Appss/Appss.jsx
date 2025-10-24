import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast"; // ✅ toast add
// import { useNavigate } from "react-router"; // ❌ আর দরকার নেই

const Apps = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/appssData.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let results = products.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "high") {
      results.sort((a, b) => b.downloads - a.downloads);
    } else if (sortOrder === "low") {
      results.sort((a, b) => a.downloads - b.downloads);
    }

    setFilteredApps(results);
  }, [searchTerm, products, sortOrder]);

  // ✅ Handle install directly here (no redirect)
  const handleInstall = (app) => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    const alreadyInstalled = installedApps.some((a) => a.id === app.id);
    if (alreadyInstalled) {
      toast.error(`${app.title} is already installed!`);
      return;
    }

    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));

    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-extrabold mb-1 text-center text-gray-700">
        App Marketplace
      </h1>
      <p className="text-lg text-center text-gray-500 mb-6">
        Explore the best applications for your needs.
      </p>

      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-medium text-gray-600">
          Total Apps:{" "}
          <span className="font-bold text-gray-800">{products.length}</span>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="none">Sort by Downloads</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>

          <input
            type="search"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-60 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {isLoading ? (
        <p className="text-center text-lg">Loading apps...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">Error: {error}</p>
      ) : (
        <>
          {filteredApps.length === 0 && (
            <p className="text-center text-xl text-gray-500 mt-10">
              No App Found for "{searchTerm}"
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-6 justify-center">
            {filteredApps.map((app) => (
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

                <div className="flex justify-between items-center w-full px-4 pb-4">
                  {/* ✅ Install button replaces redirect */}
                  <button
                    onClick={() => handleInstall(app)}
                    className="flex items-center bg-green-50 px-2 py-1 rounded text-green-600 font-medium text-base gap-1 cursor-pointer hover:bg-green-100 transition"
                  >
                    ⬇ {app.downloads ? app.downloads / 1000000 + "M" : "N/A"}
                  </button>

                  <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-orange-500 font-medium text-base gap-1">
                    ⭐ {app.ratingAvg || "N/A"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Apps;
