import React, { useEffect, useState } from "react";
import Axios from "axios";
import StudyCard from "../components/StudyCard";
import StudyCardTitle from "../components/StudyCardTitle";
import styles from "../css/ActivityPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ActivityPage = () => {
  const [category, setCategory] = useState("");
  const [representImg, setRepresentImg] = useState();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(15);
  const [dataArray, setDataArray] = useState([]);
  const [result, setResult] = useState([]);
  const [spinner, setSpinner] = useState(true);
  let tempArray = [];

  useEffect(() => {
    console.log(process.env.REACT_APP_TISTORY_ACCESS_TOKEN);
    Axios.get(
      `https://www.tistory.com/apis/post/list?access_token=${process.env.REACT_APP_TISTORY_ACCESS_TOKEN}&output=json&blogName=corner-ds&page=1`
    )
      // eslint-disable-next-line no-loop-func
      .then((response) => {
        setCount(response.data.tistory.item.totalCount);
      });
  }, []);

  useEffect(() => {
    for (let pageNumber = 1; pageNumber < count / 10 + 1; pageNumber++) {
      Axios.get(
        `https://www.tistory.com/apis/post/list?access_token=${process.env.REACT_APP_TISTORY_ACCESS_TOKEN}&output=json&blogName=corner-ds&page=${pageNumber}`
      ).then((response) => {
        // console.log(response.data);
        if (response.data.tistory.item.posts) {
          tempArray.push(...response.data.tistory.item.posts);
        }
        if (tempArray.length >= count) {
          // id순으로 정렬
          setData(
            tempArray.sort(function (a, b) {
              return a.id - b.id;
            })
          );
        }
      });
    }
  }, [count]);

  useEffect(() => {
    // categoryId별로 나누기
    if (data && Object.keys(data).length >= count) {
      const categoryList = {
        ReactStarter1: data.filter((data) => data.categoryId === "1015294"),
        ReactStarter2: data.filter((data) => data.categoryId === "1015295"),
        ReactMaster: data.filter((data) => data.categoryId === "1015296"),
        NodeJS: data.filter((data) => data.categoryId === "1015297"),
        Corner: data.filter((data) => data.categoryId === "1015293"),
      };
      setDataArray(categoryList);
    }
  }, [data]);

  useEffect(() => {
    // 카테고리 별로 최신 4개 글 postid
    if (dataArray && Object.entries(dataArray).length > 0) {
      for (const [key, value] of Object.entries(dataArray)) {
        Axios.all([
          Axios.get(
            `https://www.tistory.com/apis/post/read?access_token=${
              process.env.REACT_APP_TISTORY_ACCESS_TOKEN
            }&output=json&blogName=corner-ds&postId=${
              value[value.length - 1].id
            }`
          ),
          Axios.get(
            `https://www.tistory.com/apis/post/read?access_token=${
              process.env.REACT_APP_TISTORY_ACCESS_TOKEN
            }&output=json&blogName=corner-ds&postId=${
              value[value.length - 2].id
            }`
          ),
          Axios.get(
            `https://www.tistory.com/apis/post/read?access_token=${
              process.env.REACT_APP_TISTORY_ACCESS_TOKEN
            }&output=json&blogName=corner-ds&postId=${
              value[value.length - 3].id
            }`
          ),
          Axios.get(
            `https://www.tistory.com/apis/post/read?access_token=${
              process.env.REACT_APP_TISTORY_ACCESS_TOKEN
            }&output=json&blogName=corner-ds&postId=${
              value[value.length - 4].id
            }`
          ),
        ]).then(
          Axios.spread((...responses) => {
            // console.log(responses);
            responses.forEach((data, index) => {
              let array = data.data.tistory.item.content.replace(
                /<[^>]*>?/g,
                ""
              );
              value[value.length - index - 1]["content"] = array;
              index--;
            });
            setCategory("Corner");
            setResult(dataArray.Corner);
            setSpinner(false);
          })
        );
      }
    }
  }, [dataArray]);

  useEffect(() => {
    // 카테고리 별 대표이미지, 글 목록(내용 포함)
    if (category === "Corner") {
      setRepresentImg("img/corner_logo.png");
      setResult(dataArray.Corner);
    } else if (category === "ReactStarter1") {
      setRepresentImg("img/rs1.jpg");
      setResult(dataArray.ReactStarter1);
    } else if (category === "ReactStarter2") {
      setRepresentImg("img/rs2.jpg");
      setResult(dataArray.ReactStarter2);
    } else if (category === "ReactMaster") {
      setRepresentImg("img/rm.jpg");
      setResult(dataArray.ReactMaster);
    } else if (category === "NodeJS") {
      setRepresentImg("img/nj.png");
      setResult(dataArray.NodeJS);
    }
  }, [category, dataArray]);

  useEffect(() => {
    console.log(result);
    if (result && result.length && result[result.length - 1].content) {
      setSpinner(false);
    }
  }, [result]);

  return (
    <div className={styles.body}>
      <section className={styles.left}>
        <div className={styles.representativeImg}>
          <img src={representImg} />
        </div>
        <ul className={styles.BoardTitleList}>
          <div className={styles.BoardTitleDiv}>
            <li
              className={styles.BoardTitle}
              onClick={() => setCategory("Corner")}
            >
              Corner
            </li>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.BoardTitleDiv}>
            <li
              className={styles.BoardTitle}
              onClick={() => setCategory("ReactStarter1")}
            >
              React Starter 1
            </li>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.BoardTitleDiv}>
            <li
              className={styles.BoardTitle}
              onClick={() => setCategory("ReactStarter2")}
            >
              React Starter 2
            </li>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.BoardTitleDiv}>
            <li
              className={styles.BoardTitle}
              onClick={() => setCategory("ReactMaster")}
            >
              React Master
            </li>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.BoardTitleDiv}>
            <li
              className={styles.BoardTitle}
              onClick={() => setCategory("NodeJS")}
            >
              Node.js
            </li>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </ul>
      </section>
      <section className={styles.right}>
        {result && result.length > 0 && (
          <>
            <StudyCard data={result[result.length - 1]}></StudyCard>
            <StudyCard data={result[result.length - 2]}></StudyCard>
            <StudyCard data={result[result.length - 3]}></StudyCard>
            <StudyCard data={result[result.length - 4]}></StudyCard>
          </>
        )}
        {result && result.length > 0 ? (
          <div className={styles.cardTitleList}>
            <hr />
            <StudyCardTitle data={result[result?.length - 5]} />
            <StudyCardTitle data={result[result?.length - 6]} />
            <StudyCardTitle data={result[result?.length - 7]} />
            <StudyCardTitle data={result[result?.length - 8]} />
          </div>
        ) : (
          <div></div>
        )}
        <div className={styles.pagination}>=</div>
      </section>
    </div>
  );
};

export default ActivityPage;
