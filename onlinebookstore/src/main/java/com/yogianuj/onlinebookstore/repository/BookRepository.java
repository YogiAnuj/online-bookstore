package com.yogianuj.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.yogianuj.onlinebookstore.entity.Book;

@RepositoryRestResource(collectionResourceRel="book", path="book")
public interface BookRepository extends JpaRepository<Book, Long>{

}
