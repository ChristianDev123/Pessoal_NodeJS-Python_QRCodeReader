import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "./styles";

export default function TablePatrimony(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3500/Laboratorio/1',{headers:{
            "x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0NDU0NjI3LCJleHAiOjE2NjQ0NTgyMjd9.XnzIyifqxIlOlaRPbs9P5-ycdwyEFcC_oIxN8aXMP3c"
        }
    })
        .then(({data})=>setData(data.rooms[0].patrimonies));
    },[]);

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>checked</th>
                        <th>#</th>
                        <th>Nº Patrimony</th>
                        <th>Description</th>
                        <th>type</th>
                        <th>ID Room</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            <td><input type="checkbox"/></td>
                            <td>{item.id}</td>
                            <td>{item.nPatrimony}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>1</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}