import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { EditModal } from './components/edit-modal/edit-modal';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';

function App() {
  const { data } = useFoodData();
  const { mutate: deleteFood } = useFoodDataDelete();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<FoodData | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleOpenEditModal = (food: FoodData) => {
    setSelectedFood(food);
    setIsEditModalOpen(true);
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedFood(null);
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      deleteFood(id);
    }
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData: FoodData) => 
          <Card
            key={foodData.id}
            id={foodData.id!}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            onDelete={handleDelete}
            onEdit={() => handleOpenEditModal(foodData)}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      {isEditModalOpen && selectedFood && <EditModal closeModal={handleCloseEditModal} foodData={selectedFood}/>}
      <button className="btn-new" onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
