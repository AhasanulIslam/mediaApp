import { Card, Collapse, Button } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navber from "../../Navber";
import Validation from '../../SignUp/Validation';
import { LikeOutlined, CommentOutlined, ShareAltOutlined  } from '@ant-design/icons';


const { Panel } = Collapse;

const QuizDetalis = () => {
  const [values, setValues] = useState({
    content : "",
    index : ""
  })
  const [userData, setUserData] = useState({});
  const [like, setLike] = useState(0)


  const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    console.log("gg",values);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
        console.log("xcv", event.target);
    }

 
    const handleFromSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
        console.log(values);
        axios.post(`https://soapp-nodejs.herokuapp.com/post/create-post`,
     values,
     {
      headers: {

        Authorization: `Bearer ${localStorage.getItem("user-info")}`,
      },
    })
        .then(res => console.log(res.data))
        .catch(e => console.log(e))

        // navigate("/login")


    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            // submitForm(true)
        }
    }, [errors])
  
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
        userData.map((el,index) => (
          // <h1>{el.quiz_name}</h1>


          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 1800 }}>
          <div className="Data_Show" key={el.id}>
          <h4 className=""> {el.content}</h4>
          <h4 className="">{el.picture}</h4>
          <Button type="primary" shape="round" icon={<LikeOutlined />} size={size} >
        Like
      </Button>
      <form className='from-wrapper'>

<div className='email'>
     <div className='name'>
     {/* <label className='label'>Post</label> */}
     <input id={index} className='comment' type="text" name={`content_${index}`} value={values.content} onChange={handleChange}/>
     {errors.content && <p className='error'>{errors.content}</p>}
      </div>
 </div>



 <div>
      <Button type="primary" shape="round" icon={<CommentOutlined />} size={size} onClick={Comment}>
        Comment
      </Button> </div>
</form>
      <br/>
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