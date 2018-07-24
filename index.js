import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:[moment().subtract(10, 'days'),moment()]
        }
    }

    onChange=(value)=>{
        this.setState({
            value
        })
    }
    onOk=()=>{
        console.log('helllo');
    }
    render(){
        const {value} = this.state;
        return <RangePicker
                  value = {value}
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
                  onChange={this.onChange}
                  onOk={this.onOk}
                />

    }

}

ReactDOM.render(<App />, document.getElementById('root'));
