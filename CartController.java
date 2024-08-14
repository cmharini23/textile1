package com.example.demo.controller;

import com.example.demo.model.Cart;
import com.example.demo.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService; // Autowire the service, not the model

    // Fetch all cart items
    @GetMapping
    public ResponseEntity<List<Cart>> getAllCartItems() {
        try {
            List<Cart> cartItems = cartService.getAllCartItems(); // Call instance method
            return new ResponseEntity<>(cartItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Add a new cart item
    @PostMapping
    public ResponseEntity<?> addCartItems(@RequestBody List<Cart> cartItems) {
        try {
            for (Cart cartItem : cartItems) {
                cartService.addCartItem(cartItem); // Save each cart item
            }
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    

    // Update an existing cart item
    @PutMapping("/{id}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long id, @RequestBody Cart cartItem) {
        try {
            Optional<Cart> existingCartItem = cartService.getCartItemById(id); // Check if item exists
            if (existingCartItem.isPresent()) {
                cartItem.setId(id); // Set the ID to match the item to update
                Cart updatedCartItem = cartService.updateCartItem(cartItem); // Call instance method
                return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete a cart item by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long id) {
        try {
            Optional<Cart> existingCartItem = cartService.getCartItemById(id); // Check if item exists
            if (existingCartItem.isPresent()) {
                cartService.deleteCartItem(id); // Call instance method
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
