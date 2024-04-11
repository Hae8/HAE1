import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
    }

    render() {
    let btnstyle = {
        width: "120px",
        height: "120px",
        margin: "10px",
        fontSize: "100px",
        backgroundColor: "salmon",
        color: "white",
        cursor: "pointer",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)"
    };
    const {number} = this.state

    return (
    <div>
        <h1 style={{fontSize: "120px"}}>{number}</h1>
        <button onClick={
            // 클래스형 컴포넌트에서 state 사용
            // state를 업데이트 하기 위해서는 setState를 사용한다.

            // 방법 1) this.setState 함수에 객체를 인자로 넣는다.
                // 여러번 호출해도 한번만 동작한다. (∵ 비동기로 작동)

                // () => {
                //     this.setState({number: number + 1})
                //     this.setState({number: number + 1})
                //     this.setState({number: number + 1})
                // }

            // 방법 2) this.serState 함수에 객체 대신 함수 자체를 인자로 넣는다.
            () => {
                this.setState((prevState) => { return { number: prevState.number + 1}})
                this.setState((prevState) => { return { number: prevState.number + 1}})
                this.setState((prevState) => { return { number: prevState.number + 1}})
            }
            } style={btnstyle}>+</button>

    </div>
    )
};
}
