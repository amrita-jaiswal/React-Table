import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const heading = [
    {
        title: 'Power',
        head1: 'Watts',
        head2: 'VA',
        head3: 'VAR',
        head4: 'PF',
    }
]

export default class SimpleTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            dataPower: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/power`)
            .then((res) => {
                this.setState({ dataList: res.data, dataPower: res.data });
                console.log(this.state.dataList, 'ss')
            })
        axios.get(`http://localhost:3000/dataPower`)
            .then((res) => {
                this.setState({ dataPower: res.data });
                console.log(this.state.dataPower, 'aa')
            })
    }

    render() {
        return (
            <>
                <TableContainer style={{ width: 1000, height: 400, border: '1px solid black', emptyCells: 'hide' }} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow style={{border: '1px solid black'}}>
                                <TableCell style={{border: '1px solid black'}} >Basic</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">VLL</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">VLN&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">A&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">V Phase Angle&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">A Phase Angle&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">VTHD V&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">ATHD&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">K factor V&nbsp;</TableCell>
                                <TableCell style={{border: '1px solid black'}} align="right">K factor A&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.dataList.map(data => (
                                <TableRow key={data.title}>
                                    <TableCell style={{border: '1px solid black'}} component="th" scope="row">
                                        {data.title}
                                    </TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.vll}</TableCell>
                                    <TableCell  style={{border: '1px solid black'}}align="right">{data.vln}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.a}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.v_Phase_Angle}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.a_Phase_Angle}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right" >{data.vTHD_V}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.aTHD}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.k_Factor_V}</TableCell>
                                    <TableCell style={{border: '1px solid black'}} align="right">{data.k_Factor_A}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br />
                <br />

                <TableContainer style={{ width: 700, height: 270, border: '1px solid black' }} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            {heading.map(head => (

                                <TableRow>
                                    <TableCell style={{border: '1px solid black'}}>{head.title}</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{head.head1}</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{head.head2}&nbsp;</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{head.head3}&nbsp;</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{head.head4}&nbsp;</TableCell>
                                </TableRow>
                            ))}
                        </TableHead>

                        <TableBody style={{ border: '1px solid black' }}>
                            {this.state.dataPower.map(data => (
                                <TableRow key={data.title}>
                                    <TableCell style={{border: '1px solid black'}} component="th" scope="row">
                                        {data.title}
                                    </TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{data.watts}</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{data.va}</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{data.var}</TableCell>
                                    <TableCell align="right" style={{border: '1px solid black'}}>{data.pf}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/>
                <br/>
            </>
        );
    }
}
