import React, {useState,useEffect} from "react";
import axios from "axios";
export default function Chef(props){
    const [chef,setChef]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3355/chef_data',{
            params:{
                page:page
            }
        }).then((res,req)=>{
            setChef(res.data);
        })
    })


    const html=chef.map((m)=>
        <table className={"table"}>
            <tr>
                <td width={"30%"} rowSpan={"2"} className={"text-center"}>
                    <img src={m.poster} width={"70"} height={"70"} className={"img-circle"}/>
                </td>
                <td colSpan={"4"}><h3 style={{"color":"orange"}}>{m.chef}</h3></td>
            </tr>
            <tr>
                <td className={"text-center"}>
                    <img src={"image/1.png"}/>{m.mem_cont1}
                </td>

                <td className={"text-center"}>
                    <img src={"image/3.png"}/>{m.mem_cont3}
                </td>

                <td className={"text-center"}>
                    <img src={"image/7.png"}/>{m.mem_cont7}
                </td>

                <td className={"text-center"}>
                    <img src={"image/2.png"}/>{m.mem_cont2}
                </td>

            </tr>
        </table>
    )

    const onPrev=()=>{
            setPage(page>1?page-1:page)
            axios.get('http://localhost:3355/chef_data',{
                params:{
                    page:page
                }.then((result)=>{
                    setPage(result.data)
                })
            })
    }

    return(
        <React.Fragment>
            <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
                <table className={"table"}>
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
            <div className={"row"} style={{"margin":"0px auto","width":"700px"}}>
                <button className={"btn btn-sm btn-primary"}>이전</button>
                    {page} page / {total} pages
                <button className={"btn btn-sm btn-primary"}>다음</button>
            </div>
        </React.Fragment>
    )
}