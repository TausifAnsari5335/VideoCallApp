import React, { useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from "./constant";

const VideoPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const roomID = id ? id.toString() : "defaultRoom"; // Ensure it's a valid string
    const videoContainer = useRef(null);

    // Extract user name from URL parameters
    const queryParams = new URLSearchParams(location.search);
    const userName = queryParams.get("name") || "Guest"; // Default to "Guest" if missing

    useEffect(() => {
        if (videoContainer.current) {
            myMeeting(videoContainer.current);
        }
    }, []);

    const myMeeting = async (element) => {
        console.log("🔍 Debugging Info:");
        console.log("Room ID:", roomID);
        console.log("User Name:", userName);

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            Number(APP_ID), SERVER_SECRET, roomID, String(Date.now()), userName
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy link",
                    url: `${window.location.origin}/room/${roomID}?name=${encodeURIComponent(userName)}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return <div ref={videoContainer} />;
};

export default VideoPage;
