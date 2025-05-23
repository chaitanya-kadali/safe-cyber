import React, { useState, useEffect } from "react";
import TrendInput from "./TrendInput";
import axios from "axios";

export default function NewsTrend() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://safecyber-api.onrender.com/api/tscam-list");
      setData(response.data.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleButtonClick = async (heading) => {
    console.log("Button clicked for item with ID:", heading);
    try {
      let response = await axios.post(
        " https://safecyber-api.onrender.com/api/noticed-it",
        { headline: heading }
      );
      if (response.data.success) {
        console.log(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="scam-main">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div key={item.id} className="scam-card">
            <div className="scam-line">
              <h3 className="scam-line-head">{item.headline}</h3>
              <button
                onClick={() => handleButtonClick(item.headline)}
                className="scam-line-btn"
              >
                Noticed it!
              </button>
            </div>
            <p className="scam-line-mat">{item.tcontent}</p>
          </div>
        ))
      )}
      <TrendInput catgry={"news"} refreshData={fetchData} />
    </div>
  );
}
