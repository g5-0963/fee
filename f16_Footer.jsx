import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Footer() {
    const [stamp, setStamp] = useState(() => {
        const savedStamp = localStorage.getItem("stamp");
        return savedStamp ? JSON.parse(savedStamp) : {};
    });

    console.log(stamp.section);

    return (
        <>
            <div
                className="fx fs2 p2"
                style={{
                    height: "4rem",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "fixed",
                    width: "100%",
                    bottom: "8px",
                    backdropFilter: "blur(10px)",
                    borderTop: "1px solid silver",
                }}
            >
                <button className="btn1 fs3 fyc">
                    <BiMenu />
                </button>

                <div>
                    {stamp.section}_{stamp.roll_number}_{stamp.name}
                </div>

                <button className="btn1 fs3 fyc">
                    <BiMenu />
                </button>
            </div>
        </>
    );
}
