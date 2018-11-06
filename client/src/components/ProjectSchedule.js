import React, { Component}  from 'react';
import Logoimg from "./superscript.JPG";
import Chart from './Chart'
import Table from './Table'

class ProjectSchedule extends Component{
    constructor(props) {

        super(props);
        this.state = {

            values: [],
            showCharts: false,
            showTable: false,
            chartData: {}

        }
    }
    componentDidMount() {

        fetch('http://localhost:5000/api/items')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(res => {
                this.setState({values: res});
                console.log("state", this.state.values)

            })
            .catch(error => console.log(error))

    }

    componentDidMount() {

        fetch('http://localhost:5000/api/items')
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(res => {
                this.setState({values: res});
                console.log("state", this.state.values)

            })
            .catch(error => console.log(error))

    }

    componentWillMount() {
        this.getChartData();
    }



    onClicked(e) {

        e.preventDefault();
        this.setState({showReply: !this.state.showReply})

    }

    onClickTable(e) {

        e.preventDefault();
        this.setState({showTable: !this.state.showTable})

    }

    getChartData() {

        this.setState({
            chartData: {
                labels: ['2010', '2011', '2012', '2013'],
                datasets: [
                    {
                        label: 'Total Vs Incomplete Stores Trend',
                        data: [
                            16,
                            17,
                            18,
                            19,

                        ],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(54, 162, 235, 0.6)',


                        ]
                    }
                ]
            }
        });
    }

    render() {

        const { values } = this.state;

        return (
            <div className="aligndiv">
                <div class="card" onClick={this.onClicked.bind(this)}>
                    <h2>Project Schedule<sup onClick={this.onSubmit}><img src={Logoimg}></img></sup></h2>
                    <div className="left"><p className="title">Total</p>
                        <p className="size"><b>
                            {values.map(value => (

                                <p>{value.quantity11+"%"}</p>

                            ))}
                        </b></p></div>
                    <div className="right"><p className="title">PSViz</p>
                        <p className="size"><b>

                            {values.map(value => (

                                <p>{value.quantity12+"%"}</p>

                            ))}
                        </b></p>
                    </div>
                    <hr className="new">
                    </hr>
                    <div className="left">
                        <p className="title">Completed</p>
                        <p className="title">
                            {values.map(value => (

                                <p>{value.quantity13}</p>

                            ))}
                        </p>
                        <p className="title">Incomplete</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity14}</p>

                            ))}

                        </p></div>
                    <div className="right"><p className="title">Total</p>
                        <p className="title">

                            {values.map(value => (

                                <p>{value.quantity15}</p>
                            ))}
                        </p></div>
                </div>

                <div onClick={this.onClickTable.bind(this)}>
                    {this.state.showReply &&
                    <Chart chartData={this.state.chartData} location="Total vs Incomplete Store Trend" legendPosition="bottom"/>}
                </div>
                {this.state.showTable &&
                <Table/>}

                </div>


        )
    }

}

export default ProjectSchedule;
