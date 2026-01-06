package com.ifood.cardapio.controller;

import com.ifood.cardapio.dtos.FoodRequestDTO;
import com.ifood.cardapio.dtos.FoodResponseDTO;
import com.ifood.cardapio.model.FoodModel;
import com.ifood.cardapio.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foods")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void salveFood(@RequestBody FoodRequestDTO foodRequestDTO) {
        FoodModel foodModel = new FoodModel(foodRequestDTO);
        foodRepository.save(foodModel);
        return;

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<FoodResponseDTO> getAllFood() {
        return foodRepository.findAll()
                .stream()
                .map(FoodResponseDTO::new)
                .toList();
    }

}


