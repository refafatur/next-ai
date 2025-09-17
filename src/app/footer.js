import React from "react";

export default function Footer() {
    return (
        <footer style={{
            background: "#181525",
            color: "#fff",
            padding: "60px 0 20px 0",
            fontFamily: "Inter, Arial, sans-serif"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "1200px",
                margin: "0 auto",
                flexWrap: "wrap"
            }}>
                {/* Left Section */}
                <div style={{ flex: "1 1 350px", minWidth: 300 }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
                        <div style={{
                            width: 56,
                            height: 56,
                            background: "linear-gradient(90deg,#a259ff,#3f2fff)",
                            borderRadius: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 16
                        }}>
                            {/* Simple AI Tool Icon */}
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <rect x="6" y="10" width="20" height="12" rx="6" fill="none" stroke="#fff" strokeWidth="2"/>
                                <circle cx="12" cy="16" r="2" fill="#fff"/>
                                <circle cx="20" cy="16" r="2" fill="#fff"/>
                            </svg>
                        </div>
                        <span style={{ fontSize: 32, fontWeight: 500, letterSpacing: 1 }}>AI Tool</span>
                    </div>
                    <p style={{ color: "#b3b3c6", fontSize: 20, marginBottom: 24, maxWidth: 400 }}>
                        Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
                    </p>
                    <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                        {/* Social Icons */}
                        <a href="#" style={{ color: "#b3b3c6" }}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 12v4h8v-4" />
                                <path d="M12 16v-8" />
                            </svg>
                        </a>
                        <a href="#" style={{ color: "#b3b3c6" }}>
                            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.13a4.29 4.29 0 0 0 1.33 5.72c-.7-.02-1.36-.21-1.94-.53v.05c0 2.01 1.43 3.68 3.32 4.06-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.66 2.07 2.87 3.89 2.9A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.6 8.6 0 0 1-2.54.7z"/>
                            </svg>
                        </a>
                        <a href="#" style={{ color: "#b3b3c6" }}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9 9h6v6H9z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Right Section */}
                <div style={{
                    display: "flex",
                    flex: "2 1 600px",
                    justifyContent: "space-between",
                    minWidth: 600,
                    gap: 40
                }}>
                    {/* Products */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 500, marginBottom: 16 }}>Products</h4>
                        <ul style={{ listStyle: "none", padding: 0, color: "#b3b3c6", fontSize: 18 }}>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Features</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Integrations</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Changes log</a></li>
                            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Roadmap</a></li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 500, marginBottom: 16 }}>Company</h4>
                        <ul style={{ listStyle: "none", padding: 0, color: "#b3b3c6", fontSize: 18 }}>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Refund Policy</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Support</a></li>
                            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Community</a></li>
                        </ul>
                    </div>
                    {/* Support */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 500, marginBottom: 16 }}>Support</h4>
                        <ul style={{ listStyle: "none", padding: 0, color: "#b3b3c6", fontSize: 18 }}>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Features</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Integrations</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a></li>
                            <li style={{ marginBottom: 12 }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Changes log</a></li>
                            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Roadmap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div style={{
                borderTop: "1px solid #28243c",
                marginTop: 40,
                paddingTop: 24,
                textAlign: "left",
                color: "#b3b3c6",
                fontSize: 18,
                maxWidth: "1200px",
                margin: "40px auto 0 auto"
            }}>
                AITool, LLC. All rights reserved.
            </div>
        </footer>
    );
}