import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import NovaSala from '../pages/novasala.js';
import Index from '../pages/index.js';
import ListarSalas from '../pages/listarsalas.js';

export default function RouterApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/novasala' element={<NovaSala/>}/>
            <Route path='/listarsalas' element={<ListarSalas/>}/>
        </Routes>
        </BrowserRouter>
    )
}
