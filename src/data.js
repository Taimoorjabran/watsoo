import React, { Component } from 'react';
import axios from 'axios';
import DateSelector from './components/datePicker';
import DataCard from './components/cards';


class Data extends Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        const body = {
            "clientId": 10,
            "dataRecord": {
              "userRoleId": 4,
              "userRoleName": "COMPANY",
              "userId": 10
            },
            "fromDate": 1577888571659,
            "toDate": 1593613371659,
            "tripId": 36
          };
        const url = 'http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36';  
        axios.post(url, body).then(res => {this.setState({
            data: res.data.data
           });
           console.log(res);
        });     
    }


    render() {
        console.log(this.state.data);
        return  (
            <div>
                <div style={{display: 'flex', position: 'absolute', right: '25px'}}>
                    <DateSelector />
                    <DateSelector />
                </div>
                <div>
                    <DataCard />
                </div>
            </div>
        )
    }
}

export default Data;