import React, { useEffect, useState } from "react";

const Apps = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./public/appssData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
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
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = products.filter((app) =>
      app.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredApps(results);
  }, [searchTerm, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-extrabold mb-1 text-gray-700">App Marketplace</h1>
      <p className="text-lg text-gray-500 mb-6">Explore the best applications for your needs.</p>

      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-medium text-gray-600">
          Total Apps: <span className="font-bold text-gray-800">{products.length}</span>
        </div>
        <div className="w-1/4">
          <input
            type="text"
            placeholder="Search apps by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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

          <div className="flex flex-wrap gap-6 justify-center">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-3"
              >
                <figure className="h-36 w-full overflow-hidden mb-1 flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="object-cover rounded w-full h-full"
                  />
                </figure>
                <h2 className="text-center text-lg font-semibold my-3">{app.title}</h2>
                <div className="flex justify-between items-center w-full px-2 pb-3">
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded text-green-600 font-medium text-base gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" className="inline h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" /></svg>
                    {app.downloads ? (app.downloads/1000000) + "M" : "N/A"}
                  </div>
                  <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-orange-500 font-medium text-base gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 20 20" className="inline h-4 w-4"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.389-2.46a1 1 0 00-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" /></svg>
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
