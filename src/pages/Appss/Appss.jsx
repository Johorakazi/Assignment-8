import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Apps = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
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
    setFilteredApps(results);
  }, [searchTerm, products]);


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
          <input
            type="search"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-60 p-2 border "
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
                  {/* Styled downloads like screenshot */}
                  <button
                    onClick={() => handleInstall(app)}
                    className="flex items-center bg-[#ecf1e7] px-3 py-1 rounded-lg text-green-700 font-semibold text-base gap-2 select-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                    {app.downloads ? Math.round(app.downloads / 1e6) + "M" : "N/A"}
                  </button>
                  {/* Styled rating like screenshot */}
                  <div className="flex items-center bg-[#f7e3d3] px-3 py-1 rounded-lg text-orange-500 font-semibold text-base gap-2 select-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.243 3.822a1 1 0 00.95.69h4.012c.969 0 1.371 1.24.588 1.81l-3.245 2.356a1 1 0 00-.364 1.118l1.243 3.821c.3.922-.755 1.688-1.54 1.118l-3.245-2.356a1 1 0 00-1.176 0l-3.245 2.356c-.785.57-1.84-.196-1.54-1.118l1.243-3.82a1 1 0 00-.364-1.119L2.217 9.25c-.783-.57-.38-1.81.588-1.81h4.012a1 1 0 00.95-.69l1.243-3.822z"/>
                    </svg>
                    {app.ratingAvg || "N/A"}
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

export default Apps;
