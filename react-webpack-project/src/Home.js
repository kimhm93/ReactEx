import React,{Component} from 'react';

//const Home = ({history}) => {
class Home extends Component{
    render() {
        return (
            <div>
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <h4>영화를 보고 싶다면</h4>
                            <h2>SCM!</h2>
                        </div>
                        <div className="col-lg-6">
                            <h2>감동을 주는 한 편의 영화가 </h2>
                            <h2>행복한 삶에 영감이 되듯이</h2>
                            <p>"가치를 지닌 문화 콘텐트를 함께 나누고 소통하는 공간을 창조하여" - <small>마스코트님</small></p>
                            <p>"더 행복한 세상을 만들어가겠습니다." - <small>나는 SMC</small></p>
                            <p><a className="btn btn-warning">자세히 보기</a></p>
                        </div>
                        <div className="col-lg-4">
                            <ul>
                                <li>시네마 천국 스리랑카점</li>
                                <li>시네마 천국 니카라과점</li>
                                <li>시네마 천국 세네갈점 </li>
                                <li>WHY WE DO IT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        <div className="row intro-img">
            <div className="col-lg-4">
                <div className="thumbnail">
                    <img  src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80529/80529_185.jpg" style={{width:"300px",height:"200px"}}/>
                        <div className="caption">
                            <h3>레디 플레이어 원</h3>
                            <p><a href="#">2045년, 암울한 현실과 달리 가상현실...</a></p>
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="thumbnail">
                    <img  src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80602/80602_185.jpg" style={{width:"300px",height:"200px"}}/>
                    <div className="caption">
                        <h3>바람 바람 바람</h3>
                        <p><a href="#">끝도 없이 사랑 받고 싶은 철부지 어른들이 온다!</a></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="thumbnail">
                    <img  src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80557/80557_185.jpg" style={{width:"300px",height:"200px"}}/>
                    <div className="caption">
                        <h3>곤지암</h3>
                        <p><a href="#">가지 말라는 곳에는 반드시 이유가 있다.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        );
    }
}

export default Home;