import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        title : "",
        author : "",
        description : "",
        coverImage : ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Book Added: ", formData);
        navigate("/");
    };
    return (
        <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Cover Image URL:</label>
        <input type="url" name="coverImage" value={formData.coverImage} onChange={handleChange} required />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    );
};

export default AddBook;