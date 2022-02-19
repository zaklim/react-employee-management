import React, { Component } from 'react';
import { Link } from "react-router-dom";

const HeaderComponent = () => {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to='/employees'>
                                <span className='text-muted navbar-brand'>Employee Management</span>
                            </Link>
                        </div>
                        <div>
                            <Link style={{ textDecoration: 'none' }} to="/add-employee">
                                <span className='text-muted navbar-brand'>Add Employee</span>
                            </Link>
                        </div>
                    </nav>
                </header>
            </div>
        );
}

export default HeaderComponent;