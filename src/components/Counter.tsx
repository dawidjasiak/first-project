import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count + 1)
    const reset = () => setCount(0)

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Licznik: {count}</h2>

            <button
                onClick={increase}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    margin: "10px",
                }}
            >
                + Zwiększ
            </button>

            <button
                onClick={reset}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "#e11d48",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    margin: "10px",
                }}
            >
                🔄 Resetuj
            </button>
        </div>
    )
}
