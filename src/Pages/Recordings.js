import Grid from './grid-small.svg';
import Table from './table.svg';

import React from 'react'
import SearchBar from '../Components/SearchBar'
import './Recordings.css';

import Chip from '@mui/material/Chip';

import { Outlet, Link } from 'react-router-dom';

const Recordings = () => {


    return (
        <div className="recordingsPage">
            <div className="header">
                <h1>Recordings</h1>
                <p><Link to='/'>Back to home</Link></p>
            </div>
            <div className="searchSection">
                <SearchBar/>
                <div className="searchFilter">
                    <p>Filter by</p>
                    <div className="filterOptions">
                        <div className="filterLabels">
                            <Chip label="Title" variant="outlined" />
                            <Chip label="Date" variant="outlined" />
                            <Chip label="Length < 30min" variant="outlined" />
                            <Chip label="Length < 1 hour" variant="outlined" />
                        </div>

                        <Chip variant="outlined">
                            <Grid/>
                            <Table/>
                        </Chip>
                    </div>
                </div>
            </div>
            <div className='videoLayout grid'>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
                <div>
                    <div>placeholder</div>
                    <span>Lorem ipsom</span>
                    <span>00:00</span>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Recordings