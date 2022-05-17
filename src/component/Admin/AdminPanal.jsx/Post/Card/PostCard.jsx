import { Button, Card, Menu } from 'antd'
import React, { useState } from 'react'
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import axios from 'axios'

import {  Dropdown, message, Space, Tooltip } from "antd";
import { AppstoreAddOutlined, UserOutlined } from "@ant-design/icons";

const PostCard = ({postInfo}) => {
    const [values, setValues] = useState({
        content: "",
        index: "",
      });
    const [like, setLike] = useState(0);

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
        console.log("xcv", event.target.value);
      };
    
      function handleButtonClick(e) {
        message.info("Click on left button.");
        console.log("click left button", e);
      }
    
      function handleMenuClick(e) {
        message.info("Click on menu item.");
        console.log("click", e);
      }
    
      const handleFromSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        axios
          .post(`https://soapp-nodejs.herokuapp.com/post/create-post`, values, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user-info")}`,
            },
          })
          .then((res) => console.log(res.data))
          .catch((e) => console.log(e));
    
        // navigate("/login")
      };

      const postComment = (postInfo) => {

        console.log(postInfo)
        console.log(values)
      }

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: "1st menu item",
              key: "1",
              icon: <UserOutlined />,
            },
            {
              label: "2nd menu item",
              key: "2",
              icon: <UserOutlined />,
            },
            {
              label: "3rd menu item",
              key: "3",
              icon: <UserOutlined />,
            },
          ]}
        />
      );

  return (
    <Card
    title={postInfo.first_name}
    extra={
      <a href="#">
        <Dropdown.Button
          overlay={menu}
          placement="bottom"
          icon={<AppstoreAddOutlined />}
        >
          More
        </Dropdown.Button>
      </a>
    }
    style={{ width: 1800 }}
  >
    <div className="Data_Show" key={postInfo.id}>
      <h4 className=""> {postInfo.content}</h4>
      <h4 className="">{postInfo.picture}</h4>

      <form className="from-wrapper">
        <div className="email">
          <div className="name">
            {/* <label className='label'>Post</label> */}
            <input
              className="comment"
              type="text"
              name='content'
              value={values.content}
              onChange={handleChange}
            />
            {errors.content && (
              <p className="error">{errors.content}</p>
            )}
          </div>
        </div>

        <div>
          <Button
            type="primary"
            shape="round"
            icon={<CommentOutlined />}
            size='large'
            onClick={() => postComment(postInfo)}
          >
            Comment
          </Button>{" "}
        </div>
      </form>
      <br />
      <Button
        type="primary"
        shape="round"
        icon={<LikeOutlined />}
        size='large'
      >
        Like
      </Button>

      {/* <Button type="primary" shape="round" icon={<ShareAltOutlined />} size={size} >
Share     
</Button> */}
    </div>
  </Card>
  )
}

export default PostCard