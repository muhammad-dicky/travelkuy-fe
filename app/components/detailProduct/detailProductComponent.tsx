"use client"

import { Button } from "antd";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const LoveButton = () => {
    const [isLoved, setIsLoved] = useState(false);

    const toggleLove = () => {
        setIsLoved((prevIsLoved) => !prevIsLoved);
    };

    return (
        <Button
            onClick={toggleLove}
        >
            {isLoved ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </Button>
    );
}