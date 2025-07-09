type CardProps = {
    title: string
    description: string
    image?: string // opcjonalny props
}

export function Card({ title, description, image }: CardProps) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                maxWidth: "400px",
                margin: "20px auto",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "left",
            }}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            )}
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h3>
            <p style={{ fontSize: "16px", color: "#444" }}>{description}</p>
        </div>
    )
}
