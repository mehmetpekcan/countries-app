"use client";

function ErrorContainer({ error }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "48px" }}>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export { ErrorContainer };
