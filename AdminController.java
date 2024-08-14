package com.example.demo.controller;

import com.example.demo.model.Cart; // Updated import
import com.example.demo.service.CartService; // Updated import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private CartService cartService; // Updated service

    // Fetch all cart items for admin view
    @GetMapping("/cart")
    public ResponseEntity<List<Cart>> getWholeCart() {
        try {
            List<Cart> cartItems = cartService.getAllCartItems();
            return new ResponseEntity<>(cartItems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Add a new cart item
    @PostMapping("/wholeCart")
    public ResponseEntity<Cart> addCartItem(@RequestBody Cart cart) {
        try {
            Cart addedCartItem = cartService.addCartItem(cart); // Correct method name
            return new ResponseEntity<>(addedCartItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Update an existing cart item
    @PutMapping("/cart/{id}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long id, @RequestBody Cart cart) {
        try {
            Optional<Cart> existingCartItem = cartService.getCartItemById(id);
            if (existingCartItem.isPresent()) {
                cart.setId(id);  // Set the ID to match the item to update
                Cart updatedCartItem = cartService.updateCartItem(cart); // Ensure updateCartItem is correct
                return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Delete a cart item by ID
    @DeleteMapping("/cart/{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long id) {
        try {
            Optional<Cart> existingCartItem = cartService.getCartItemById(id);
            if (existingCartItem.isPresent()) {
                cartService.deleteCartItem(id);
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}




