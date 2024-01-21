// models/Book.js

import {db}from '../../database.js'; // Adjust the path according to your project structure

class Book {
    static async findAll() {
        // Fetch all books from the database
        const rows = await db.all(`SELECT * FROM books`);
        return rows;
    }

    static async findById(id:any) {
        // Fetch a single book by id from the database
        const row = await db.get(`SELECT * FROM books WHERE id = ?`, [id]);
        return row;
    }

    static async findByAuthorId(author_id:any) {
        // Fetch all books by author id from the database
        const rows = await db.all(`SELECT * FROM books WHERE author_id = ?`, [author_id]);
        return rows;
    }

    static async findByPubYear(pub_year:any) {
        // Fetch all books by publication year from the database
        const rows = await db.all(`SELECT * FROM books WHERE pub_year >= ?`, [pub_year]);
        return rows;
    }

    static async findByGenre(genre:any) {
        // Fetch all books by genre from the database
        const rows = await db.all(`SELECT * FROM books WHERE genre = ?`, [genre]);
        return rows;
    }

    static async create(data:any) {
        // Create a new book in the database
        const result = await db.run(`INSERT INTO books (author_id, title, pub_year, genre) VALUES (?, ?, ?, ?)`, [data.author_id, data.title, data.pub_year, data.genre]);
        return result;
    }

    static async update(id:any, data:any) {
        // Update an existing book in the database
        const result = await db.run(`UPDATE books SET author_id = ?, title = ?, pub_year = ?, genre = ? WHERE id = ?`, [data.author_id, data.title, data.pub_year, data.genre, id]);
        return result;
    }

    static async delete(id:any) {
        // Delete a book from the database
        const result = await db.run(`DELETE FROM books WHERE id = ?`, [id]);
        return result;
    }
}

module.exports = Book;
