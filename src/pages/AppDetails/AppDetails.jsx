import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      navigate("/AppNotFound");
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch("/appssData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load app data. Check /appssData.json path.");
        }
        return res.json();
      })
      .then((data) => {
        const foundApp = data.find((a) => String(a.id) === id);

        if (foundApp) {
          setApp(foundApp);
          const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
          setInstalled(installedApps.some((a) => String(a.id) === foundApp.id));
        } else {
          navigate("/AppNotFound");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id, navigate]);

 
  if (isLoading) {
    return <p className="text-center text-xl mt-20">Loading app details...</p>;
  }

  if (error) {
    return <p className="text-center text-xl mt-20 text-red-600">Error loading app: {error}</p>;
  }

  if (!app) {
      return <p className="text-center text-xl mt-20 text-gray-600">App details not available. Redirecting...</p>;
  }
 

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.some((a) => String(a.id) === String(app.id));
    if (alreadyInstalled) {
      toast.error(`${app.title} is already installed!`);
      setInstalled(true);
      return;
    }
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    toast.success(`${app.title} installed successfully!`);
    setInstalled(true);
  };

  const reviewData = app.ratings || [];

  const formattedDescription = app.description
    ? app.description.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
          {paragraph}
        </p>
      ))
    : <p className="text-gray-700 leading-relaxed">No description available for this app.</p>;


  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md mt-10">

     
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={app?.image}
          alt={app.title}
          className="w-36 h-36 rounded-xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{app.title}</h1>
           <p className="text-sm text-gray-500 mt-2">
            Developed by <span className="text-blue-600 cursor-pointer hover:underline font-medium">productive.io</span>
          </p>

          <div className="flex gap-4 mt-4 items-start"> 
            
     
            <div className="flex flex-col items-center justify-start min-w-[100px]"> 
              
             
              <svg xmlns=".\public\assets\icon-downloads.png" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
           
              <p className="text-sm text-gray-500 mt-[-4px]">Downloads</p> 

           
              <span className="text-4xl font-extrabold text-gray-800">
                {app.downloads ? `${(app.downloads / 1e6).toFixed(0)}M` : "N/A"}
              </span>
            </div>

       
            <div className="flex flex-col items-center justify-start min-w-[120px] border-l px-4 border-gray-300"> 
              
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FBBF24" viewBox="0 0 20 20" className="w-6 h-6">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.243 3.822a1 1 0 00.95.69h4.012c.969 0 1.371 1.24.588 1.81l-3.245 2.356a1 1 0 00-.364 1.118l1.243 3.821c.3.922-.755 1.688-1.54 1.118l-3.245-2.356a1 1 0 00-1.176 0l-3.245 2.356c-.785.57-1.84-.196-1.54-1.118l1.243-3.82a1 1 0 00-.364-1.119L2.217 9.25c-.783-.57-.38-1.81.588-1.81h4.012a1 1 0 00.95-.69l1.243-3.822z" />
              </svg>
              
              <p className="text-sm text-gray-500 mt-[-4px]">Average Ratings</p>
              
              <span className="text-4xl font-extrabold text-gray-800">
                {app.ratingAvg || "N/A"}
              </span>
            </div>

            <div className="flex flex-col items-center justify-start min-w-[120px] border-l pl-4 border-gray-300"> 
              
              <svg xmlns=".\public\assets\icon-review.png" fill="#3B82F6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.455 3.624 2.88 9 2.88s9-1.425 9-2.88V6.75c0-1.455-3.624-2.88-9-2.88S2.25 5.295 2.25 6.75v6.006z" />
              </svg>
        
              <p className="text-sm text-gray-500 mt-[-4px]">Total Reviews</p> 
            
              <span className="text-4xl font-extrabold text-gray-800">
                {app.reviews ? `${(app.reviews / 1000).toFixed(0)}K` : "N/A"}
              </span>
            </div>
          </div>
    

          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-4 w-60 py-3 rounded-lg text-white font-semibold transition
              ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {installed ? "Installed" : "Install Now (291 MB)"}
          </button>
          
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          App Review Chart
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reviewData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        {reviewData.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No review data available for this app.</p>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Description
        </h3>
        <p className="whitespace-pre-line"> {formattedDescription}</p>
       
      </div>
    </div>
  );
};

export default AppDetails;