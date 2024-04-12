import React, { Component } from 'react'

/**
 * 컴포넌트에 대한 생명 주기 (라이프사이클)에서 어떤 작업을 처리할 지 정할 수 있다.
 * - 컴포넌트를 처음으로 랜더링 할 때
 * - 컴포넌트를 업데이트 하기 전/후
 * - 컴포넌트가 사라질 때
 * 
 * 라이프사이클 메서드를 활용!
 * 1. Will 접두사: 어떤 작업을 작동하기 전에 실행되는 메서드
 * 2. Did 접두사: 어떤 작업을 작동한 후에 실행되는 메서드
 * 
 * 주요 컴포넌트 동작
 * 1. 마운트: 페이지에 컴포넌트가 나타남 (DOM을 생성하고 웹 브라우저 상에 표시되는 것)
 *      - constructor: 컴포넌트를 새로 만들 때마다 호출되는 생성자 메서드
 *      - getDerivedStateFromProps: pros 값을 state에 넣을 때 사용하는 메서드
 *      - render: 준비한 UI를 렌더링 하는 메서드 
 *      - componentDidMount: 컴포넌트가 웹 브라우저 상에 나타난 후에 호출되는 메서드
 * 2. 업데이트: 컴포넌트 정보를 업데이트 (변화를 감지한 후) - props가 바뀔 때, state가 바뀔 때, 부모 컴포넌트가 리렌더링 될 때, 강제 렌더링 트리거 할 때 업데이트
 *      - getDerivedStateFromProps: pros 값을 state에 넣을 때 사용하는 메서드
 *      - shouldComponentUpdate : 컴포넌트가 리렌더링을 할 지 말 지 결정해주는 메서드 (true / false)
 *      - render: 준비한 UI를 렌더링 하는 메서드
 *      - componentDidUpdate: 컴포넌트 업데이트 작업이 끝난 후에 호출하는 메서드
 * 3. 언마운트: 페이지에서 컴포넌트가 사라짐 (DOM에서 컴포넌트를 제거하는 것)
 *      - componentWillUnmount: 컴포넌트가 사라지기 전에 호출되는 메서드
 * 
 * 함수형 컴포넌트에서는...
 * 1. componentDidMount -> useEffect(콜백, []);
 * 2. componentDidUpdate -> useEffect(콜백); useEffect(콜백, [변수]);
 * 3. componentWillUnmount -> useEffect(콜백에 함수 리턴, []);
 * 4. shouldComponentUpdate -> React.memo
 * 5. getDerivedStateFromProps -> state
 */

export default class LifeCycle extends Component {
    state = {
        number: 0,
        numberColor: null
    };

    constructor(props){
        super(props)
        console.log("1. 컴포넌트 생성: 컴포넌트를 만들 때 처음으로 실행된다.");
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('props로 받아온 값을 state로 동기화합니다.');
        if (nextProps.color !== prevState.numberColor) {
            return { numberColor: nextProps.color }
        }
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.number % 10 === 3){
            console.log('끝자리 숫자가 3이면 리렌더링을 하지 않습니다.');
            return false
        }
        return true
    }
    componentDidMount() {
        console.log("3. 마운트: 컴포넌트가 웹 브라우저에 나타났다.");
    }
    componentDidUpdate() {
        console.log("3. 업데이트: 컴포넌트 업데이트 작업이 끝났습니다.");
    }
    componentWillUnmount() {
        console.log("4. 언마운트: 컴포넌트가 사라집니다.");
    }
    onClick = () => this.setState({number: this.state.number + 1})

    render() {
        console.log("2. 렌더: 렌더링이 진행된다.");
        const style = { color : this.props.color }

        return (
        <div>
            <h1 style={style}>number: {this.state.number}</h1>
            <p>numberColor: {this.state.numberColor}</p>
            <button onClick={this.onClick}>+ 1 더하기</button>
        </div>
        )
    }
}
