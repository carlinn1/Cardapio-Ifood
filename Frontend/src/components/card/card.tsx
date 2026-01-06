import "./card.css";

interface CardProps {
    id: number,
    price: number,
    title: string,
    image: string,
    onDelete: (id: number) => void,
    onEdit: () => void
}

export function Card({ id, price, image, title, onDelete, onEdit } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
            <div className="card-buttons">
                <button onClick={onEdit} className="btn-edit">Editar</button>
                <button onClick={() => onDelete(id)} className="btn-delete">Deletar</button>
            </div>
        </div>
    )
}