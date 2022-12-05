import React from "react"


export default function Logo() {
    return (
        <div className="logo-container d-flex"
            style={{
                justifyContent: 'center'
            }}
        >
            <span
                className=""
                style={{
                    padding: "12px 16px",
                    background: "#1976D2",
                    color: "#fff",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "16px",
                    letterSpacing: "1.25px",
                    textAlign: "center",
                }}
            >
                LOGO
            </span>
        </div>
    )
}