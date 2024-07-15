import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate('/home');
        } else {
            setError('Login failed');
        }
    };

    return (
        <div className="col-lg-6 mx-auto">
            <h2>Login</h2>
            {error && <p className="alert alert-danger">{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button type="submit" className='btn-primary form-control'>Login</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LoginForm;
