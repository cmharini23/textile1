import React, { useState, useEffect } from 'react';
import './SchemeManagement.css';

const SchemeManagement = () => {
    const [schemes, setSchemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newScheme, setNewScheme] = useState({
        name: '',
        description: '',
        category: '',
        gender: '',
        ageRange: '',
        caste: '',
        residence: '',
        differentlyAbled: '',
        bplStatus: '',
        employmentStatus: ''
    });
    const [editingScheme, setEditingScheme] = useState(null);

    const apiBaseUrl = 'http://localhost:8080/api/schemes';

    useEffect(() => {
        fetchSchemes();
    }, []);

    const fetchSchemes = async () => {
        try {
            const response = await fetch(apiBaseUrl);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            setSchemes(data);
        } catch (error) {
            console.error('Error fetching schemes:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editingScheme) {
            setEditingScheme({ ...editingScheme, [name]: value });
        } else {
            setNewScheme({ ...newScheme, [name]: value });
        }
    };

    const handleCreateScheme = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(apiBaseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newScheme),
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const createdScheme = await response.json();
            setSchemes([...schemes, createdScheme]);
            setNewScheme({
                name: '',
                description: '',
                category: '',
                gender: '',
                ageRange: '',
                caste: '',
                residence: '',
                differentlyAbled: '',
                bplStatus: '',
                employmentStatus: ''
            });
        } catch (error) {
            console.error('Error creating scheme:', error);
            setError(error);
        }
    };

    const handleEditScheme = (scheme) => {
        setEditingScheme({ ...scheme });
    };

    const handleUpdateScheme = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiBaseUrl}/${editingScheme.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingScheme),
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const updatedScheme = await response.json();
            setSchemes(schemes.map((scheme) =>
                scheme.id === updatedScheme.id ? updatedScheme : scheme
            ));
            setEditingScheme(null);
        } catch (error) {
            console.error('Error updating scheme:', error);
            setError(error);
        }
    };

    const handleDeleteScheme = async (id) => {
        try {
            const response = await fetch(`${apiBaseUrl}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            setSchemes(schemes.filter((scheme) => scheme.id !== id));
        } catch (error) {
            console.error('Error deleting scheme:', error);
            setError(error);
        }
    };

    return (
        <div className="scheme-management">
            <h1>Scheme Management</h1>
            <form onSubmit={editingScheme ? handleUpdateScheme : handleCreateScheme}>
                <input
                    type="text"
                    name="name"
                    value={editingScheme ? editingScheme.name : newScheme.name}
                    onChange={handleInputChange}
                    placeholder="Scheme Name"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={editingScheme ? editingScheme.description : newScheme.description}
                    onChange={handleInputChange}
                    placeholder="Scheme Description"
                    required
                />
                
                {/* Category Dropdown */}
                <select
                    name="category"
                    value={editingScheme ? editingScheme.category : newScheme.category}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Category</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Agriculture">Agriculture</option>
                    {/* Add more categories as needed */}
                </select>

                {/* Gender Dropdown */}
                <select
                    name="gender"
                    value={editingScheme ? editingScheme.gender : newScheme.gender}
                    onChange={handleInputChange}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                {/* Age Range Dropdown */}
                <select
                    name="ageRange"
                    value={editingScheme ? editingScheme.ageRange : newScheme.ageRange}
                    onChange={handleInputChange}
                >
                    <option value="">Select Age Range</option>
                    <option value="0-18">0-18</option>
                    <option value="19-35">19-35</option>
                    <option value="36-60">36-60</option>
                    <option value="60+">60+</option>
                </select>

                {/* Caste Dropdown */}
                <select
                    name="caste"
                    value={editingScheme ? editingScheme.caste : newScheme.caste}
                    onChange={handleInputChange}
                >
                    <option value="">Select Caste</option>
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC/ST">SC/ST</option>
                    {/* Add more caste categories as needed */}
                </select>

                {/* Residence Dropdown */}
                <select
                    name="residence"
                    value={editingScheme ? editingScheme.residence : newScheme.residence}
                    onChange={handleInputChange}
                >
                    <option value="">Select Residence</option>
                    <option value="Urban">Urban</option>
                    <option value="Rural">Rural</option>
                    <option value="Semi-Urban">Semi-Urban</option>
                </select>

                {/* Differently Abled Dropdown */}
                <select
                    name="differentlyAbled"
                    value={editingScheme ? editingScheme.differentlyAbled : newScheme.differentlyAbled}
                    onChange={handleInputChange}
                >
                    <option value="">Select Differently Abled Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* BPL Status Dropdown */}
                <select
                    name="bplStatus"
                    value={editingScheme ? editingScheme.bplStatus : newScheme.bplStatus}
                    onChange={handleInputChange}
                >
                    <option value="">Select BPL Status</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Employment Status Dropdown */}
                <select
                    name="employmentStatus"
                    value={editingScheme ? editingScheme.employmentStatus : newScheme.employmentStatus}
                    onChange={handleInputChange}
                >
                    <option value="">Select Employment Status</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Self-Employed">Self-Employed</option>
                </select>

                <button type="submit">{editingScheme ? 'Update Scheme' : 'Create Scheme'}</button>
            </form>

            {loading && <p>Loading schemes...</p>}
            {error && <p>Error: {error.message}</p>}
            {schemes.length > 0 ? (
                <ul>
                    {schemes.map((scheme) => (
                        <li key={scheme.id}>
                            <h2>{scheme.name}</h2>
                            <p>{scheme.description}</p>
                            <p>Category: {scheme.category}</p>
                            <p>Gender: {scheme.gender}</p>
                            <p>Age Range: {scheme.ageRange}</p>
                            <p>Caste: {scheme.caste}</p>
                            <p>Residence: {scheme.residence}</p>
                            <p>Differently Abled: {scheme.differentlyAbled}</p>
                            <p>BPL Status: {scheme.bplStatus}</p>
                            <p>Employment Status: {scheme.employmentStatus}</p>
                            <button onClick={() => handleEditScheme(scheme)}>Edit</button>
                            <button onClick={() => handleDeleteScheme(scheme.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No schemes available.</p>
            )}
        </div>
    );
};

export default SchemeManagement;