import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StudyCard from '../components/StudyCard';

const ActivityPage = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(15);
    const [dataArray, setDataArray] = useState([]);
    let tempArray = [];
    useEffect(() => {
        console.log(process.env.REACT_APP_TISTORY_ACCESS_TOKEN)
        Axios
        .get(`https://www.tistory.com/apis/post/list?access_token=${process.env.REACT_APP_TISTORY_ACCESS_TOKEN}&output=json&blogName=corner-ds&page=1`)
        // eslint-disable-next-line no-loop-func
        .then((response) => {
            setCount(response.data.tistory.item.totalCount);
        })
    }, [])
    
    useEffect(() => {
        for(let pageNumber=1; pageNumber<count/10+1; pageNumber++) {
            Axios
            .get(`https://www.tistory.com/apis/post/list?access_token=${process.env.REACT_APP_TISTORY_ACCESS_TOKEN}&output=json&blogName=corner-ds&page=${pageNumber}`)
            .then((response) => {
                // console.log(response.data);
                if(response.data.tistory.item.posts) {
                    tempArray.push(...response.data.tistory.item.posts);
                }
                if(tempArray.length >= count) {
                    // id순으로 정렬
                    setData(tempArray.sort(function(a,b) {
                        return a.id - b.id;
                    }));
                }
            })
        }
    }, [count])

    useEffect(() => {
        console.log(data)
        // categoryId별로 나누기
        const categoryList = {
            "ReactStarter1": data.filter(data => data.categoryId ==="1015295"),
            "ReactStarter2": data.filter(data => data.categoryId ==="1015294"),
            "ReactMaster": data.filter(data => data.categoryId ==="1015296"),
            "NodeJS": data.filter(data => data.categoryId === "1015297"),
            "Corner": data.filter(data => data.categoryId === "1015293")
        };
        setDataArray(categoryList)

    }, [data])
    

    
    
    return(
        <>
            {(dataArray.NodeJS?.length>0) ? 
                <StudyCard data={dataArray.NodeJS[0]}></StudyCard>
            :
                <div>스피너 업로드 예정</div>
            }
        </>
    )
}

export default ActivityPage;