interface NomeProps {
  nome: string
}

function Homes({nome}: NomeProps) {
  return (
    <div>Fala aer meu mano {nome}</div>
  )
}

export default Homes;