// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router"; 
// import { toast } from "react-hot-toast";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const AppDetails = () => {
//   const { state: app } = useLocation();
//   const navigate = useNavigate();

//   const [installed, setInstalled] = useState(() => {
//     const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     return installedApps.some((a) => a.id === app?.id);
//   });

//   if (!app) {
//     return (
//       <div>
//         <h1 className="text-left text-3xl">Description</h1>
//         <div>
//           <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a 
//            complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track 
//            how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming,
//             reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
//          </p>
//          <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule 
//           more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to
//           reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds,
//           or instrumental music to create a distraction-free atmosphere</p>
//          <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks
//           milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for
//           exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools,
//           this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and
//           productive throughout the day.</p>
//         </div>
//       </div>
//     );
//   }

//   const handleInstall = () => {
//     const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//     const alreadyInstalled = installedApps.some((a) => a.id === app.id);
//     if (alreadyInstalled) {
//       toast.error(`${app.title} is already installed!`);
//       setInstalled(true);
//       return;
//     }
//     installedApps.push(app);
//     localStorage.setItem("installedApps", JSON.stringify(installedApps));
//     toast.success(`${app.title} installed successfully!`);
//     setInstalled(true);
//   };

//   const reviewData = app.ratings || [
//     { name: "5★", count: 1200 },
//     { name: "4★", count: 800 },
//     { name: "3★", count: 400 },
//     { name: "2★", count: 200 },
//     { name: "1★", count: 100 },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md mt-10">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate("/")}
//         className="text-blue-600 underline mb-6 font-medium hover:text-blue-700"
//       >
//         ← Back to Apps
//       </button>

//       {/* App Information */}
//       <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
//         <img
//           src={app.image}
//           alt={app.title}
//           className="w-36 h-36 rounded-xl object-cover"
//         />
//         <div className="flex flex-col gap-2">
//           <h1 className="text-3xl font-bold">{app.title}</h1>
//           <p className="text-gray-600 text-base">
//             Rating: <span className="font-medium">{app.ratingAvg || "N/A"} ★</span>
//           </p>
//           <p className="text-gray-600 text-base">
//             Downloads:{" "}
//             <span className="font-medium">
//               {app.downloads ? `${(app.downloads / 1e6).toFixed(1)}M` : "N/A"}
//             </span>
//           </p>
//           <p className="text-gray-600 text-base">
//             Reviews: <span className="font-medium">{app.reviews || "N/A"}</span>
//           </p>
//           <button
//             disabled={installed}
//             onClick={handleInstall}
//             className={`mt-3 px-6 py-2 rounded-lg text-white font-semibold transition 
//               ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
//           >
//             {installed ? "Installed" : "Install"}
//           </button>
//         </div>
//       </div>

//       {/* Review Chart */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold mb-4 text-gray-800">
//           App Review Chart
//         </h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={reviewData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="count" fill="#60a5fa" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Description */}
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold mb-3 text-gray-800">
//           About this App
//         </h3>
//         <p className="text-gray-700 leading-relaxed">
//           {app.description ||
//             "This is a powerful and versatile app that provides users with excellent performance and intuitive controls."}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AppDetails;
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
      // আইডি না পেলে AppNotFound এ নেভিগেট করা
      navigate("/AppNotFound"); 
      return;
    }

    setIsLoading(true);
    setError(null); // নতুন ফেচের আগে এরর রিসেট করা

    fetch("/appssData.json") 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load app data. Check /appssData.json path.");
        }
        return res.json();
      })
      .then((data) => {
        // ✅ ফিক্স #1: ডেটা টাইপ সেফ কম্পারিজন: JSON আইডি স্ট্রিং বা নাম্বার যাই হোক, URL প্যারামের সাথে মেলানো
        const foundApp = data.find((a) => String(a.id) === id); 
        
        if (foundApp) {
          setApp(foundApp);
          const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
          setInstalled(installedApps.some((a) => String(a.id) === foundApp.id));
        } else {
          // অ্যাপ খুঁজে না পেলে AppNotFound এ নেভিগেট করা
          navigate("/AppNotFound");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        // ✅ ফিক্স #2: নেটওয়ার্ক বা পার্সিং এরর হলে এরর স্টেট দেখানো
        setError(err.message);
        setIsLoading(false);
        // মারাত্মক এরর হলে AppNotFound এ না পাঠিয়ে এরর মেসেজ দেখানো ভালো
      });
  }, [id, navigate]); 

  // লোডিং, এরর এবং অ্যাপ না পাওয়ার কন্ডিশন
  if (isLoading) {
    return <p className="text-center text-xl mt-20">Loading app details...</p>;
  }

  if (error) {
    return <p className="text-center text-xl mt-20 text-red-600">Error loading app: {error}</p>;
  }
  
  if (!app) {
     return <p className="text-center text-xl mt-20 text-gray-600">App details not available. Redirecting...</p>;
  }
  // ---

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

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white rounded-xl shadow-md mt-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/Apps")} 
        className="text-blue-600 underline mb-6 font-medium hover:text-blue-700"
      >
        ← Back to Apps
      </button>

      {/* App Information */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <img
          src={app?.image}
          alt={app.title}
          className="w-36 h-36 rounded-xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600 text-base">
            Rating: <span className="font-medium">{app.ratingAvg || "N/A"} ★</span>
          </p>
          <p className="text-gray-600 text-base">
            Downloads:{" "}
            <span className="font-medium">
              {app.downloads ? `${(app.downloads / 1e6).toFixed(1)}M` : "N/A"}
            </span>
          </p>
          <p className="text-gray-600 text-base">
            Reviews: <span className="font-medium">{app.reviews || "N/A"}</span>
          </p>
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`mt-3 px-6 py-2 rounded-lg text-white font-semibold transition 
              ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Review Chart */}
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

      {/* Description */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          About this App
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {app.description ||
            "No description available for this app."} 
        </p>
      </div>
    </div>
  );
};

export default AppDetails;