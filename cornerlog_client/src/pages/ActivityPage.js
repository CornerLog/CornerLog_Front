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
  const [cDataArray, setcDataArray] = useState([]);
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

  useEffect((category) => {
    if (category === "Corner") {
      setDataArray(dataArray.Corner)
    }
    console.log("dma", dataArray)
  }, [category])


  useEffect(() => {
    // 카테고리 별 대표이미지 변경
    console.log(category);
    if (category === "Corner") {
      setRepresentImg("img/corner_logo.png");
    }
    else if (category === "ReactStarter1") {
      setRepresentImg("img/rs1.jpg");
    }
    else if (category === "ReactStarter2") {
      setRepresentImg("img/rs2.jpg");
    }
    else if (category === "ReactMaster") {
      setRepresentImg("img/rm.jpg");
    }
    else if (category === "NodeJS") {
      setRepresentImg("img/nj.png");
    }
  }, [category])

  function CategoryData() {
    // 카테고리 별 데이터를 목록에 불러오기 위해
    // 해당 카테고리 데이터 반환
    if (category === "Corner") {
      return dataArray.Corner;
    }
    else if (category === "ReactStarter1") {
      return dataArray.ReactStarter1;
    }
    else if (category === "ReactStarter2") {
      return dataArray.ReactStarter2;
    }
    else if (category === "ReactMaster") {
      return dataArray.ReactMaster;
    }
    else if (category === "NodeJS") {
      return dataArray.NodeJS;
    }
  }
  return (
    <div className={styles.body}>
      <section className={styles.left}>
        <div className={styles.representativeImg}>
          <img src={representImg} />
        </div>
        <ul className={styles.BoardTitleList}>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("Corner")}>Corner</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("ReactStarter1")}>React Starter 1</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("ReactStarter2")}>React Starter 2</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("ReactMaster")}>React Master</li><FontAwesomeIcon icon={faArrowRight} /></div>
          <div className={styles.BoardTitleDiv}><li className={styles.BoardTitle} onClick={() => setCategory("NodeJS")}>Node.js</li><FontAwesomeIcon icon={faArrowRight} /></div>
        </ul>
      </section>
      <section className={styles.right}>
        {(CategoryData()?.length > 0) ?
          <>
            <StudyCard data={CategoryData()[CategoryData().length - 1]}></StudyCard>
            <StudyCard data={CategoryData()[CategoryData().length - 2]}></StudyCard>
            <StudyCard data={CategoryData()[CategoryData().length - 3]}></StudyCard>
            <StudyCard data={CategoryData()[CategoryData().length - 4]}></StudyCard>
          </>
          :
          <div>dataArray.{category}스피너 업로드 예정</div>
        }

        {(CategoryData()?.length > 0) ?
          <div className={styles.cardTitleList}>
            <hr />
            <StudyCardTitle data={CategoryData()[CategoryData().length - 1]} />
            <StudyCardTitle data={CategoryData()[CategoryData().length - 2]} />
            <StudyCardTitle data={CategoryData()[CategoryData().length - 3]} />
            <StudyCardTitle data={CategoryData()[CategoryData().length - 4]} />
          </div>
          :
          <div>글 목록 업로드 예정</div>
        }
      </section>
    </div>
  )
}

export default ActivityPage;