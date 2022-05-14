import { Card, Collapse, Button } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import { LikeOutlined, CommentOutlined, ShareAltOutlined  } from '@ant-design/icons';


const { Panel } = Collapse;

const QuizDetalis = () => {
  const [userData, setUserData] = useState({});
  const [like, setLike] = useState(0)
  
  useEffect(() => {
    console.log("lsdkflsdk");
    axios
      .get("https://soapp-nodejs.herokuapp.com/post/view-post", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-info")}`,
        },
      })
      .then((res) => {
        console.log(res.data.post);
        setUserData(res.data.post);
        // console.log(
        //   "quiz",
        //   res.data.map((res) => {
        //     console.log(res.data)
        //   })
        // );
        // setUserData(res.data.quiz);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Like = () => {

  // }

  // console.log("check", userData.data.quiz);
  const [size, setSize] = useState('large');
  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <div className="full_div" style={{ marginTop: 16 }}>
      <Navber/>

      {userData.length > 0 ? (
        userData.map(el => (
          // <h1>{el.quiz_name}</h1>


          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 1800 }}>
          <div className="Data_Show" key={el.id}>
          <h4 className=""> {el.content}</h4>
          <h4 className="">{el.picture}</h4>
          <Button type="primary" shape="round" icon={<LikeOutlined />} size={size} >
        Like
      </Button>
      <Button type="primary" shape="round" icon={<CommentOutlined />} size={size} onClick={Comment}>
        Comment
      </Button>
      <Button type="primary" shape="round" icon={<ShareAltOutlined />} size={size} >
        Share     
      </Button>
          </div>
          </Card>

             

              
             
              
              
          
          

       


        ))
      ): <h1>Data not found</h1>}
    </div>
  );
};




export default QuizDetalis