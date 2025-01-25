import styles from "./page.module.css";



export async function Lista() {

    const response = await fetch('http://localhost:4000/frameworks')
    const data = await response.json()

    return (
        <div className="lista">
            <h1>Listas de Frameworks do React JS</h1>
            <ul>
                {data.map((nomes : any) => (
                    <li key={nomes.id}><strong>Nome:</strong>{nomes.nome}
                        <ul>
                            <li><a href={nomes.link}>{nomes.link}</a></li>
                        </ul>
                    </li>

                ))}
            </ul>
        </div>
    )
}