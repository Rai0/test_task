import React, { Component } from 'react';

import axios from 'axios';

class GetData extends Component {
    state = {
        records: [],
    }

    constructor () {
        super ();
        axios.get (`http://127.0.0.1:8000/api/table?format=json`).then (res => {this.setState ({ records: res.data })})
    }
    
    render (){
        return (
            
            <div className= 'table__wrapper'>
                <table class="table">
                    <tr>
                        <td scope="col">Название</td>
                        <td scope="col">Дата</td>
                        <td scope="col">Количество</td>
                        <td scope="col">Расстояние</td>
                    </tr>
                    {this.state.records.map (record => (<tr><td>{ record.title }</td> <td>{ record.date }</td> <td>{ record.number }</td> <td>{ record.distance }</td></tr>))}
                </table>
            </div>
        );
    }
}

export default GetData;