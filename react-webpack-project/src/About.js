import React from 'react'
import axios from "axios"

class About extends React.Component{
    constructor (props) {
        console.log("aaa");
        super(props)
        this.state = {
            items: [],
            page:1
        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);

    }
    handlePrev() {
            alert("prev:"+this.state.page);
            this.setState({page: this.state.page - 1});
            this.loadData();
            alert("prev:"+this.state.page);
            console.log(this.state.page);
            this.render();


    }
    handleNext() {

            this.setState({page: this.state.page + 1});
            this.loadData();
            console.log(this.state.page);
            this.render();

    }
    componentWillMount (){
        console.log("bbb");

       var _this=this;
        axios.get('/movie1', {
            params: {
                id: this.state.page
            }
        }).then(res => {
              _this.setState({ items: res.data });
              console.log(this.state.items);
          });
        /*$.ajax({
            url: '/api/getItems',
            data: { mno: 1 }
           })
            .done((data) => {
                this.setState({ items: data });
            })
            .fail(() => {
                console.err("error");
            });*/
        /*axios({
             method: 'get',
             url: '/api/getItems',
             params: {
                 id: 1
             }
         }).then(function (response) {
            this.setState({ items: data });
             })
             .catch(function (error) {
                 console.log(error);
             })*/
       /* var _this=this;

        request
            .get('/movie/list')
            .end((err, data) => {
                /!*if (err) {
                    console.log(err)
                    return
                }*!/
                console.log(data);
                _this.setState({items: data.body});
            })*/
        /*axios.get('/movie/list')

            .then(function (response) {
                //console.log(response);
                _this.setState({ items: response.data });
            })
            .catch(function (error) {
            });*/
    }
   /* componentWillUnmount()
    {
        this.rs.abort();
    }*/
   loadData()
   {
       console.log("bbb");

       var _this=this;
       axios.get('/movie1', {
           params: {
               id: this.state.page
           }
       }).then(res => {
           _this.setState({ items: res.data });
           console.log(this.state.items);
       });
   }
    render()
    {
        console.log("ccc");

        const html=this.state.items.map(e => (
            <div className="qitem">
                <img src={e.poster} width="320" height="180"/>
                <span className="caption">
			    <h4>{e.title }</h4>
			    <p>{e.director }<br/>{e.actor}</p>
		       </span>
            </div>
        ));
        return (
            <div>
                {html}
                <input type="button" className="btn btn-sm btn-primary" value="이전" onClick={this.handlePrev}/>
                <input type="button" className="btn btn-sm btn-primary" value="다음" onClick={this.handleNext}/>
            </div>
        )
    }
}

export default About;