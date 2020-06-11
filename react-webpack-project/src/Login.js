import React,{Component} from 'react';
import axios from "axios"
/*
 <table class="table">
				<c:forEach var="vo" items="${mNews}" varStatus="i">
					<tr class="content_news" style="border:1.8px solid #CCCCCC" data-flag="0" data-count="${i.count}">
						<th class="text-left">${vo.title}</th>
						<th class="text-right">${vo.author}</th>
					</tr>

					<tr id="content_news_${i.count}" style="display:none; border:1.8px solid #CCCCCC" class="content_news_${i.count}" onclick="location.href='${vo.link}'">
						<td colspan="2" style="padding: 15px;">${vo.description}</td>
					</tr>
				</c:forEach>
			</table>
 */
//const Login = () => {
class Login extends  Component{
    constructor (props) {
        console.log("aaa");
        super(props)
        this.state = {
            items: [],
            fd:'영화'
        }
    }

    findChanged (e) {
        this.setState({fd: e.target.value})
        console.log(e.target.value);
        //alert(e.target.value)
    }
    // 컴포넌트가 마운트되면 로그를 읽어 들입니다.
    componentWillMount()
    {
        this.post();
    }
    post (e) {

        axios.get('/news1', {
            params: {
                fd: this.state.fd
            }
        }).then(res => {
                this.setState({ items: res.data });
                console.log(this.state.items);
            });
    }

    render () {

        const itemsHtml = this.state.items.map(e => (
               <table className="table table-hover">
                    <tr className="content_news" style={{border:"1.8px solid #CCCCCC"}}>
                        <th className="text-left" style={{color:"green"}}>{e.title}({e.author})</th>
                    </tr>
                    <tr style={{border:"1.8px solid #CCCCCC"}}>
                        <td style={{padding: "15px"}}>{e.description}</td>
                    </tr>
             </table>
        ));
        return (
            <div>
                <table className="table">
                    <tr>
                        <td>
                           <input type="text" size="30" style={{color:"black"}} value={this.state.fd}
                                  onChange={e => this.findChanged(e)}/>
                               <input type="button" className={"btn btn-success btn-sm"} value={"검색"} onClick={e => this.post()}/>
                        </td>
                    </tr>
                </table>
                <table class="table">
                  {itemsHtml}
                </table>
            </div>
        )
    }
}

export default Login;