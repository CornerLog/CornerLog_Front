import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StudyCard from '../components/StudyCard';
import StudyCardTitle from '../components/StudyCardTitle';
import styles from '../css/ActivityPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ActivityPage = () => {
  const [category, setCategory] = useState("Corner");
  const [representImg, setRepresentImg] = useState();
  const [color, setColor] = useState('red');

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
    for (let pageNumber = 1; pageNumber < count / 10 + 1; pageNumber++) {
      Axios
        .get(`https://www.tistory.com/apis/post/list?access_token=${process.env.REACT_APP_TISTORY_ACCESS_TOKEN}&output=json&blogName=corner-ds&page=${pageNumber}`)
        .then((response) => {
          // console.log(response.data);
          if (response.data.tistory.item.posts) {
            tempArray.push(...response.data.tistory.item.posts);
          }
          if (tempArray.length >= count) {
            // id순으로 정렬
            setData(tempArray.sort(function (a, b) {
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
      "ReactStarter1": data.filter(data => data.categoryId === "1015295"),
      "ReactStarter2": data.filter(data => data.categoryId === "1015294"),
      "ReactMaster": data.filter(data => data.categoryId === "1015296"),
      "NodeJS": data.filter(data => data.categoryId === "1015297"),
      "Corner": data.filter(data => data.categoryId === "1015293")
    };
    setDataArray(categoryList)
  }, [data])

  useEffect(() => {
    console.log(dataArray.Corner)
  }, [dataArray])

  useEffect(() => {
    console.log(category);
    if (category === "Corner") {
      setRepresentImg("img/corner_logo.png");
    }
    else if (category === "React Starter 1") {
      setRepresentImg("img/rs1.jpg");
    }
    else if (category === "React Starter 2") {
      setRepresentImg("img/rs2.jpg");
    }
    else if (category === "React Master") {
      setRepresentImg("img/rm.jpg");
    }
    else if (category === "Node.js") {
      setRepresentImg("img/nj.png");
    }
  }, [category])

  return (
    <div className={styles.body}>
      <section className={styles.left}>
        <div className={styles.representativeImg}>
          <img src={representImg} />
        </div>
        <ul className={styles.BoardTitleList}>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("Corner")}>Corner</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("React Starter 1")}>React Starter 1</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("React Starter 2")}>React Starter 2</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("React Master")}>React Master</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("Node.js")}>Node.js</li><FontAwesomeIcon icon={faArrowRight} /></div>
        </ul>
      </section>
      <section className={styles.right}>
        {(dataArray.NodeJS?.length > 0) ?
          <>
            <StudyCard data={dataArray.NodeJS[0]}></StudyCard>
            <StudyCard data={dataArray.NodeJS[1]}></StudyCard>
            <StudyCard data={dataArray.NodeJS[2]}></StudyCard>
            <StudyCard data={dataArray.NodeJS[3]}></StudyCard>
          </>
          :
          <div>스피너 업로드 예정</div>
        }

        {(dataArray.NodeJS?.length > 0) ?
          <div className={styles.cardTitleList}>
            <hr />
            <StudyCardTitle data={dataArray.NodeJS[0]} />
            <StudyCardTitle data={dataArray.NodeJS[1]} />
            <StudyCardTitle data={dataArray.NodeJS[2]} />
            <StudyCardTitle data={dataArray.NodeJS[3]} />
          </div>
          :
          <div>글 목록 업로드 예정</div>
        }
      </section>
    </div>
  )
}

export default ActivityPage;