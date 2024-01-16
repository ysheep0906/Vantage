import React from "react";

export default function NotFound() {
  return (
    <div className="main" style={{ width: '100%', height: '100%', textAlign: "center", alignItems: 'center' }}>
        <p style={
          { fontSize: "64px", fontWeight: "700", color: "rgb(36, 153, 239)" }
        }>Ooops... Not Found!!</p>
        <p style={{ fontSize: '14px', fontWeight: '500', color: 'rgb(140,163,186)' }}>The page you requested could not be found</p>
    </div>
  );
}
