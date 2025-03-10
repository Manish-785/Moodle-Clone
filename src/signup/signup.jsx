import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        email_id: "",
        password: "",
        username: "",
        first_name: "",
        last_name: "",
        authority: null // Adding authority as per backend
    });
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  
        setLoading(true);  
    
        const apiUrl = 'http://127.0.0.1:8000/login/register/';

        const requestData = {
            email_id: formData.email_id,  
            password: formData.password,
            username: formData.username,
            first_name: formData.first_name,
            last_name: formData.last_name,
            authority: formData.authority   
        };

        console.log("Sending data:", requestData);  
    
        try {

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  

                    "Accept": "application/json",  
                },
                body: JSON.stringify(requestData)  

            });
    
            console.log("Response received:", response);
            console.log("Response status:", response.status);
    
            let responseData;
            try {
                responseData = await response.json();
                console.log("Response data:", responseData);

            } catch (jsonError) {
                console.log("Failed to parse JSON response:", jsonError);
                const textResponse = await response.text();  

                console.log("Raw response text:", textResponse);
                throw new Error("Invalid response from server");
            }
    
            if (!response.ok) {
                let errorMessage = "Signup failed";  

                if (responseData) {
                    
                    if (typeof responseData === 'object') {
                        errorMessage = responseData.error ||
                                        responseData.message ||
                                        responseData.detail ||
                                        Object.values(responseData).flat().join(', ') ||
                                        "Signup failed";
                    } else {
                        
                        errorMessage = responseData;
                    }
                }
    
                throw new Error(errorMessage);
            }
    
            setFormData({
                email_id: "",
                password: "",
                username: "",
                first_name: "",
                last_name: "",
                });
    
            alert("Signup successful!");
    
        } catch (err) {
            console.error("Full error details:", err);
            setError(err.message || "Failed to connect to the server. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div id="main-container">
            <div id="container">
                <div id="left-box" className="box">
                    <h2>WELCOME</h2>
                    <h2>TO</h2>
                    <h2>IIT BOMBAY</h2>
                    <h2>MOODLE</h2>
                </div>

                <form onSubmit={handleSubmit} id="right-box" className="box">
                    <input 
                        type="email"
                        name="email_id"
                        className="form-input"
                        placeholder="Email"
                        value={formData.email_id}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="first_name"
                        className="form-input"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        className="form-input"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                    <button 
                        id="signup-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>

            <div id="footer">
                <a href="#" className="footer-a">Help and Support</a>
                <a href="#" className="footer-a">Contact Us</a>
            </div>
        </div>
    );
};

export default Signup;