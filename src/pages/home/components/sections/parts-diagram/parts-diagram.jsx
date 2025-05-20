import React, { useState, useEffect } from "react";
import "./parts-diagram.scss";

const CarPartsViewer = () => {
  const [activeCategory, setActiveCategory] = useState("Main Wiring harness");
  const [selectedPart, setSelectedPart] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const categories = [
    "Main Wiring harness",
    "Front Wiring harness",
    "Floor Wiring harness",
    "Door Wiring harness",
    "Front Bumper harness",
    "Rear Bumper harness",
  ];

  const parts = [
    {
      id: 1,
      name: "Main Wiring harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T3wKczx9sjaY2RtLIgMXpD15Laqs9s.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 65,
      y: 43,
      category: "Main Wiring harness",
      description:
        "Main wiring harness connecting all major electrical components",
    },
    {
      id: 2,
      name: "Front Wiring harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v1qYnf62QQizg2LdKE2q3NMs4NPLKJ.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 75,
      y: 55,
      category: "Front Wiring harness",
      description: "Front harness for engine and front electrical components",
    },
    {
      id: 3,
      name: "Floor Wiring harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YPIt6ItJ8bVjcLHgj2bn3bguQMXDjR.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 40,
      y: 55,
      category: "Floor Wiring harness",
      description: "Floor harness connecting underbody electrical components",
    },
    {
      id: 4,
      name: "Door Wiring harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qyd90zehwG93uzf83nllgvzV7NivHW.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 50,
      y: 50,
      category: "Door Wiring harness",
      description: "Driver door harness for window, lock and mirror controls",
    },
    {
      id: 5,
      name: "Front Bumper harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LGM2Hb7h4yp7FxAdIHgcJn1HSk0A0P.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 85,
      y: 60,
      category: "Front Bumper harness",
      description: "Front bumper harness for sensors and lighting",
    },
    {
      id: 6,
      name: "Rear Bumper harness",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UWigGnHo8Y9nvN9NB7LTWrTQBALkyy.png",
      realImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front-harness-7XBJ24BU9gNElKnc1tAmW6FbzJSqVs.png",
      x: 18,
      y: 33,
      category: "Rear Bumper harness",
      description: "Rear bumper harness for parking sensors and lighting",
    },
  ];

  // Set initial selected part
  useEffect(() => {
    const initialPart = parts.find((part) => part.category === activeCategory);
    if (initialPart && !selectedPart) {
      setSelectedPart(initialPart);
    }
  }, [activeCategory, selectedPart]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const part = parts.find((part) => part.category === category);
    if (part) {
      setSelectedPart(part);
    }
  };

  const handleAllClick = () => {
    setActiveCategory("ALL");
    setSelectedPart(null);
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setActiveCategory(part.category);
  };

  // Get parts to display based on active category
  const visibleParts =
    activeCategory === "ALL"
      ? parts
      : parts.filter((part) => part.category === activeCategory);

  return (
    <div className="car-parts-viewer container">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.replace(" Wiring harness", "").replace(" harness", "")}
          </button>
        ))}
      </div>

      <div className={`viewer-content ${isMobile ? "mobile" : ""}`}>
        <div className="car-view">
          <div className="car-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sonet-h2-JZmnDru4OwThjSlsI3OnTOTxEmVBH6.png"
              alt="Kia Sonet"
              className="car-image"
            />

            {parts.map((part) => (
              <div
                key={part.id}
                className={`hotspot ${
                  activeCategory === part.category || activeCategory === "ALL"
                    ? "active"
                    : ""
                }`}
                style={{ left: `${part.x}%`, top: `${part.y}%` }}
                onClick={() => handlePartClick(part)}
              >
                <div className="hotspot-icon">+</div>
                <div className="hotspot-label">{part.name.split(" ")[0]}</div>
              </div>
            ))}

            {/* Show connection lines and harness images for visible parts */}
            {visibleParts.map((part) => (
              <React.Fragment key={`line-${part.id}`}>
                <svg className="connection-line">
                  <line
                    x1={`${part.x}%`}
                    y1={`${part.y}%`}
                    x2={`${part.x - 20}%`}
                    y2={`${part.y + 10}%`}
                    stroke="#c3272b"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Removed the !isMobile condition to show images on mobile */}
                <div
                  className={`harness-images-container ${
                    isMobile ? "mobile" : ""
                  }`}
                  style={{
                    left: `${part.x - 20}%`,
                    top: `${part.y + 10}%`,
                    // Add additional mobile positioning if needed
                    ...(isMobile && {
                      left: `${part.x - 15}%`,
                      top: `${part.y + 15}%`,
                    }),
                  }}
                >
                  <div className="harness-image real">
                    <div className="image-label">Actual Part</div>
                    <img
                      src={part.realImage || "/placeholder.svg"}
                      alt={`${part.name} Photo`}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {selectedPart && (
          <div className="parts-details">
            <div className="part-detail-card">
              <h2>{selectedPart.name}</h2>

              <div className="part-images">
                <div className="part-image-container diagram">
                  <h3>Technical Diagram</h3>
                  <img
                    src={selectedPart.image || "/placeholder.svg"}
                    alt={`${selectedPart.name} Diagram`}
                  />
                </div>
              </div>

              {!isMobile && (
                <div className="part-info">
                  <p>{selectedPart.description}</p>
                  <div className="part-connections">
                    <h3>Key Connections:</h3>
                    {selectedPart.name === "Main Wiring harness" && (
                      <ul>
                        <li>
                          <strong>M05, GM04, GM01:</strong> Engine control
                          connections
                        </li>
                        <li>
                          <strong>ICU-D, ICU-E:</strong> Interior control unit
                          connections
                        </li>
                        <li>
                          <strong>M41, M31:</strong> Power distribution
                          connections
                        </li>
                      </ul>
                    )}
                    {selectedPart.name === "Front Wiring harness" && (
                      <ul>
                        <li>
                          <strong>JE31, E336, JE32:</strong> Engine sensor
                          connections
                        </li>
                        <li>
                          <strong>ICU-A, ICU-B:</strong> Control unit
                          connections
                        </li>
                        <li>
                          <strong>E/R Junction Block:</strong> Engine room
                          junction connections
                        </li>
                      </ul>
                    )}
                    {selectedPart.name === "Floor Wiring harness" && (
                      <ul>
                        <li>
                          <strong>F16, F05-R, F37:</strong> Floor sensor
                          connections
                        </li>
                        <li>
                          <strong>GF04, F14:</strong> Ground and power
                          connections
                        </li>
                        <li>
                          <strong>F28-B/F28-L:</strong> Seat control connections
                        </li>
                      </ul>
                    )}
                    {selectedPart.name === "Door Wiring harness" && (
                      <ul>
                        <li>
                          <strong>D02L:</strong> Driver Door Lock Actuator
                        </li>
                        <li>
                          <strong>D03A/B/C:</strong> Power Window Main Switch
                        </li>
                        <li>
                          <strong>D08:</strong> Driver Smart Key Outside Handle
                        </li>
                        <li>
                          <strong>FD11:</strong> Connection With FLOOR Harness
                        </li>
                      </ul>
                    )}
                    {selectedPart.name === "Front Bumper harness" && (
                      <ul>
                        <li>
                          <strong>E50-CL/CR:</strong> Front PDW Sensor Center
                        </li>
                        <li>
                          <strong>E50-L/R:</strong> Front PDW Sensor Left/Right
                        </li>
                        <li>
                          <strong>JE01:</strong> Joint Connector
                        </li>
                        <li>
                          <strong>EE12:</strong> Connection With Front Harness
                        </li>
                      </ul>
                    )}
                    {selectedPart.name === "Rear Bumper harness" && (
                      <ul>
                        <li>
                          <strong>R21-L/R:</strong> Rear PDW Sensor Left/Right
                        </li>
                        <li>
                          <strong>R24-E:</strong> Center Back-Up Lamp
                        </li>
                        <li>
                          <strong>FR11:</strong> Connection With FLOOR Harness
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPartsViewer;
