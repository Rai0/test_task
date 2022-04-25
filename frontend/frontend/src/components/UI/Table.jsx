import React from 'react';

const RecordsList = ({allTableRecords}) => {

    if (!allTableRecords.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Тут нет ни одной записис!
            </h1>
        )
    }

    return (
        <tbody>
            {allTableRecords.map (record => (<tr><td>{ record.title }</td> <td>{ record.date }</td> <td>{ record.number }</td> <td>{ record.distance }</td></tr>))}
        </tbody>
    )
}
export default RecordsList
