import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

const shuffle = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const getNumbers = (from: number, to: number) => {
    const array = Array.from(Array(15).keys()).map(x => x + 1);
    shuffle(array);
    return array;
};


const getColumn = (numb: number) => {
    return <Col xs={1}>  <div style={columnStyle} > {numb}</div></Col>
};

const groupColumns = (list: JSX.Element[], size: number) => {
    return list.map((_, index, array) => {
        if (!(index % size)) return array.slice(index, index + size)
        return [];
    });
};

const getRow = (columns: (JSX.Element[] | undefined)) => {
    return <Row center="xs" style={{ marginTop: 10 }}> {columns} </Row>
};

const getPlayingField = () => {
    const columns =
        getNumbers(1, 15)
            .map(x => getColumn(x));

    return groupColumns(columns, 3).map(getRow)
}

const Puzzle: React.FC = () => {
    return (
        <>
            {getPlayingField()}
        </>
    )
}

const columnStyle = {
    backgroundColor: 'red',
    color: 'white',
    height: 90,
    width: 100,
    boxShadow: '5px 10px #888888'
}

export default Puzzle
