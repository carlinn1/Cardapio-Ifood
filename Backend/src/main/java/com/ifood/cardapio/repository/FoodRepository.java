package com.ifood.cardapio.repository;

import com.ifood.cardapio.model.FoodModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<FoodModel, Long> {
}
