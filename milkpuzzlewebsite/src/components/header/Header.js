import React from "react";
import './Header.css';
import './Letter Magic.ttf';
import { GiMilkCarton, GiPuzzle } from 'react-icons/gi';

export default function Header(){
    return(
        <div className="header">
            <div className="milkpuzzle-title">
                <GiMilkCarton className="svg"/> milkpuzzle <GiPuzzle className="svg"/>
            </div>
            <div className="hr"></div>
        </div>
    );
}