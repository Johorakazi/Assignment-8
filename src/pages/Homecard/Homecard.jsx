import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Homecard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./public/appssData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch app data");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const displayedProducts = products.slice(0, 8);

  const handleCardClick = (id) => {
    navigate(`/app/${id}`);
  };

  const handleShowAll = () => {
    navigate("/apps");
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-3 text-center">Trending Apps</h1>
      <h3 className="text-lg font-light mb-10 text-center text-gray-600">
        Explore All Trending Apps on the Market developed by us
      </h3>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 justify-center">
            {displayedProducts.map((app) => (
              <div
                key={app.id}
                onClick={() => handleCardClick(app.id)}
                className="cursor-pointer card mx-auto hover:shadow-2xl transition-transform hover:scale-[1.03]"
              >
                <figure className="h-48 overflow-hidden px-4 pt-4">
                  <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={app?.image || null}
                      alt={app.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </figure>
                <div className="card-body py-4 px-4 gap-y-4 flex flex-col">
                  <h2 className="card-title text-base font-bold">{app.title}</h2>
                  <div className="flex items-center justify-between gap-x-4 mt-2">
                    <div className="flex items-center bg-gray-50 rounded px-2 py-[2px] min-w-[60px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 mr-1">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      <span className="text-[15px] text-green-700 font-semibold">
                        {Math.floor((app.downloads || 0) / 1000000)}M
                      </span>
                    </div>
                    <div className="flex items-center bg-orange-50 rounded px-2 py-[2px] min-w-[38px] justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-orange-400 mr-1">
                        <path d="M12 .587l3.668 7.568L24 9.748l-6 5.847L19.335 24 12 20.201 4.665 24 6 15.595 0 9.748l8.332-1.593z" />
                      </svg>
                      <span className="text-[14px] font-semibold text-orange-500">
                        {app.ratingAvg ?? "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={"/apps"}
              className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded transition"
            >
              Show All
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Homecard;
