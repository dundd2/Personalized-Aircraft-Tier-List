import React, { useState, useEffect } from 'react';
import { AlertCircle, Save } from 'lucide-react';

const InteractiveTierList = () => {
  const initialTiers = [
    { 
      id: 'A', 
      name: 'A', 
      color: '#FF7F7F', 
      description: 'The best jets available. Top-tier flying experience.',
      aircraft: ['A380-800', 'B777-300ER', 'A350-1000', 'A350-900', 'B787-8']
    },
    { 
      id: 'B', 
      name: 'B', 
      color: '#FFBF7F', 
      description: 'Excellent planes that I love to fly on, though not quite the absolute best.',
      aircraft: ['B777-200ER', 'B777-200LR', 'A330-300', 'A340-600', 'A320neo']
    },
    { 
      id: 'C', 
      name: 'C', 
      color: '#FFDF7F', 
      description: 'Good, reliable aircraft. Slightly older models, but still comfortable and enjoyable.',
      aircraft: ['A321-200', 'A320-200', 'B737-800', 'A220-300']
    },
    { 
      id: 'D', 
      name: 'D', 
      color: '#FFFF7F', 
      description: 'Standard planes. Nothing exceptional, but I feel safe and comfortable on board.',
      aircraft: ['A319-100', 'B737-700']
    },
    { 
      id: 'E', 
      name: 'E', 
      color: '#BFFF7F', 
      description: 'Poor experience. I strongly dislike flying on these aircraft.',
      aircraft: ['ERJ190-100LR']
    },
    { 
      id: 'F', 
      name: 'F', 
      color: '#FF9999', 
      description: 'Avoid at all costs. I feel unsafe and would never fly on these again.',
      aircraft: ['ATR72-500']
    },
  ];

  const [tiers, setTiers] = useState(() => {
    const savedTiers = localStorage.getItem('aircraftTiers');
    return savedTiers ? JSON.parse(savedTiers) : initialTiers;
  });

  const [selectedAircraft, setSelectedAircraft] = useState(null);

  useEffect(() => {
    localStorage.setItem('aircraftTiers', JSON.stringify(tiers));
  }, [tiers]);

  const handleSelectAircraft = (aircraft) => {
    setSelectedAircraft(aircraft);
  };

  const handleMoveAircraft = (targetTierId) => {
    if (!selectedAircraft) return;

    setTiers(prevTiers => {
      const updatedTiers = prevTiers.map(tier => ({
        ...tier,
        aircraft: tier.aircraft.filter(a => a !== selectedAircraft)
      }));

      const targetTier = updatedTiers.find(t => t.id === targetTierId);
      targetTier.aircraft.push(selectedAircraft);

      return updatedTiers;
    });

    setSelectedAircraft(null);
  };

  const handleSave = () => {
    localStorage.setItem('aircraftTiers', JSON.stringify(tiers));
    alert('Tier list saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the tier list to its initial state?')) {
      setTiers(initialTiers);
      localStorage.removeItem('aircraftTiers');
      alert('Tier list has been reset to its initial state.');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Saveable Personalized Aircraft Tier List</h2>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center text-yellow-600">
          <AlertCircle className="mr-2" />
          <span>Select an aircraft, then click a tier to move it.</span>
        </div>
        <div>
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2 flex items-center">
            <Save className="mr-2" size={16} />
            Save
          </button>
          <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </div>
      {tiers.map((tier) => (
        <div key={tier.id} className="mb-6">
          <div className="flex items-stretch">
            <button
              className="w-12 flex-shrink-0 flex items-center justify-center text-xl font-bold text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: tier.color }}
              onClick={() => handleMoveAircraft(tier.id)}
            >
              {tier.name}
            </button>
            <div className="flex-grow bg-white p-2 rounded-r">
              <p className="text-sm text-gray-600 mb-2">{tier.description}</p>
              <div>
                {tier.aircraft.map((aircraft) => (
                  <button
                    key={aircraft}
                    onClick={() => handleSelectAircraft(aircraft)}
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      selectedAircraft === aircraft 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {aircraft}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveTierList;
