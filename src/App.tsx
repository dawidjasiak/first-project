import { useState } from 'react'
import './App.css'
import { Card } from "./components/Card"

const cards = [
  {
    title: "JSX + Props",
    description: "JSX pozwala pisać HTML w JS. Propsy to dane przekazywane do komponentów.",
    image: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg",
  },
  {
    title: "Stan i useState",
    description: "Stan pozwala Reactowi śledzić zmiany i aktualizować UI.",
    image: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg",
  },
  {
    title: "Dynamiczne renderowanie",
    description: "Możesz wyrenderować wiele komponentów z tablicy danych.",
    image: "https://www.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg",
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "32px" }}>
          Lista kart 🚀
        </h1>

        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      )


      <div>
        <h1 style={{ textAlign: "center", fontSize: "32px" }}>Czas się czegoś nauczyć XD 🚀</h1>


        <Card
          title="Mój pierwszy komponent z obrazkiem"
          description="Wygląda całkiem profesjonalnie, co nie? 😎"
          image="https://www.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg"
        />

        <Card
          title="Bez obrazka"
          description="Ten komponent nie ma obrazka i nadal działa — props image jest opcjonalny!"
        />
      </div>
      <h1>obrazki są fajne, ale licznik bez celu jeszcze lepszy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          licznik totalnie bezcelowy {count}
        </button>
        <p>
          emocje jak przy zbieraniu grzybów
        </p>
      </div>
    </>

  )

}

export default App
