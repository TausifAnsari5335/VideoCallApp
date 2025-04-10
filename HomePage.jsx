import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [name, setName] = useState(""); // Store name
    const [roomID, setRoomID] = useState(""); // Store room ID
    const navigate = useNavigate();

    const submitHandler = () => {
        if (!name.trim() || !roomID.trim()) {
            alert("⚠ Please enter both Name and Room ID!");
            return;
        }

        // Navigate to the room and pass both room ID and name
        navigate(`/room/${roomID}?name=${encodeURIComponent(name)}`);
    };

    return (
        <div>
            <div>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Enter your name..."
                />
                <input 
                    value={roomID} 
                    onChange={(e) => setRoomID(e.target.value)} 
                    type="text" 
                    placeholder="Enter room ID..."
                />
                <button onClick={submitHandler}>Join</button>
            </div>
        </div>
    );
};

export default HomePage;
