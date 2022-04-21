import React from 'react';

const RecordsList = ({allTableRecords}) => {

    if (!allTableRecords.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Тут нет ни одной записис!
            </h1>
        )
    }
    console.log (allTableRecords)

    return (
        <div>
            <h1>
                {allTableRecords.map (record => (<tr><td>{ allTableRecords.title }</td> <td>{ allTableRecords.date }</td> <td>{ allTableRecords.number }</td> <td>{ recallTableRecordsord.distance }</td></tr>))}
            </h1>
        </div>
        
    )
}
export default RecordsList
// {/* <td>{ allTableRecords.title }</td> <td>{ allTableRecords.date }</td> <td>{ allTableRecords.number }</td> <td>{ recallTableRecordsord.distance }</td> */}