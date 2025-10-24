import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast"; // install react-hot-toast

const InstallationPage = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    fetch("/appssData.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        setApp(foundApp);
        const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
        setIsInstalled(installed.some((item) => item.id === foundApp.id));
      });
  }, [id]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    installed.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installed));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  if (!app)
    return <p className="text-center text-lg mt-10">Loading app details...</p>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
      <img
        src={app.image}
        alt={app.title}
        className="w-40 h-40 mx-auto mb-4 rounded-lg"
      />
      <p className="text-gray-600 mb-4">{app.description || "No description"}</p>

      <button
        onClick={handleInstall}
        disabled={isInstalled}
        className={`px-6 py-2 rounded-lg font-semibold text-white ${
          isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isInstalled ? "Installed" : "Install"}
      </button>
    </div>
  );
};

export default InstallationPage;
