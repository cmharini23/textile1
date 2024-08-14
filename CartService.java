package com.example.demo.service;

import com.example.demo.model.Cart;
import com.example.demo.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public List<Cart> getAllCartItems() {
        return cartRepository.findAll();
    }

    public Cart addCartItem(Cart cart) {
        return cartRepository.save(cart);
    }

    public Cart updateCartItem(Cart cart) {
        if (cartRepository.existsById(cart.getId())) {
            return cartRepository.save(cart);
        } else {
            throw new RuntimeException("Cart not found for update");
        }
    }

    public void deleteCartItem(Long id) {
        cartRepository.deleteById(id);
    }

    public Optional<Cart> getCartItemById(Long id) {
        return cartRepository.findById(id);
    }
}
