package com.ifood.cardapio.dtos;

import com.ifood.cardapio.model.FoodModel;

public record FoodResponseDTO(Long id, String title, Integer price, String image) {

    public FoodResponseDTO(FoodModel foodModel){
        this(foodModel.getId(), foodModel.getTitle(), foodModel.getPrice(), foodModel.getImage());
    }
}
