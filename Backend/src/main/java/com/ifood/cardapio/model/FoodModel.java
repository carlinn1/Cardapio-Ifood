package com.ifood.cardapio.model;

import com.ifood.cardapio.dtos.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "food")
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class FoodModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        Long id;

        private String title;
        private String image;
        private Integer price;

        public FoodModel(FoodRequestDTO foodRequestDTO) {
            this.image = foodRequestDTO.image();
            this.title = foodRequestDTO.title();
            this.price = foodRequestDTO.price();

        }
}
