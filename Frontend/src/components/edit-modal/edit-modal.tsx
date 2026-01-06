import { useEffect, useState } from "react";
import { useFoodDataUpdate } from "../../hooks/useFoodDataUpdate";
import { FoodData } from "../../interface/FoodData";

import "../create-modal/modal.css";

interface EditModalProps {
    closeModal(): void;
    foodData: FoodData;
}

export function EditModal({ closeModal, foodData }: EditModalProps){
    const [title, setTitle] = useState(foodData.title);
    const [price, setPrice] = useState(foodData.price);
    const [image, setImage] = useState(foodData.image);
    const { mutate, isSuccess } = useFoodDataUpdate();

    const submit = () => {
        const updatedFood: FoodData = {
            title,
            price,
            image
        }
        mutate({ id: foodData.id!, data: updatedFood })
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Editar um item no cardápio</h2>
                <form className="input-container">
                    <input value={title} onChange={event => setTitle(event.target.value)} placeholder="título"/>
                    <input value={price} onChange={event => setPrice(Number(event.target.value))} placeholder="preço"/>
                    <input value={image} onChange={event => setImage(event.target.value)} placeholder="url da imagem"/>
                </form>
                <div className="btn-container">
                    <button onClick={submit} className="btn-secondary">Salvar</button>
                    <button onClick={closeModal} className="btn-cancel">Cancelar</button>
                </div>
            </div>
        </div>
    )
}
