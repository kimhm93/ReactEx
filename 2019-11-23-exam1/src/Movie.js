import React, {Component} from "react";
import $ from 'jquery';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap';
/*
    생성
                => n
    constructor(props) <App n="aaa">

    componentWillMount() => 데이터를 받아와서 처리하는 곳.
    render() => 출력
    componentDidMount() => 이벤트 처리하는 부분.
 */
class Movie extends Component {
    // 생성자 => 변수선언 (state), 이벤트 등록
    constructor(props) {
        super(props);
        this.state={
            open:false,
            music:{}
        }
    }

    getData(m) {
        this.setState({open:true, music:m})
    }

    // onload와 같다. 가상 DOM에서 실제 DOM으로 올려주는 곳.
    componentDidMount() {

        //$('#keyword').keyup(()=>{
        $('#keyword').keyup(function(){
            var k = $(this).val();
            $('#user-table>tbody>tr').hide();
            var temp = $('#user-table>tbody>tr>td:nth-child(5n+4):contains("'+k+'")');
            var temp2 =  $('#user-table>tbody>tr>td:nth-child(5n+5):contains("'+k+'")');

            $(temp).parent().show();
            $(temp2).parent().show();
        });
    }

    // 가상 DOM으로 올라가는 것.
    render() {
        const html = this.props.music.map((m)=>
            <tr>
                <td><img src={m.poster} width={"35"} height={"35"}/></td>
                <td style={{"textAlign":"center"}}>{m.rank}</td>
                <td style={{"textAlign":"center"}}>
                    {m.state === '유지' && <span style={{"color":"gray"}}>-</span>}
                    {m.state === '상승' && <span style={{"color":"red"}}>▲ {m.id}</span>}
                    {m.state === '하강' && <span style={{"color":"blue"}}>▽ {m.id}</span>}
                </td>
                <td onClick={this.getData.bind(this,m)}>{m.title}</td>
                <td>{m.singer}</td>
            </tr>
        );

        return(
            <React.Fragment>
                <table className={"table"}>
                    <tr>
                        <td>
                            <input type={"text"} size={"30"} placeholder={"검색"} className={"input-sm"} id={"keyword"}/>
                        </td>
                    </tr>
                </table>
                <table className={"table table-hover"} id={"user-table"}>
                    <thead>
                        <tr className={"danger"}>
                            <th></th>
                            <th>순위</th>
                            <th>등폭</th>
                            <th>노래명</th>
                            <th>가수명</th>
                        </tr>
                    </thead>
                    <tbody>
                        {html}
                    </tbody>
                </table>
                <MusicModal open={this.state.open} music={this.state.music}/>
            </React.Fragment>
        )
    }
}

class MusicModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.open}>
                <ModalHeader>{this.props.music.title}</ModalHeader>
                <ModalBody>
                    <iframe src={"http://youtube.com/embed/"+this.props.music.key} width={"450"} height={"350"}></iframe>
                </ModalBody>
                <ModalFooter>
                    <Button color={"primary"}>확인</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default Movie;