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
class Posts extends  Component{
    constructor (props) {
        console.log("aaa");
        super(props)
        this.state = {
            items: [],
            fd:'영화'
        }
    }

    componentWillMount()
    {
        this.post();
    }
    post (e) {

        var that = this;
        var url = 'http://211.238.142.8:8080/ReactWeekExample/movie/test.jsp'

        fetch(url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
               console.log(data)
            });
    }

    render () {

        return (
            <div>
                Hello
            </div>
        )
    }
}

export default Posts;