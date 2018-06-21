import React, {Component} from 'react';
import { Wrapper, Number, Submit, Title, SubmitDisabled,Wip,Dropable, DragItHere } from './styles';
import axios from 'axios';

export default class BetField extends Component{

    state = {
        tasks:[
            {name: 1, category: "wip" },
            {name: 2, category: "wip" },
            {name: 3, category: "wip" },
            {name: 4, category: "wip" },
            {name: 5, category: "wip" },
            {name: 6, category: "wip" },
            {name: 7, category: "wip" },
            {name: 8, category: "wip" },
            {name: 9, category: "wip" },
            {name: 10, category: "wip" },
            {name: 11, category: "wip" },
            {name: 12, category: "wip" },
            {name: 13, category: "wip" },
            {name: 14, category: "wip" },
            {name: 15, category: "wip" },
            {name: 16, category: "wip" },
            {name: 17, category: "wip" },
            {name: 18, category: "wip" },
            {name: 19, category: "wip" },
            {name: 20, category: "wip" },
            {name: 21, category: "wip" },
            {name: 22, category: "wip" },
            {name: 23, category: "wip" },
            {name: 24, category: "wip" },
            {name: 25, category: "wip" },
            {name: 26, category: "wip" },
            {name: 27, category: "wip" },
            {name: 28, category: "wip" },
            {name: 29, category: "wip" },
            {name: 30, category: "wip" },
            {name: 31, category: "wip" },
            {name: 32, category: "wip" },
            {name: 33, category: "wip" },
            {name: 34, category: "wip" },
            {name: 35, category: "wip" }
        ],
        userData: []
    }

    componentWillMount(){
        this.getUserData();
    }

    componentDidMount(){
        console.log(this.state.userData.login);
    }

    getUserData = () => {
        this.setState({
            userData: JSON.parse(localStorage.getItem('user'))
        })
    }

    createNewBet = async() => {
        const form = {
            bet1: localStorage.getItem('ball0'),
            bet2: localStorage.getItem('ball1'),
            bet3: localStorage.getItem('ball2'),
            bet4: localStorage.getItem('ball3'),
            bet5: localStorage.getItem('ball4'),
            login: this.state.userData.login,
            token: this.state.userData.token
        };


        try {
          const response = await axios({
            method: "post",
            url: "/bets/new",
            data: form,
            config: { headers: { "Content-Type": "aplication/json" } }
          });

            alert('New Bet Successfully Added!');
            window.location.reload();

          console.log(response.data);
        } catch (err) {
            alert("Something went wrong. Try again.");
            window.location.reload();
        }
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDrop = (e, cat) => {
        let id = e.dataTransfer.getData('id');
        let tasks = this.state.tasks.filter((task)=>{
            if(task.name == id){
                task.category = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render(){

        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <Number
                    key={t.name}
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    >
                    {t.name}
                </Number>
            );
        });

        if(tasks.complete.length === 0){

            return(
                <Wrapper>
                    <Title>New Bet</Title>
                    <Wip
                        onDrop = {(e) => {this.onDrop(e, "wip")}}
                        onDragOver = {(e) => this.onDragOver(e)}>
                        {tasks.wip}
                    </Wip>
    
                    <Dropable
                        disabled
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "complete")}>
                        <DragItHere>Drag Numbers Here</DragItHere>

                        {tasks.complete}
                        
                    </Dropable>
                    <SubmitDisabled 
                        type='submit'
                        value='submit'/>
    
                </Wrapper>
            )
        }

        if(tasks.complete.length === 5){
            for (let index = 0; index < tasks.complete.length; index++) {
                localStorage.setItem("ball"+index, tasks.complete[index].key);
            }

            return(
                <Wrapper>
                    <Title>New Bet</Title>
                    <Wip
                        onDrop = {(e) => {this.onDrop(e, "wip")}}
                        onDragOver = {(e) => this.onDragOver(e)}>
                        {tasks.wip}
                    </Wip>
    
                    <Dropable style={{border:0, width:'100%'}}>
                        {tasks.complete}
                        <hr
                            style={{
                                width: "100%",
                                position: "relative",
                                bottom: 55,
                                zIndex: 0,
                                border: 0,
                                borderBottom: '3px solid #D47A0F'
                                }}/>
                    </Dropable>
                    <Submit onClick={this.createNewBet}
                        type='submit'
                        value='submit'/>
    
                </Wrapper>
            )
            
        }
            return(
                <Wrapper>
                    <Title>New Bet</Title>
                    <Wip
                        onDrop = {(e) => {this.onDrop(e, "wip")}}
                        onDragOver = {(e) => this.onDragOver(e)}>
                        {tasks.wip}
                    </Wip>
    
                    <Dropable
                        disabled
                        onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e, "complete")}>

                        {tasks.complete}
                        <hr
                            style={{
                                width: "100%",
                                position: "relative",
                                bottom: 55,
                                zIndex: 0,
                                border: 0,
                                borderBottom: '3px solid #D47A0F'
                                }}/>
                    </Dropable>
                    <SubmitDisabled 
                        type='submit'
                        value='submit'/>
    
                </Wrapper>
            )

    }
}

