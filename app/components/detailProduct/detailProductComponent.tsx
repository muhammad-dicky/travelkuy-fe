"use client"

import { Alert, Button } from "antd";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AlertTitle } from "@mui/material";

export const LoveButton = () => {
    const [isLoved, setIsLoved] = useState(false);
    const [showSuccessAlert, setSuccessAlert] = useState(false);
    const [showWarningAlert, setWarningAlert] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const toggleLove = () => {
        setIsLoved((prevIsLoved) => !prevIsLoved);
        if (!isLoved) {
            setWarningAlert(true);

        } else {
            setSuccessAlert(true);
        }
    };


    useEffect(() => {
        if (showSuccessAlert || showWarningAlert) {
            const timer = setTimeout(() => {
                setSuccessAlert(false);
                setWarningAlert(false);
            }, 3000); // Menampilkan pesan Alert selama 3 detik
            return () => clearTimeout(timer);
        }
    }, [showSuccessAlert, showWarningAlert]);

    const handleButtonClick = () => {
        setShowAlert(true);
    }
    useEffect(() => {
        if (showAlert) {
            const timeout = setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [showAlert])

    return (
        <>
            <div onClick={toggleLove}>
                {isLoved ? <FavoriteBorderIcon /> : <FavoriteIcon />}Save
            </div>
            {
                showSuccessAlert && (
                    <Alert message="Loved!" type="success" onClose={() => setShowAlert(false)} />
                )
            }
            {
                showWarningAlert && (
                    <Alert message="Cancel Loved:(" type="warning" onClose={() => setShowAlert(false)} />
                )
            }



        </>
    );
}